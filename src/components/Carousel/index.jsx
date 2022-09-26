const Carousel = (data) => {
  return(
    <div className="carousel">
      <div className="carousel-inner">
        {data.forEach(item => {
          <div className="carousel-item">
          <div>
            <img src={item.img} alt={item.alt} />
            <h3>{data.name}</h3>
            <h4>{data.subtitle}</h4>
          </div>
            <p>{data.text}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default Carousel;
