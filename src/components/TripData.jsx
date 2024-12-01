import style from "./Trip.module.css";
const TripData = ({image, heading, text}) => {
  return (
    <div className={style.t_card}>
      <div className={style.t_image}>
        <img src={image} alt="image" />
      </div>
      <h4>{heading}</h4>
      <p>{text}</p>
    </div>
  )
}

export default TripData
