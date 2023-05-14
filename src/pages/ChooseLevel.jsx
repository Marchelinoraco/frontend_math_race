import React, { useState } from "react";
import Logokecil from "../assets/img/Logokecil.png";
import Back from "../assets/img/Back.png";
import Home from "../assets/img/Home.png";
import { Link } from "react-router-dom";
import bantuan from "../assets/img/bantuan.png";
import Playingpages from "./user/Playingpages";
import currentPage from "./user/Playingpages";

const ChooseLevel = () => {
  return (
    <div class="flex bg-[#D4D7DC] justify-center w-[1440px] h-[1024px]">
      <div class="justify-center bg-[#021432] w-[1333px] h-[892px] mt-10 rounded-[40px]">
        <div class="flex bg-[#1D3D73] h-[84px] w-[1333px] items-center justify-between rounded-t-[40px] pl-20 pr-10">
          <img class="w-[72px] h-[72px] ml-[100px]" src={Logokecil} alt="" />
        </div>
        <div class="flex justify-between">
          <Link to={"/home"}>
            <img src={Back} alt="" />
          </Link>
          <Link to={"/home"}>
            <img src={Home} alt="" />
          </Link>
        </div>
        <div class="flex justify-center mt-[12px]">
          <div class="flex justify-center bg-[#D9D9D9] w-[625px] h-[658px] rounded-[100px]">
            <div>
              <div class="flex justify-center">
                <h1 class="text-[64px] mt-[61px]">Pilih Level</h1>
              </div>
              <div class="flex flex-col space-y-[22px] mt-[51px]">
                <buttons className="text-[32px] text-center w-[466px] h-[77px] bg-[#EAC301] rounded-[10px]">
                  <h1 className="mt-4">MUDAH</h1>
                </buttons>
                <Link
                  to={"/chooseplayer"}
                  class="text-[32px] w-[466px] text-center h-[77px] bg-[#00509D] rounded-[10px] text-white"
                >
                  <h1 className="mt-4">SEDANG</h1>
                </Link>
                <Link
                  to={"/chooseplayer"}
                  class="text-[32px] w-[466px] text-center h-[77px] bg-[#021432] rounded-[10px] text-white"
                >
                  <h1 className="mt-4">SULIT</h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <button>
            <img class="w-[30px] h-[32px] ml-[52px]" src={bantuan} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseLevel;
