import React, { useState } from "react";
import data from "./data"
import Tours from "./Components/Tours";
const App = () => {

  const[tours,setTours] =useState(data)

return (
  <div>
  <Tours tours={tours}></Tours>
</div>
)
};

export default App;
