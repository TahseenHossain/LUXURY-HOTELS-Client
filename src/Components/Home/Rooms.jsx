import { useEffect, useState } from "react";
import Room from "./Room";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/rooms")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []); 

  return (
    <div className="mb-12">
      <h3 className="text-5xl font-bold text-[#E0B973] text-center mb-12">
        Our Rooms
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {rooms.map((room) => (
          <Room key={room.title} room={room}></Room>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
