const Buffet = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 items-center my-12">
      <div>
        <img src="https://i.postimg.cc/PqxHVkNL/Bofey.jpg" alt="" />
      </div>
      <div>
        <h3 className="text-5xl md:text-6xl lg:text-6xl text-center lg:text-start font-bold text-[#E0B973]">
          Free Buffet Lunch
        </h3>
        <p className="text-2xl text-[#E0B973] text-center lg:text-start">
          Indulge in an unforgettable hotel experience where every room booking
          for the day comes with a delightful surprise – a complimentary buffet
          lunch. Our hotel takes hospitality to the next level, ensuring that
          your stay is not just comfortable but also a culinary delight.
        </p>
      </div>
    </div>
  );
};

export default Buffet;
