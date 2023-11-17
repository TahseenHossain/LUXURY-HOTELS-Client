import { NavLink } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const NavBar = () => {
  const { logOut } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.ibb.co/yhFLYDb/user.png");
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const userResponse = await fetch(
  //         `https://brand-store-server-lovat.vercel.app/user/${user.email}`
  //       );
  //       const userData = await userResponse.json();

  //       setName(userData.name);  
  //       setImage(userData.photoURL);
        
  //       setLoading(false);
  //     } catch (error) {
  //       //console.error(error);
  //       setLoading(false);
  //     }
  //   };

  //   if (user) {
  //     fetchUserData();
  //   }
  // }, [user]);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("Out"))
      .catch((error) => console.error(error));
  };

  
  const navLinks = (
    <>
      <ul className="flex text-xl font-semibold">
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Rooms"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline" : ""
            }
          >
            Rooms
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/MyBookings"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline" : ""
            }
          >
            My Bookings
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/About"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline" : ""
            }
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/FAQ"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline" : ""
            }
          >
            FAQ
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Career"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline" : ""
            }
          >
            Career
          </NavLink>
        </li>
      </ul>
    </>
  );

  return (
    <div className="navbar text-[#E0B973]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-80"
          >
            {navLinks}
          </ul>
        </div>
        <div>
            <h1 className="text-[#E0B973] font-bold text-4xl flex flex-col">LUXURY</h1>
            <h1 className="text-[#E0B973] font-bold text-4xl flex flex-col">HOTELS</h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <div className="ml-40 md:ml-12lg:ml-12 flex flex-col lg:flex-row">
          {user && <span className="relative">{name}</span>}
          <a
            onClick={handleLogOut}
            className="btn text-red-600 sm:w-20 md:w-32 ml-40 md:ml-0 lg:ml-0  "
          >
            Sign Out
          </a>
        </div>

        {/* <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            {user && (
              <div className="w-10 rounded-full">
                <div className="relative">
                  <img
                    src={image}
                    alt="User Profile"
                    className="w-10 h-10 rounded-full"
                  />
                </div>
              </div>
            )}
          </div>
        </label> */}
      </div>
    </div>
  );
};

export default NavBar;