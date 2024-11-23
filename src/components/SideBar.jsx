
export default function SideBar(props) {
    return (props.showSideBar &&
        (<div className="sidebar">
            <button className="closeButton" onClick={props.handleInfoClick}><i className="fa-solid fa-x"></i></button>
            <div className="sidebarContents">
                <h2>{props.title}</h2>
                <p className='dateTag'>{props.date}</p>
                <div>
                    <p>{props.description}</p>
            </div>
            {/* <p>Credits to:</p>
            <a href="https://apod.nasa.gov/apod/astropix.html" className="apod_link">https://apod.nasa.gov/apod/astropix.html</a> */}
            </div>
        </div>)
    )
}