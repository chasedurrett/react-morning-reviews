import React, { Component } from "react";
import "./App.css";
import List from "./components/list";

function App() {
  return (
    <div className="App">
      <h1 className="movie-list-title">crazy good movies</h1>
      <List />
    </div>
  );
}
export default App;
