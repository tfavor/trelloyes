import React from 'react';
import './App.css';
import List from './composition/List';



function App(props) {

  

  const listComponents = props.store.lists.map((lists, i) => 
    
    <List 
      key={i} 
      header={props.store.lists[i].header} 
      cards={props.store.lists[i].cardIds.map(id => props.store.allCards[id])}
      />
  );
  console.log(listComponents);
  return (
   <header>
     <h1></h1>
     <div className="App-list">
      {listComponents}
     </div>
   </header>
  );
}

export default App;
