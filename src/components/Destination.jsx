import Pond1 from "../assets/1.jpg";
import Pond2 from "../assets/2.jpg";
import Pond3 from "../assets/3.jpg";
import Pond4 from "../assets/4.jpg";
import style from "./Destination.module.css";
import DestinationData from "./DestinationData";
const Destination = () => {
  return (
    <div className={style.destination}>
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to learn about nature</p>
      <DestinationData
        cName="first_des"
        heading="Rauta, Udayapur"
        text=" Rauta Pokhari boasts a network of seven dhara (water exits), from
            which the Triyuga River originates. The name Triyuga signifies its
            formation by three of these seven dharas. The remaining two streams
            contribute to the creation of the Rankuli and Andheri rivers,
            ultimately merging into the mighty Saptakoshi river. The sixth
            stream, Baruwa, gracefully flows west of Gaighat, joining the
            Triyuga River, while the seventh stream, Hemganga, flows northward
            to Hulma. From a religious standpoint, the Hemganga River is revered
            as a sacred pilgrimage site, akin to the holy Ganges."
        img1={Pond1}
        img2={Pond2}
      />
      <DestinationData
      cName="first_des_reverse"
        heading="Tapli, Udayapur"
        text=" Rauta Pokhari boasts a network of seven dhara (water exits), from
            which the Triyuga River originates. The name Triyuga signifies its
            formation by three of these seven dharas. The remaining two streams
            contribute to the creation of the Rankuli and Andheri rivers,
            ultimately merging into the mighty Saptakoshi river. The sixth
            stream, Baruwa, gracefully flows west of Gaighat, joining the
            Triyuga River, while the seventh stream, Hemganga, flows northward
            to Hulma. "
        img1={Pond3}
        img2={Pond4}
      />
    </div>
  );
};

export default Destination;
