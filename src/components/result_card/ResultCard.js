import './ResultCard.css'
import React from 'react';

const ResultCard = props => {
    return (
        <div className="col">
            <div className="ui link card">
                <div className="image">
                    <a href={props.imageDownload} target="_blank" rel="noreferrer" className="fullImage"><img src={props.src} alt={props.alt}/></a>
                </div>
                <div className="content">
                    <a className="header" href={props.userHref} target="_blank" rel="noreferrer">{`${props.userName} ${props.userSurname}`}</a>
                    <div className="meta">
                        <span className="date">{props.alt}</span>
                    </div>
                </div>
                <div className="extra content">
                    <span>
                        <i className="like icon"></i>
                        {`${props.likes} likes`}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ResultCard