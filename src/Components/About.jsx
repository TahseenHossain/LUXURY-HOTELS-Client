import React from 'react';

const About = ({about}) => {
    const { title, description } = about;
    return (
        <div className="card-body mb-12 mx-2 md:mx-8 lg:mx-24" data-aos="fade-up" data-aos-duration="10000">
          <h2 className="card-title text-7xl text-[#E0B973] ">{title}</h2>
          <h3 className="text-3xl font-bold">{description}</h3>
        </div>
    );
};

export default About;