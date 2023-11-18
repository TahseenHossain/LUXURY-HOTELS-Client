import { useEffect, useState } from "react";
import axios from "axios";
import About from "./About";

const AboutUs = () => {
  const [aboutUs, setAboutUs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://luxury-hotels-server.vercel.app/aboutUs");
      setAboutUs(response.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {aboutUs.map((about) => (
        <About key={about._id} about={about}></About>
      ))}
    </div>
  );
};

export default AboutUs;
