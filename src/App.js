import React from 'react';


function App() {
  const element = React.createElement(
    "button",
    {
      className: "btn",
      onClick: () => alert("Clicked!"),

    },

    "Click Me"
  );
  
  return (
  <div>
    {element}
  </div>
);
}


export default App;
