import React from 'react';
//import Potato from './Potato';

function Food(props){
  console.log(props);
  return <h2>I like {props.fav}</h2>
}

function App() {
  return (
    <div>
        <h1>Hello</h1>
        <Food fav="kimchi" />
        <Food fav="ramen" />
        <Food fav="samguopsal" />
    </div>
  );
}

export default App;
