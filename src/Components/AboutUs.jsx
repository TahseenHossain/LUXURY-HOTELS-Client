import { useEffect, useState } from "react";
import About from "./About";

const AboutUs = () => {
  const [aboutUs, setAboutUs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/aboutUs")
      .then((res) => res.json())
      .then((data) => setAboutUs(data));
  });

  return (
    <div>
      {aboutUs.map((about) => (
        <About key={about._id} about={about}></About>
      ))}
    </div>
  );
};

export default AboutUs;
