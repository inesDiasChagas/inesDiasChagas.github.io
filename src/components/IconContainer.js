import "./IconContainer.css";

function IconContainer({ imgSrc, title }) {
  return (
    <div className='container'>
      <span className='title'>{title}</span>
      <div className='icon-container'>
        <img src={imgSrc} alt='LinkedinIcon' className='icon' />
      </div>
    </div>
  );
}

export default IconContainer;
