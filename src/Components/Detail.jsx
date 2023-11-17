import { Link, useLoaderData, useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";

const Detail = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const email = user.email;
  const details = useLoaderData();
  const { title } = useParams();
  const detail = details.find((detail) => detail.title === title);

  const handleBookNow = async (e) => {
    e.preventDefault();
    const date = e.target.elements.date.value;

    try {
      const response = await fetch(`https://luxury-hotels-server-53q5xbzax-tahseen-hossains-projects.vercel.app/booking`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Title: title, Email: email, Date: date }),
      });

      const data = await response.json();

      if (data.error) {
        Swal.fire({
          title: "Sorry!",
          text: "That room is booked",
          icon: "error",
          confirmButtonText: "OK",
        });
      } else {
        Swal.fire({
          title: "Success!",
          text: "Added to the Cart Successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
        navigate(`/Review/${title}`);
      }
    } catch (error) {
      console.error(error);

      Swal.fire({
        title: "Failed!",
        text: error.message,
        icon: "error",
        confirmButtonText: "Cool",
      });
    }
  };

  return (
    <div className="mx-2 md:mx-8 lg:mx-24">
      <form onSubmit={handleBookNow}>
        <div className="hero bg-base-100 rounded-lg">
          <figure>
            <img src={detail.img} alt={detail.title} className="h-96" />
          </figure>
        </div>
        <div className="card-body" data-aos="fade-up" data-aos-duration="10000">
          <h2 className="card-title text-7xl text-[#E0B973]">{detail.title}</h2>
          <h3 className="text-5xl font-bold">Price:${detail.price}</h3>
          <h3 className="text-5xl font-bold">
            Original Price:${detail.original_price}
          </h3>
          <h3 className="text-5xl font-bold">
            Discount Percentage:{detail.discount_percentage}%
          </h3>
          <h3 className="text-5xl font-bold">Room Size:{detail.room_size}</h3>
          <h3 className="text-5xl font-bold">
            Free Rooms:{detail.number_of_rooms}
          </h3>
          <h3 className="text-7xl">{detail.short_description}</h3>
          <h3 className="text-4xl">{detail.long_description}</h3>
          <h3 className="text-2xl font-bold">Select Date</h3>
          <div className="form-control">
            <input
              type="date"
              name="date"
              placeholder="Date"
              className="input input-bordered bg-white w-48"
              required
            />
          </div>
          <div className="card-actions justify-start">
            <Link to={`/`}>
              <button className="btn text-3xl bg-[#E0B973] hover:bg-[#c0c0c0] text-white">
                Go Home
              </button>
            </Link>
            <button
              type="submit"
              className="btn w-96 bg-[#E0B973] text-white hover:bg-[#c0c0c0]"
            >
              Book Now
            </button>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-4">Reviews</h2>
          {detail.reviews.map((review, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-bold">{review.email}</h3>
              <p className="text-lg">Rating: {review.rating}</p>
              <p className="text-lg">{review.review}</p>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default Detail;
