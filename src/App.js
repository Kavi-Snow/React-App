import React from 'react';
import rose from './rose.jpg';

function App() {
  const message = 'Kavisha';
  const para = 'I am an alien ';
  const greet = `Good Evening ${message}`;
  const flower = <img src={rose} alt='flowers'/>;
  const Welcome = (props) => {
    return <div> {props.children} </div>;
  };


  return (
   <Welcome>
   <div>
    <h1>{greet}</h1>
    <h2>{para}</h2>
    {flower}
   </div>
   </Welcome> 
  );
}

export default App;
