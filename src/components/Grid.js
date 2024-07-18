import React from "react";
import Card from "./Cards/Card";
import "./Grid.css";
import ViewAllCard from "./Cards/ViewAllCard";

const Grid = ({ data }) => {
  return (
    <div className='table-container'>
      {data.sectionBooks.map((item, index) => (
        <Card
          key={index}
          title={data.allBooks.find((book) => item === book.id).title}
          description={
            data.allBooks.find((book) => item === book.id).description
          }
          imageId={data.allBooks.find((book) => item === book.id).imageId}
        />
      ))}
      {data.viewMore && (
        <ViewAllCard
          imageId={data.viewMore.imageId}
          title={data.viewMore.title}
        />
      )}
    </div>
  );
};

export default Grid;
