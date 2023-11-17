import { useEffect, useState } from "react";
import Career from "./Career";

const Careers = () => {
    const [careers, setCareers] = useState([]);

    useEffect(() => {
        fetch("https://luxury-hotels-server-53q5xbzax-tahseen-hossains-projects.vercel.app/career")
          .then((res) => res.json())
          .then((data) => setCareers(data));
      });

    return (
        <div className="mb-12 mx-2 md:mx-8 lg:mx-24">
        <h3 className="text-7xl font-bold text-[#E0B973] text-center mb-12">
            Job Vacancy
        </h3>
        <div>
          {careers.map((career) => (
            <Career key={career._id} career={career}></Career>
          ))}
        </div>
      </div>
    );
};

export default Careers;