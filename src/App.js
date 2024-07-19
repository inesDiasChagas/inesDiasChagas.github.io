import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Donate from "./pages/Donate";
import "./App.css";
import Footer from "./components/Sections/Footer";

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/livros' element={<Books />} />
          <Route path='/donate' element={<Donate />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
