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
    <section>
      <h1>What our customers are saying</h1>
      <hr />
      <div>
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index}>
              <img src={item.img} alt={item.alt} />
              <h2>{item.name}</h2>
              <h3>{item.subtitle}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Customers;
