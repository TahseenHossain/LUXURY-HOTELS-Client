import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main/Main";
import Home from "../Components/Home/Home";
import SignUp from "../Components/SignUp";
import LogIn from "../Components/LogIn";
import Rooms from "../Components/Rooms";
import Detail from "../Components/Detail";
import BookNow from "../Components/BookNow";
import PrivateRoute from "../Components/PrivateRoute";
import Careers from "../Components/Careers";
import AboutUs from "../Components/AboutUs";
import Error from "../Components/Error";
import Review from "../Components/Review";
import MyBookings from "../Components/MyBookings";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
            path: "SignUp",
            element: <SignUp></SignUp>,
        },
        {
            path: "LogIn",
            element: <LogIn></LogIn>,
        },
        {
          path: "Rooms",
          element: (
            <PrivateRoute>
              <Rooms></Rooms>
            </PrivateRoute>
          ),
        },
        {
          path: "/detail/:title",
          element:  (
            <PrivateRoute>
              <Detail></Detail>
            </PrivateRoute>
          ),
          loader: () => fetch("https://luxury-hotels-server-53q5xbzax-tahseen-hossains-projects.vercel.app/rooms"),
        },
        {
          path: "/Review/:title",
          element:  (
            <PrivateRoute>
              <Review></Review>
            </PrivateRoute>
          ),
          loader: () => fetch("https://luxury-hotels-server-53q5xbzax-tahseen-hossains-projects.vercel.app/rooms"),
        },
        {
          path: "/BookNow/:title",
          element: (
            <PrivateRoute>
              <BookNow></BookNow>
            </PrivateRoute>           
          ),
          loader: () => fetch("https://luxury-hotels-server-53q5xbzax-tahseen-hossains-projects.vercel.app/rooms"),
        },
        {
          path: "/Career",
          element: <Careers></Careers>,
        },
        {
          path: "/About",
          element: <AboutUs></AboutUs>,
        },
        {
          path: "/MyBookings",
          element:  (
            <PrivateRoute>
              <MyBookings></MyBookings>
            </PrivateRoute>
          ),
          loader: () => fetch("https://luxury-hotels-server-53q5xbzax-tahseen-hossains-projects.vercel.app/booking"),
        },
    ]}
  ]);


  export default router;