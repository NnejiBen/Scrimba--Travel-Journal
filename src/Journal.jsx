import React from "react";

function Journal(props) {
    return (
        <div className="journal">
            <div>
                <img src={props.item.imageUrl} className="journal--photo"/>
            </div>
            <div className="journal--right-col">
                <div className="location-and-link">
                    <img src="https://i.postimg.cc/qqw5LTTw/location.png" className="location-image"/>
                    <h3 className="journal--location">{props.item.location}</h3>
                    <a href={props.item.googleMapsUrl} className="google-maps-link" target="blank">View on Google Maps</a>
                </div>
                <h1 className="journal--title">{props.item.title}</h1>
                <div className="dates-section">
                    <span className="dates">{props.item.startDate}</span>
                    <span className="dates">&nbsp;-&nbsp;</span>
                    <span className="dates">{props.item.endDate}</span>
                </div>
                <p className="journal--description">{props.item.description}</p>
            </div>
        </div>

    )
}

export default Journal