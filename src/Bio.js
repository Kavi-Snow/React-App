import React, { useEffect, useState } from 'react';

function Bio() { 
  
  const sen1 = 'Kavisha ';
  const sen2 = 'Pavan';
  const element = React.createElement(
    "button" ,
    {
      className: "btn",
      onClick: () => alert("Clicked!"),

    },

   `${sen1}${sen2}` 
  );
  const [currentTime,setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect (() => { const timer = setInterval(() => { 
    setCurrentTime(new Date().toLocaleTimeString());
  },1000);

    return () => clearInterval(timer);
}, []);
   const [count,counta,setCount,setCounta] = useState(0,100);

  useEffect (() => { const counting =  setInterval(() => { 
   setCount(count => count + 1);
  },1000);
 

    return () => clearInterval(counting);
}, []);

  useEffect (() => { const counting =  setInterval(() => { 
    setCounta(counta => counta + 10);
  },500);
 

    return () => clearInterval(counting);
}, []);

return (
  <div>
   <h1> Welcome to the TimeZone </h1>
   <p> Current Time:{currentTime} </p>
    {element}
    <p>Counting:{count}</p>
    <p>Another Counting:{counta}</p>
    
  </div>
);
}


export default Bio;
