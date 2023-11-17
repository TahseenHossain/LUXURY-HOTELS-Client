import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext, useState } from "react";
import Swal from "sweetalert2";

const LogIn = () => {
  const [logInError, setLogInError] = useState("");

  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  // const handleLogIn = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const email = form.email.value;
  //   const password = form.password.value;


  //   signInUser(email, password)
  //     .then((result) => {
  //       const loggedUser = result.user;
  //       console.log(loggedUser);
  //       const user = { email };
  //       axios.post('https://luxury-hotels-server-53q5xbzax-tahseen-hossains-projects.vercel.app/jwt', user, {withCredentials:
  //       true})
  //       .then(res =>{
  //         console.log(res.data)
  //       })

  //       Swal.fire({
  //         title: "Success!",
  //         text: "Log In Successful",
  //         icon: "success",
  //         confirmButtonText: "Cool",
  //       });
  //       navigate("/");
  //     })

  //     .catch((error) => {
  //       e.target.reset();
  //       console.error(error);
  //       setLogInError(error.message);
  //       Swal.fire({
  //         title: "Failed!",
  //         text: error.message,
  //         icon: "error",
  //         confirmButtonText: "Cool",
  //       });
  //     });
  // };

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
  
    signInUser(email, password)
      .then((result) => {
        Swal.fire({
          title: "Success!",
          text: "Log In Successful",
          icon: "success",
          confirmButtonText: "Cool",
        });
        navigate("/");
      })
      .catch((error) => {
        e.target.reset();
        console.error(error);
        setLogInError(error.message);
        Swal.fire({
          title: "Failed!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Cool",
        });
      });
  };
  
  const handleGoogleSignIn = async () => {
    try{
      await signInWithGoogle();
      Swal.fire({
        title: "Success!",
        text: "Log In Successful",
        icon: "success",
        confirmButtonText: "Cool",
      });
      navigate("/");
    }

    catch (error) {
      console.error(error);
      setLogInError(error.message);
      Swal.fire({
        title: "Failed!",
        text: error.message,
        icon: "error",
        confirmButtonText: "Cool",
      });
    }
  };
    
    return (
        <div className="text-center bg-cover bg-center" style={{ backgroundImage: 'url("https://i.postimg.cc/c4Yh8D7P/14c6ffc0c6947847b92cafa153bc782f.jpg")' }}>
          <h1 className="text-5xl font-bold py-10">Log In now!</h1>
          <form
            className="text-center items-center max-w-xl mx-auto"
            onSubmit={handleLogIn}
          >
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
                Log In
              </button>
            </div>
          </form>
    
          <div className="flex flex-col text-center py-8">
            <p className="text-2xl mb-4">or</p>
            <Link to="/SignIn">
              <button
                onClick={handleGoogleSignIn}
                className="btn bg-[#E0B973] hover:bg-bg-[#c0c0c0] text-white w-1/4"
              >
                Google
              </button>
            </Link>
            <p className="text-2xl mb-4">If You Are New Here</p>
            <Link to="/SignUp">
              <button className="btn bg-[#E0B973] hover:bg-[#c0c0c0] text-white w-1/4">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      );
};

export default LogIn;