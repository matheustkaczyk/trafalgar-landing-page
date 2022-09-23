import leading01 from '../../assets/leading01.svg';
import leading02 from '../../assets/leading02.svg';

const Leading = () => {
  return(
    <section className='leading-page'>
      <div className='leading-01'>
        <img src={leading01} alt="svg image" />
        <div>
          <h2>Leading healthcare providers</h2>
          <hr />
          <p>
            Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver
          </p>
          <button>Learn more</button>
        </div>
      </div>
      <div className='leading-02'>
        <img src={leading02} alt="svg image" />
        <div>
          <h2>Download our mobile apps</h2>
          <hr />
          <p>
            Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely
          </p>
          <button>Download</button>
        </div>
      </div>
    </section>
  )
}

export default Leading;
