//import { useEffect} from "react";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const Banner = () => {
  //   useEffect(() => {
  //       AOS.init();
  //   }, []);

  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full relative">
          <img
            src="https://i.ibb.co/h8vQTv6/Banner-1.jpg"
            className="w-full h-fill lg:h-1/2"
          />
          <div className="text-overlay absolute top-12 md:top-24 lg:top-24 left-6 md:left-12 lg:left-12 w-full h-full flex flex-col justify-start text-[#E0B973]">
            <p className="text-4xl">WELCOME TO</p>
            <p className="text-4xl md:text-9xl lg:text-9xl font-bold">LUXURY</p>
            <p className="text-4xl md:text-6xl lg:text-6xl font-bold">HOTELS</p>
            <p className="text-2xl font-bold">Book your stay and enjoy Luxury redefined at the most </p>
            <p className="text-2xl font-bold">affordable rates.</p>
          </div>
        </div>
        <div id="item2" className="carousel-item w-full relative">
          <img
            src="https://i.ibb.co/NL5g519/Banner-2.jpg"
            className="w-full h-fill lg:h-1/2"
          />
          <div className="text-overlay absolute top-12 md:top-24 lg:top-24 left-6 md:left-12 lg:left-12 w-full h-full flex flex-col justify-start text-[#E0B973]">
            <p className="text-4xl">WELCOME TO</p>
            <p className="text-4xl md:text-9xl lg:text-9xl font-bold">LUXURY</p>
            <p className="text-4xl md:text-6xl lg:text-6xl font-bold">HOTELS</p>
            <p className="text-2xl font-bold">Book your stay and enjoy Luxury redefined at the most </p>
            <p className="text-2xl font-bold">affordable rates.</p>
          </div>
        </div>
        <div id="item3" className="carousel-item w-full  relative">
          <img
            src="https://i.ibb.co/cQyfk88/Banner-3.jpg"
            className="w-full h-fill lg:h-1/2"
          />
          <div className="text-overlay absolute top-12 md:top-24 lg:top-24 left-6 md:left-12 lg:left-12 w-full h-full flex flex-col justify-start text-[#E0B973]">
            <p className="text-4xl">WELCOME TO</p>
            <p className="text-4xl md:text-9xl lg:text-9xl font-bold">LUXURY</p>
            <p className="text-4xl md:text-6xl lg:text-6xl font-bold">HOTELS</p>
            <p className="text-2xl font-bold">Book your stay and enjoy Luxury redefined at the most </p>
            <p className="text-2xl font-bold">affordable rates.</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2 lg:mt-[-500px]">
        <a href="#item1" className="btn btn-xs bg-[#E0B973] text-white">
          1
        </a>
        <a href="#item2" className="btn btn-xs bg-[#E0B973] text-white">
          2
        </a>
        <a href="#item3" className="btn btn-xs bg-[#E0B973] text-white">
          3
        </a>
      </div>
    </div>
  );
};

export default Banner;
