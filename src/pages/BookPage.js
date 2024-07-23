import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../bookMockData.json";

import NavbarWrapper from "../components/Navbar/NavbarWrapper";
import SectionWrapper from "../components/Sections/SectionWrapper";
import "./BookPage.css";
import DonateSection from "../components/Sections/DonateSection";
import Button from "../components/Buttons/Button";

const BookDetailPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [selectedChapterIndex, setSelectedChapterIndex] = useState(null);

  useEffect(() => {
    if (data.book.id === id) {
      setBook(data.book);
    }
  }, [id]);

  const handleChapterClick = (chapterIndex) => {
    if (chapterIndex !== selectedChapterIndex) {
      setSelectedChapterIndex(chapterIndex);
    } else {
      setSelectedChapterIndex(null);
    }
  };

  const handleGoToNextChapter = () => {
    if (
      selectedChapterIndex !== null &&
      selectedChapterIndex < book.chapters.length - 1
    ) {
      setSelectedChapterIndex(selectedChapterIndex + 1);
      document
        .getElementById("chapter-content")
        .scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleGoToPreviousChapter = () => {
    if (selectedChapterIndex !== null && selectedChapterIndex > 0) {
      setSelectedChapterIndex(selectedChapterIndex - 1);
      document
        .getElementById("chapter-content")
        .scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!book) {
    return (
      <React.Fragment>
        <div className='book-header-container'>
          <NavbarWrapper />
        </div>
        <SectionWrapper className='book-not-found-container'>
          <h1>Book Not Found</h1>
          <p>Sorry, the book you are looking for does not exist.</p>
        </SectionWrapper>
      </React.Fragment>
    );
  }

  const imageUrl = process.env.PUBLIC_URL + "/" + book.imageId;
  const chapter =
    selectedChapterIndex !== null ? book.chapters[selectedChapterIndex] : null;
  return (
    <React.Fragment>
      <div className='book-header-container'>
        <NavbarWrapper />
      </div>
      <SectionWrapper className='book-detail-container'>
        <div className='book-metadata'>
          <img src={imageUrl} alt={book.title} className='book-image' />
          <h1 className='book-title'>{book.title}</h1>
          <h2 className='book-author'>de {book.author}</h2>
          <p className='book-description'>{book.description}</p>
          <p className='book-score'>Pontuação: {book.score}</p>
        </div>
        <div className='book-chapters'>
          <h3>Capítulos</h3>
          <ul>
            {book.chapters.map((chapter, index) => (
              <li key={index} onClick={() => handleChapterClick(index)}>
                {chapter.title}
              </li>
            ))}
          </ul>
        </div>
        {chapter && (
          <div className='chapter-content' id='chapter-content'>
            <h4>{chapter.title}</h4>
            {chapter.content.map((item, index) => {
              if (item.type === "text") {
                return <p key={index}>{item.value}</p>;
              } else if (item.type === "image") {
                return (
                  <img
                    key={index}
                    src={process.env.PUBLIC_URL + "/" + item.value}
                    alt={`Chapter ${chapter.title}`}
                    className='chapter-image'
                  />
                );
              } else {
                return null;
              }
            })}
            <div className='navigation-buttons'>
              {selectedChapterIndex > 0 && (
                <Button
                  onClick={handleGoToPreviousChapter}
                  className='nav-button'
                >
                  Anterior
                </Button>
              )}
              {selectedChapterIndex < book.chapters.length - 1 && (
                <Button
                  onClick={handleGoToNextChapter}
                  className='nav-button'
                ></Button>
              )}
            </div>
          </div>
        )}
      </SectionWrapper>
      <DonateSection />
    </React.Fragment>
  );
};

export default BookDetailPage;
