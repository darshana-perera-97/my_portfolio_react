import React from "react";
import SingleTopic from "./SingleTopic";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';


export default function RightBar() {
  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        right: "0",
        background: "#29323c",
        height: "100%",
      }}
    >
      <Router>
        <Link to="/">
          <SingleTopic data="Home" />
        </Link>
        <Link to="/projects">
          <SingleTopic data="Projets" />
        </Link>
        <Link to="/about">
          <SingleTopic data="About" />
        </Link>
        <Link to="/contacts">
          <SingleTopic data="Contacts" />
        </Link>
      </Router>      
    </div>
  );
}
