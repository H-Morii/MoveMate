import defaultTruckProfilePicture from "../../assets/defaultProfilePicture.jpg"
import defaultTruckPicture from "../../assets/DefaultTruck.jpeg"

// Sample data structure for details
const driverDetails = {
  servicesOffered: [
    "Same-day delivery",
    "Scheduled delivery",
    "Overnight shipping",
    "Fragile item handling"
  ],
  pricing: {
    baseRate: "¥1000 per delivery within 5km",
    additionalKmRate: "¥200 per additional km",
    specialItems: "Price varies by item size and fragility"
  },
  reviews: [
    { author: "Takashi", rating: 5, comment: "Quick and reliable!" },
    { author: "Naoko", rating: 4, comment: "Friendly service, but was late once." },
  ]
};


const Profile = () => {
  return (
    <>
    <div className=" p-4">
    <div className="flex">
      <div className="">
        <figure>
          <img src={defaultTruckProfilePicture} alt="ProfilePicture" className=" h-[250px]"/>
        </figure>
      </div>
      <div className=" p-4">
        <p>Haruki Mori</p>
        <p>Tokyo,Adachi</p>
        <p>09012345678</p>
      </div>
      </div>
      <div className="">
        <div className="py-4">
          Car Details
        </div>
      <figure>
        <img src={defaultTruckPicture} alt="Truck" className="md:h-[400px]"/>
      </figure>
      </div>
      <details>
        <p> Vehicle Type: Mini "Kei" Truck</p>
        <p>License Plate: 足立７７や６２ー４６</p>
        <p>Max Load: 200kg</p>
      </details>
      </div>

    </>
  )
}

export default Profile
