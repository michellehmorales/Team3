import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Outlet, Navigate, NavLink } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import './Welcome.css';
import Login from "./Login";
import Signup from "./Signup";
import Projects from "./Projects";
import Project_test from "./Project_test";
import Existing_Project from "./Existing_Project";

const onButtonClick = () => {
    // find out how to work with this
}


// React-Router 
function Welcome() {
  return (
    
    <div classname="mainContainer">
    <div className="Title">
      Welcome!
    </div>
       <Router>
      <nav>
        <ul>
          <li>
            <Link to="/signup">
                <Button variant="contained">
                    Signup
                </Button>
            </Link>
          </li>
          <li>
            <Link to="/login">
                
                <Button variant="outlined">
                    Login
                </Button>
            </Link>
          </li>
          <li>
            <Link to="/projects">
            
                <Button variant="outlined">
                    Projects
                </Button>
            </Link>
          </li>
        </ul>
      </nav>

     
        <Routes>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/projects" element={<Existing_Project/>}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default Welcome;