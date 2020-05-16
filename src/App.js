import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>Online delivery like you've never seen!</p>
      <div className="nav-links">

        <Link to="/">Home</Link>
      </div>
    </>
  );
};
export default App;
