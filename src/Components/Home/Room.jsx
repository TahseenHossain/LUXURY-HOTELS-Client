import { Link } from "react-router-dom";

const Room = ({ room }) => {
  const { title, img, short_description, price } = room;
  return (
    <div className="card w-80 bg-base-100 shadow-lg mb-4">
      <figure>
        <img src={img} alt="Shoes" className="rounded-xl w-80 h-56" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl font-bold">{title}</h2>
        <p className="text-xl font-bold">Price:${price}</p>
        <p className="text-xl">{short_description}</p>
        <div className="card-actions">
          <Link to={`/detail/${title}`}>
            <button className="btn bg-[#E0B973] hover:bg-[#c0c0c0] text-white">
              Detail
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Room;
