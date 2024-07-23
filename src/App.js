import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllBooksPage from "./pages/AllBooksPage";
import DonationPage from "./pages/DonationPage";
import Footer from "./components/Sections/Footer";
import BookPage from "./pages/BookPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/livro/:id' element={<BookPage />} />
          <Route path='/livros' element={<AllBooksPage />} />
          <Route path='/donate' element={<DonationPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
