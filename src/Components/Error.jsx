import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen text-[#E0B973] mb-16 text-7xl'>
            <h1 className='text-center'>Oops 404!</h1>
            <Link to='/' className="bg-[#E0B973] rounded-3xl text-white">Go Back To Home</Link>
        </div>
    );
};

export default Error;