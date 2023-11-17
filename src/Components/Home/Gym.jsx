const Gym = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 items-center my-12">
      <div>
        <h3 className="text-5xl md:text-6xl lg:text-6xl text-center lg:text-start font-bold text-[#E0B973]">Free Gym Pass</h3>
        <p className="text-2xl text-[#E0B973] text-center lg:text-start">
          Enjoy exclusive access to our luxurious hotel gym, a haven of wellness
          and vitality. Our state-of-the-art fitness center offers a premium
          experience, featuring top-of-the-line exercise equipment, a serene
          ambiance, and expert trainers to guide your fitness journey.
        </p>
      </div>
      <div>
        <img src="https://i.postimg.cc/PrYFHV0S/Gym.jpg" alt="" />
      </div>
    </div>
  );
};

export default Gym;
