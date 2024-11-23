export default function MainContent(props) {
    return (
        <div className="imgContainer">
            <img className="bgImage" src={props.url} alt="apod"/>
        </div>
    )
}