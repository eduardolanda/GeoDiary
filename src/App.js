import React from "react";
import "./App.css";

//components
import ListDiary from "./components/ListDiary";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <ListDiary />
    </div>
  );
};

export default App;
