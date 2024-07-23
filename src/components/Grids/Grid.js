import React from "react";
import "./Grid.css";
import DefaultCard from "../Cards/DefaultCard";
import { CardTypes } from "../../utils/types";

const Grid = ({ data }) => {
  return (
    <div className='table-container'>
      {data.sectionBooks.map((item, index) => (
        <DefaultCard
          key={index}
          title={data.allBooks.find((book) => item === book.id).title}
          description={
            data.allBooks.find((book) => item === book.id).description
          }
          imageId={data.allBooks.find((book) => item === book.id).imageId}
          type={CardTypes.Book}
          id={data.allBooks.find((book) => item === book.id).id}
        />
      ))}
      {data.viewMore && (
        <DefaultCard
          imageId={data.viewMore.imageId}
          title={data.viewMore.title}
          type={CardTypes.ViewMore}
        />
      )}
    </div>
  );
};

export default Grid;
