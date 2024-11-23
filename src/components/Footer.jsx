export default function Footer(props) {
    return (
        <footer>
            <div>
                <h2>{props.title}</h2>
                <h1>Astronomy picture of the day with NASA API</h1>
            </div>
            <button onClick={props.handleInfoClick}><i className="fa-solid fa-circle-info"></i></button>
        </footer>
    )
}