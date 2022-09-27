import img1 from '../../assets/article-1.png';
import img2 from '../../assets/article-2.png';
import img3 from '../../assets/article-3.png';

const data = [
  {
    img: img1,
    alt: 'img1',
    title: 'Disease detection, check up in the laboratory',
    text: 'In this case, the role of the health laboratory is very important to detect diseases in the early stages...'
  },
  {
    img: img2,
    alt: 'img2',
    title: 'Herbal medicines that are safe for consumption',
    text: 'Herbal medicine is very widely used at this time because its very good to your health...'
  },
  {
    img: img3,
    alt: 'img3',
    title: 'Natural care for healty facial skin',
    text: 'A healthy lifestyle should start from now and also for your skin health. There are some...'
  }
];

const Articles = () => {
  return(
    <section className="articles-section">
      <div>
        <h1>Check out our latest articles</h1>
        <hr />
      </div>
      <div className="articles-wrapper">
        {
          data.map((item, index) => (
            <div key={index} className="article-item">
              <img src={item.img} alt={item.alt} />
              <div className="article-info">
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
              <button>Read more {'->'}</button>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Articles;
