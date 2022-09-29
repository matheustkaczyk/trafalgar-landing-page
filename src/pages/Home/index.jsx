import homeImg from '../../assets/trafalgar-home.svg';

const Home = () => {
  return(
    <section className='home-page'>
      <div className='home-wrapper'>
        <div>
          <h1>Virtual healthcare for you</h1>
          <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
          <button>Consult today</button>
        </div>
        <img src={homeImg} alt="home image" />
      </div>
    </section>
  )
}

export default Home;
