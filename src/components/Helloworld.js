import { useState } from "react";
import './helloworld.css';

function Helloworld() {
  const [todaysDate, setTodaysDate] = useState("");
  
  const showDate = () => {
    setTodaysDate(Date());
  };

  return (
    <div className="my-component">
      <h1>Hi Viprant employees, welcome to react</h1>
      <button onClick={showDate}>Get Todays Date</button>
      <h2>{todaysDate}</h2>
    </div>
  );
}

export default Helloworld;
