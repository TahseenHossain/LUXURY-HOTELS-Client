import Banner from "./Banner";
import Buffet from "./Buffet";
import Gym from "./Gym";
import Rooms from "./Rooms";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="mx-2 md:mx-8 lg:mx-24">
                <h3 className="text-5xl md:text-7xl lg:text-7xl text-center text-[#E0B973] font-bold my-12">Our Special Winter Offers</h3>
                <Gym></Gym>
                <Buffet></Buffet>
                <Rooms></Rooms>
            </div>
        </div>
    );
};

export default Home;