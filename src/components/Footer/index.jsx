import logo from '../../assets/logo.svg';

const Footer = () => {
  return(
    <footer>
      <div className='footer-wrapper'>
        <div className='footer-infos'>
          <img src={logo} alt="logo" />
          <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
          <p>© 2021. All rights reserved</p>
          <p>Construído por Matheus Tkaczyk Ribeiro</p>
        </div>
        <nav>

          <div>
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Testimonials</li>
              <li>Find a doctor</li>
              <li>Apps</li>
            </ul>
          </div>
          <div>
            <h4>Region</h4>
            <ul>
              <li>Indonesia</li>
              <li>Singapore</li>
              <li>Hongkong</li>
              <li>Canada</li>
            </ul>
          </div>
          <div>
            <h4>Help</h4>
            <ul>
              <li>Help center</li>
              <li>Contact support</li>
              <li>Instructions</li>
              <li>How it works</li>
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  )
}

export default Footer;
