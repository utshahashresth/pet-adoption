import "./globals.css";
import Navbar from "@/components/Navbar";

import Goal from "@/components/Goal";
import Adopt from "@/components/Adopt";
const dogs = [
  {
    id: 1,
    name: "Buddy",
    age: 2,
    gender: "Male",
    description: " loves fetch and gets along well with kids.",
    image: "/Images/dog1.jpg",
  },
  {
    id: 2,
    name: "Luna",
    age: 4,
    gender: "Female",
    description: " perfect for a quiet home.",
    image: "/Images/dog2.jpg",
  },
  {
    id: 3,
    name: "Max",
    age: 1,
    gender: "Male",
    description: "a curious nose and lots of puppy energy.",
    image: "/Images/dog1.jpg",
  },
  {
    id: 4,
    name: "Bella",
    age: 3,
    gender: "Female",
    description: " loyal, protective, and very intelligent.",
    image: "/Images/dog1.jpg",
  },
];

function App() {
  return (
    <>
      <Navbar />

      <div className="flex justify-center mt-20 ml-15 mr-15 ">
        <div className=" border-1 border-amber-200 rounded-2xl p-6  ">
          <div className="text-amber-800 text-5xl font-bold ">
            Because <div>Every Tail</div>
          </div>

          <div className=" text-amber-600 text-5xl font-bold ">
            Deserves <div>a Happy Ending</div>
          </div>
          <div className=" text-amber-800 text-lg mt-4 ">
            We simplify the adoption journey and take care of the paperwork on
            your behalf.
          </div>
          <div className="">
            <button className="bg-amber-800 text-amber-50 p-3 rounded-2xl font-bold mt-4 hover:bg-amber-200 hover:text-amber-800">
              Adopt Me
            </button>
          </div>
        </div>
        <div className="">
          <img src="/images/stray.jpg" className="rounded-2xl" alt="" />
        </div>
      </div>
      <Goal />
      <div className="flex gap-4 ">
        {dogs.map((dog) => (
          <Adopt dog={dog} key={dog.id}></Adopt>
        ))}
      </div>
    </>
  );
}

export default App;
