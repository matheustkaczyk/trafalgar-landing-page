const Card = (props) => {
  return(
    <article>
      <img src={props.img} />
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </article>
  )
}

export default Card;
