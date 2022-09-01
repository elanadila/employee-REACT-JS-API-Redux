import React, { Component } from 'react'
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import HomeContainer from './containers/HomeContainer';
import CreateUserContainer from './containers/CreateUserContainer';
import DetailUserContainer from './containers/DetailUserContainer';
import EditUserContainer from './containers/EditUserContainer';

export default class App extends Component {
  
  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<HomeContainer/>} />
          </Routes>
          <Routes>
            <Route path="/create" element={<CreateUserContainer/>} />
          </Routes>
          <Routes>
            <Route path="/detail/:id" element={<DetailUserContainer />} />
          </Routes>
          <Routes>
            <Route path="/edit/:id" element={<EditUserContainer />} />
          </Routes>
        </Router>
      
        
      </div>
    )
  }
}
