import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Splash from "./pages/Splash/index"

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Splash />
      </Route>
    </Router>
  );
}

export default App;
