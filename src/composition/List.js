import React from 'react';
import Card from './Card';


function List(props) {

    const cardComponents = props.cards.map((card, i) => 
        <Card 
           key={props.cards[i].id} 
           title={props.cards[i].title}
           content={props.cards[i].content}
           />
        );
    return (
        <section className="List">
            <header className="List-header"></header>
            <div className="List-cards">
                {cardComponents}
            </div>
        </section>
    );
}

export default List;