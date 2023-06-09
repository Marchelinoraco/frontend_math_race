import React from "react";
import { Link } from "react-router-dom";
import Robi from "../assets/img/Robi.png";
import RobiWave from "../assets/img/RobiWave.png";

const HomePage = () => {
  return (
    <div className="flex bg-white justify-center w-[1440px] h-[1024px]">
      <div className="grid-rows-2 bg-[#021432] w-[1333px] h-[892px] mt-10 rounded-2xl">
        {/* <!-- navbar --> */}
        <div className="flex bg-[#0B2551] h-16 w-full items-center justify-between rounded-xl pl-20 pr-10">
          <div className="text-white space-x-10 font-serif text-[20px]">
            <a href="">Tentang Kami</a>
            <a href="">Kontak Kami</a>
            <a href="">Help</a>
          </div>
          <div className="text-white font-serif text-[20px]">
            <Link
              to={"../login"}
              className="bg-[#D6AB0D] py-2 px-12 rounded-full"
            >
              Login
            </Link>
          </div>
        </div>
        {/* <!-- navbar end --> */}
        {/* <!-- content
       --> */}
        <div className="ml-[100px]">
          {/* <!-- robi 1 --> */}
          <div className="ml-[50px] mt-[150px]">
            <img className="w-[253.91px] h-[337px]" src={Robi} alt="" />
          </div>

          <div className="flex absolute bg-[#0B2551] w-[500px] h-[500px] mx-[300px] mt-[-350px] items-center rounded-full justify-center">
            <div className="items-center justify-center">
              <h1 className="text-white font-serif text-[90px] font-normal">
                Math
              </h1>
              <h1 className="text-white font-serif text-[90px] font-normal -mt-12">
                Race
              </h1>
              <Link
                to={"/playing"}
                className="bg-[#D6AB0D] mt-5 py-4 px-8 rounded-full text-[21px] text-white font-serif"
              >
                Ayo Bermain !
              </Link>
            </div>
          </div>

          {/* <!-- robi 2 --> */}
          <div className="ml-[800px] mt-[-250px]">
            <img className="w-[217.37px] h-[248.4px]" src={RobiWave} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
