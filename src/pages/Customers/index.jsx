import Slider from 'react-slick';

import tkaczyk from '../../assets/tkaczyk.jpg';

const data = [
  {
    img: tkaczyk,
    alt: 'tkaczyk',
    name: 'Matheus Tkaczyk Ribeiro',
    subtitle: 'Software Developer',
    text: 'Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely.'
  },
  {
    img: tkaczyk,
    alt: 'tkaczyk',
    name: 'Matheus Tkaczyk Ribeiro',
    subtitle: 'Software Developer',
    text: 'Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely.'
  },
]

const Customers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return(
    <section className='customers-section'>
      <div className='customer-wrapper'>
        <div className='customer-hero'>
          <h1>What our customers are saying</h1>
          <hr />
        </div>
        <div className='slider-wrapper'>
          <Slider {...settings}>
            {data.map((item, index) => (
              <div key={index} className="carousel-item">
                <div className='item-info'>
                  <img src={item.img} alt={item.alt} />
                  <div>
                    <h4>{item.name}</h4>
                    <h5>{item.subtitle}</h5>
                  </div>
                </div>
                <p>{item.text}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Customers;
