import { Link } from "react-router-dom";

const Room = ({ room }) => {
  const { title, img, short_description, price, reviews} = room;
  const numberOfReviews = reviews.length;
  return (
    <div className="card w-80 bg-base-100 shadow-lg mb-4">
      <Link to={`/Detail/${title}`}>
        <figure>
          <img src={img} alt="Shoes" className="rounded-xl w-80 h-56" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-bold">{title}</h2>
          <p className="text-xl font-bold">Price:${price}</p>
          <p className="text-xl">{short_description}</p>
          <p className="text-xl">Total Review:{numberOfReviews}</p>
        </div>
      </Link>
    </div>
  );
};

export default Room;
