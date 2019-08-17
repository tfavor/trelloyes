import React from 'react';
import './Card.css';

function Card(props) {
    return (
        <div className="Card">
            <h3 className="Card-title">
                {props.title}
            </h3>
            <p className="Card-content">
                {props.content}
            </p>
        </div>
    );
}

export default Card;