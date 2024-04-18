import defaultTruckProfilePicture from "../../assets/defaultProfilePicture.jpg"
import defaultTruckPicture from "../../assets/DefaultTruck.jpeg"
// Icons
import { GrLocation } from "react-icons/gr";
import { BsChat } from "react-icons/bs";

// Sample data structure for details
const driverDetails = {
  user: {
    userName: "Haruki Mori",
    location: "Toyko, Adachi",
    contact: "09012345678",
    lineLink: "htmhfsjdkfs",
    language: ["English", "Japanese"],
    aboutMe: "I deliver a variety of items from big furniture to small items. Please contact me if you have something to deliver!"
  },
  vehicle: {
    "Vehicle type": 'Mini "Kei" Truck',
    "License Plate": "足立７７や６２ー４６",
    "Max Load": "200kg"
  },
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
    <div className="flex justify-center">
    <div className=" p-4 md:my-11 md:max-w-[1200px]">
    <div className="flex justify-center">
      {/* user profile picture */}
      <div className="">
        <figure>
          <img src={defaultTruckProfilePicture} alt="ProfilePicture" className=" h-[200px] rounded-3xl shadow-2xl"/>
        </figure>
      </div>
      </div>
      {/* user details */}
      <div className="flex flex-col items-center ">
      <div className="py-4 px-2">
        <p className=" text-2xl font-bold">{driverDetails.user.userName}</p>
      </div>
      <div className="flex">
        <GrLocation size={"20"}/> 
        <p className="ml-1">{driverDetails.user.location}</p>
      </div>
      <div className="flex">
        <BsChat size={"20"}/>
        {driverDetails.user.language.map((lan) => (
          <p className="ml-1">{lan}</p>
        ))}
      </div>
      </div>
      <div className="">
        <h3 className=" font-semibold py-4">About Me</h3>
        <p>{driverDetails.user.aboutMe}</p>
      </div>
      <section className="">
        <div className="py-4">
          <h3 className="text-2xl py-2">Car Details</h3>
        </div>
      <figure>
        <img src={defaultTruckPicture} alt="Truck" className="md:h-[400px] shadow-2xl rounded-2xl"/>
      </figure>
      <div>
        {/* car details */}
        <h3 className=" text-2xl py-2">Vehicle Details</h3>
        <ul>
          {Object.entries(driverDetails.vehicle).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
        </div>
        <div>
          <h3 className=" text-2xl py-2">Service Offered</h3>
          <div className="flex">
            {driverDetails.servicesOffered.map((service) => (
              <div className=" flex border-2 text-center place-items-center h-[100px] md:px-5 shadow-xl">
              <h3>{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="flex justify-center p-4">
        <button className="border-4 p-4 rounded-3xl hover:bg-black hover:text-white">Book Now</button>
      </div>
      <div>
        <div className="flex justify-center">
            <input type="text" placeholder="Comment" className="w-[300px] bg-slate-100 rounded-md p-2 md:w-[500px]"/> <button className="ml-2 border p-3 rounded-md">Post</button>
        </div>
        <div className="">
            {driverDetails.reviews.map((review) => (
              <div className="flex py-5">
              <figure className="px-5">
                <img src={defaultTruckProfilePicture} alt="Profile Picture" className="w-[50px] rounded-full" />
              </figure>
              <div>
              <h3 className=" pb-1">@{review.author}</h3>
              <div>
              <p>{review.comment}</p>
              </div>
              </div>
              </div>
            ))}
        </div>
      </div>
      </div>
      </div>
        <div className="h-[100px] md:hidden">
      </div>
    </>
  )
}

export default Profile
