import React from "react";
import Card from "./Cards/Card";
import "./Grid.css";
import ViewAllCard from "./Cards/ViewAllCard";

const Grid = ({ data }) => {
  return (
    <div className='table-container'>
      {data.books.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
        />
      ))}
      {data.viewAll && (
        <ViewAllCard
          key={data.books.length}
          imageUrl={data.viewAll.imageUrl}
          title={data.viewAll.title}
        />
      )}
    </div>
  );
};

export default Grid;
