import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Donate from "./pages/Donate";
import "./App.css";

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<Books />} />
          <Route path='/donate' element={<Donate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
