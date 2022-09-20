import Card from '../../components/Card';

import search from '../../assets/lupa.svg';
import pharmacy from '../../assets/pharmacy.svg';
import consultation from '../../assets/consultation.svg';
import details from '../../assets/details.svg';
import care from '../../assets/care.svg';
import tracking from '../../assets/tracking.svg';

const infos = [
  {
    title: 'Search doctor',
    description: 'Choose your doctor from thousands of specialist, general, and trusted hospitals.',
    image: search,
  },
  {
    title: 'Online pharmacy',
    description: 'Buy  your medicines with our mobile application with a simple delivery system.',
    image: pharmacy,
  },
  {
    title: 'Consultation',
    description: 'Free consultation with our trusted doctors and get the best recomendations.',
    image: consultation,
  },
  {
    title: 'Details info',
    description: 'Free consultation with our trusted doctors and get the best recomendations.',
    image: details,
  },
  {
    title: 'Emergency care',
    description: 'You can get 24/7 urgent care for yourself or your children and your lovely family.',
    image: care,
  },
  {
    title: 'Tracking',
    description: 'Track and save your medical history and health data.',
    image: tracking,
  }
]

const Services = () => {
  return (
    <section className="services-page">
      <div>
        <h1>Our Services</h1>
        <hr />
        <p>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
      </div>
      <div className='articles-wrapper'>
        {infos.map((info, index) => (
          <Card
            key={index}
            title={info.title}
            text={info.description}
            image={info.image}
          />
        ))}
      </div>
      <button>Learn more</button>
    </section>
  );
}

export default Services;
