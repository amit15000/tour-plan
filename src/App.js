import { useState } from "react";
import "./App.css";
import Tours from "./components/Tours";
import data from "./data";

function App() {
  const [tours, setTours] = useState(data);
  console.log(data[0].image);

  return (
    <div>
      <Tours allPlaceCollection={tours}></Tours>
    </div>
  );
}

export default App;
