

const Career = ({career}) => {
    const { title, vacancies, salary, type, experience, qualification, description } = career;
    return (
        <div className="card-body" data-aos="fade-up" data-aos-duration="10000">
          <h2 className="card-title text-5xl text-[#E0B973]">{title}</h2>
          <h3 className="text-3xl font-bold">Salary:{salary}</h3>
          <h3 className="text-3xl font-bold">Vacancies:{vacancies}</h3>
          <h3 className="text-3xl font-bold">Type:{type}</h3>
          <h3 className="text-3xl font-bold">Experience:{experience}</h3>
          <h3 className="text-3xl font-bold">Qualification:{qualification}</h3>
          <h3 className="text-2xl font-bold">Description{description}</h3>
        </div>
    );
};

export default Career;