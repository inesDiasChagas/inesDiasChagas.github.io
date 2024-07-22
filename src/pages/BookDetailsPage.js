import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../bookMockData.json";

import NavbarWrapper from "../components/Navbar/NavbarWrapper";
import SectionWrapper from "../components/Sections/SectionWrapper";
import SectionDonate from "../components/Sections/SectionDonate";
import "./BookDetailsPage.css";

const BookDetailPage = () => {
  const { title } = useParams();
  const [book, setBook] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);

  useEffect(() => {
    // Simulando uma chamada à API para buscar os dados do livro com base no título
    const bookData = data[title];
    if (bookData) {
      setBook(bookData);
    }
  }, [title]);

  const handleChapterClick = (chapter) => {
    setSelectedChapter(chapter);
  };

  if (!book) {
    return <div>Book not found</div>;
  }

  const imageUrl = process.env.PUBLIC_URL + "/" + book.imageId;
  return (
    <React.Fragment>
      <div className='book-header-container'>
        <NavbarWrapper />
      </div>
      <SectionWrapper className='book-detail-container'>
        <div className='book-metadata'>
          <img src={imageUrl} alt={book.title} className='book-image' />
          <h1 className='book-title'>{book.title}</h1>
          <h2 className='book-author'>by {book.author}</h2>
          <p className='book-description'>{book.description}</p>
          <p className='book-score'>Score: {book.score}</p>
        </div>
        <div className='book-chapters'>
          <h3>Chapters</h3>
          <ul>
            {book.chapters.map((chapter, index) => (
              <li key={index} onClick={() => handleChapterClick(chapter)}>
                {chapter.title}
              </li>
            ))}
          </ul>
        </div>
        {selectedChapter && (
          <div className='chapter-content'>
            <h4>{selectedChapter.title}</h4>
            {selectedChapter.content.map((item, index) => {
              if (item.type === "text") {
                return <p key={index}>{item.value}</p>;
              } else if (item.type === "image") {
                return (
                  <img
                    key={index}
                    src={process.env.PUBLIC_URL + "/" + item.value}
                    alt={`Chapter ${selectedChapter.title}`}
                    className='chapter-image'
                  />
                );
              } else {
                return null;
              }
            })}
          </div>
        )}
      </SectionWrapper>
      <SectionDonate />
    </React.Fragment>
  );
};

export default BookDetailPage;
