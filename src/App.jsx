import React from 'react';
import MainContent from './components/MainContent';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';

function App() {
  let [data, setData] = useState(null);
  const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
  const localKey = `NASA-${new Date().toISOString().split('T')[0]}`;
  useEffect(() => {
    let localData = localStorage.getItem(localKey);
    if (localData) {
      setData(JSON.parse(localData));
      console.log('Fetched from Local Storage');
      return;
    }
    localStorage.clear();
    const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        console.log('Fetched from API');
        setData(data);
        localData=localStorage.setItem(localKey, JSON.stringify(data));
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  let [showSideBar, setShowSideBar] = React.useState(true);
  function handleInfoClick() {
    setShowSideBar(!showSideBar);
  }
  let properties = {
    showSideBar: showSideBar,
    setShowSideBar: setShowSideBar,
    handleInfoClick: handleInfoClick,
    url: data?.url,
    title: data?.title,
    description: data?.explanation,
    date: data?.date,
  }
  return (
    <div>
      {data ? (
        <div className="App">
          <MainContent {...properties} />
          <SideBar {...properties} />
          <Footer {...properties} />
        </div>
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
    </div>
  );
}

export default App;
