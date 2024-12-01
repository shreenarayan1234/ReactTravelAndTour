import style from "./Destination.module.css";
// import Pond1 from "../assets/1.jpg";
// import Pond2 from "../assets/2.jpg";
// import Pond3 from "../assets/3.jpg";
// import Pond4 from "../assets/4.jpg";

const DestinationData = ({ heading, text,img1, img2,cName }) => {
  return (
    <div>
      <div className={`${style[cName]}`}>
        <div className={style.des_text}>
          <h2>{heading}</h2>
          <p>{text}</p>
        </div>
        <div className={style.image}>
          <img src={img1} alt="pond" />
          <img src={img2} alt="pond" />
        </div>
      </div>
    </div>
  );
};

export default DestinationData;
