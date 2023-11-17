import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext, useState } from "react";
import Swal from "sweetalert2";


const SignUp = () => {
  const [signUpError, setSignUpError] = useState([]);

  const { createUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    console.log( name, email, password);

    // if (!password.match(/[A-Z]/) && !password.match(/[!@#$%^&*()_+]/)) {
    //   Swal.fire({
    //     title: "Failed!",
    //     text: "We need an Upper Case and Special Character",
    //     icon: "error",
    //     confirmButtonText: "Cool",
    //   });
    //   return;
    // }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        const user = { name, email, password };
        fetch("https://luxury-hotels-server-53q5xbzax-tahseen-hossains-projects.vercel.app/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: "Success!",
                text: "SignUp Successfully",
                icon: "success",
                confirmButtonText: "Cool",
              });
            }
          });
        e.target.reset();
        navigate(`/`);
      })
      .catch((error) => {
        e.target.reset();
        console.error(error);
        setSignUpError(error.message);
        Swal.fire({
          title: "Failed!",
          text: error.message,
          icon: "Failed",
          confirmButtonText: "Cool",
        });
      });
  };

  return (
    <div className="text-center  bg-cover bg-center" style={{ backgroundImage: 'url("https://i.postimg.cc/c4Yh8D7P/14c6ffc0c6947847b92cafa153bc782f.jpg")' }}>
      <h1 className="text-5xl font-bold py-10">Sign Up Now!</h1>
      <form
        className="text-center items-center max-w-xl mx-auto"
        onSubmit={handleSignUp}
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#E0B973] hover:bg-[#c0c0c0] text-white">
            Sign Up
          </button>
        </div>
      </form>

      <div className="flex flex-col text-center pb-8">
        <p className="text-2xl my-4">Already Have An Account</p>
        <Link to="/LogIn">
          <button className="btn bg-[#E0B973] hover:bg-[#c0c0c0] text-white w-1/4">
            Log In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;