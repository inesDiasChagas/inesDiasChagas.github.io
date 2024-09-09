import "./IconsContainer.css";

function IconsContainer({ icons, title, onClick }) {
  return (
    <div className='container'>
      {title && <span className='title'>{title}</span>}
      {icons && (
        <div className='icon-container'>
          {icons.map((icon, index) => {
            return (
              <img
                key={index}
                src={icon.iconSrc}
                alt={icons.name}
                className='icon'
                onClick={onClick}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default IconsContainer;
