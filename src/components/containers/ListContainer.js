import "./ListContainer.css";

function ListContainer({ list, title }) {
  return (
    <div className='container'>
      {title && <span className='title'>{title}</span>}
      {list && (
        <div className='list-container'>
          <ul>
            {list.map((listElement, index) => {
              return (
                <li key={index}>
                  {listElement.title} - {listElement.subtitle}
                  <br />({listElement.startDate} - {listElement.endDate})
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ListContainer;
