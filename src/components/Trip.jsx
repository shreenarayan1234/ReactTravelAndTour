import style from "./Trip.module.css";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";
import TripData from "./TripData";
const Trip = () => {
  return (
    <div className={style.trip}>
      <h1>Recent Trip</h1>
      <p>You can discover unique destinations using Google Maps</p>
      <div className={style.tripcard}>
        <TripData
        image = {Trip1}
        heading="Trip in Thailand"
        text = "A trip to Thailand offers a vibrant mix of stunning beaches, lush jungles, and rich culture. Visitors can explore bustling Bangkok with its temples and markets, relax on tropical islands like Phuket and Krabi, and experience Chiang Mai's serene mountain scenery. Thai cuisine, famous for its bold flavors, adds to the adventure. Known for its warm hospitality, Thailand suits all types of travelers, from luxury seekers to backpackers."
        />
        <TripData
        image = {Trip2}
        heading="Trip in South Korea"
        text = "A trip to South Korea offers a dynamic blend of modernity and tradition. Visitors can explore bustling cities like Seoul, known for its skyscrapers, historic palaces, and K-pop culture, or visit serene temples and scenic countryside in places like Gyeongju and Jeju Island. The country is famous for its delicious cuisine, including kimchi, Korean BBQ, and street food. With a rich cultural heritage, vibrant festivals, and cutting-edge technology, South Korea is a must-visit for history enthusiasts and modern explorers alike."
        />
        <TripData
        image = {Trip3}
        heading="Trip in Nepal"
        text = "A trip to Nepal is a journey into natural beauty and cultural richness. Home to the majestic Himalayas, including Mount Everest, Nepal is a paradise for trekkers and adventure seekers. Visitors can explore Kathmandu's ancient temples and bustling markets, visit the serene lakes of Pokhara, and experience wildlife in Chitwan National Park. Rich in spiritual heritage, Nepal offers a deep connection to Buddhism and Hinduism, with sacred sites like Lumbini, the birthplace of Buddha. Its warm hospitality and breathtaking landscapes make it a unique and unforgettable destination."
        />
      </div>
    </div>
  )
}

export default Trip
