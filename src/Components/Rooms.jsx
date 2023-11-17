import { useEffect, useState } from "react";
import Room from "./Room";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("https://luxury-hotels-server-53q5xbzax-tahseen-hossains-projects.vercel.app/rooms")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []); 

  return (
    <div className="mb-12 mx-2 md:mx-8 lg:mx-24">
      <h3 className="text-7xl font-bold text-[#E0B973] text-center mb-12">
        Free Rooms
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {rooms.map((room) => (
          <Room key={room._id} room={room}></Room>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
