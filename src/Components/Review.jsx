import { Link, useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Review = () => {
  const navigate = useNavigate();
  const { title } = useParams();
  const { user } = useContext(AuthContext);
  const email = user.email;


  const handleReview = async (e) => {
    e.preventDefault();
    const reviews = e.target.elements.review.value;
    const rating = parseInt(document.querySelector('input[name="rating-1"]:checked').value);

    const updateReviews = {
      email: email,
      reviews: reviews,
      rating: rating,
    };

    try {
      const response = await fetch(
        `http://localhost:5000/rooms/${title}/reviews`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateReviews),
        }
      );
      

      const data = await response.json();
      console.log(data);

      Swal.fire({
        title: "Success!",
        text: "Review added successfully",
        icon: "success",
        confirmButtonText: "Cool",
      });

      navigate(`/`);
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
    <div>
      <h3 className="text-5xl text-center text-[#E0B973] py-10">Write A Review</h3>
      <div className="mx-2 md:mx-8 lg:mx-24 flex justify-center py-32">
        <form onSubmit={handleReview}>
          <input
            type="text"
            name="review"
            placeholder="Type here"
            className="input input-bordered input-lg w-full max-w-5xl"
            style={{ height: "250px" }}
          />
          <div className="rating">
            <input
              type="radio"
              name="rating-1"
              value="1"
              className="mask mask-star bg-[#E0B973]"
              checked
            />
            <input
              type="radio"
              name="rating-1"
              value="2"
              className="mask mask-star bg-[#E0B973]"
            />
            <input
              type="radio"
              name="rating-1"
              value="3"
              className="mask mask-star bg-[#E0B973]"
            />
            <input
              type="radio"
              name="rating-1"
              value="4"
              className="mask mask-star bg-[#E0B973]"
            />
            <input
              type="radio"
              name="rating-1"
              value="5"
              className="mask mask-star bg-[#E0B973]"
            />
          </div>
          <div className="card-actions">
            <Link to={`/`}>
              <button className="btn text-3xl bg-[#E0B973] hover:bg-[#c0c0c0] text-white">
                Go Home
              </button>
            </Link>
            <button
              type="submit"
              className="btn text-3xl w-96 bg-[#E0B973] text-white hover:bg-[#c0c0c0]"
            >
              Post Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Review;
