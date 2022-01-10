import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Pay from './Pay'
import Success from './Success'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route  path="/" element= {<Pay />}/>
        <Route  path="/success" element= {<Success />}/>
        
       
      </Routes>
    </Router>
  )
}

export default App;
