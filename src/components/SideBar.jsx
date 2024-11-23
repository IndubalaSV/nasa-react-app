
export default function SideBar(props) {
    let date = new Date();
    return (props.showSideBar &&
        (<div className="sidebar">
            <button className="closeButton" onClick={props.handleInfoClick}><i className="fa-solid fa-x"></i></button>
            <div className="sidebarContents">
                <h2>{props.title}</h2>
                <p className='dateTag'>{date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()}</p>
                <div>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>)
    )
}