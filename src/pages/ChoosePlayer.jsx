import React from "react";
import Logo from "../assets/img/Logokecil.png";
import Bantuan from "../assets/img/bantuan.png";
import Back from "../assets/img/Back.png";
import Home from "../assets/img/Home.png";
import { Link } from "react-router-dom";

const ChoosePlayer = () => {
  return (
    <div class="flex bg-[#D4D7DC] justify-center w-[1440px] h-[1024px]">
      <div class="justify-center bg-[#021432] w-[1333px] h-[892px] mt-10 rounded-[40px]">
        <div class="flex bg-[#1D3D73] h-[84px] w-[1333px] items-center justify-between rounded-t-[40px] pl-20 pr-10">
          <img class="w-[72px] h-[72px] ml-[100px]" src={Logo} alt="" />
        </div>
        <div class="flex justify-between">
          <Link to={"/chooselevel"}>
            <img src={Back} alt="" />
          </Link>
          <Link to={"/home"}>
            <img src={Home} alt="" />
          </Link>
        </div>
        <div class="flex justify-center mt-[12px]">
          <div class="flex justify-center bg-[#D9D9D9] w-[625px] h-[677px] rounded-[100px]">
            <div>
              <div class="flex justify-center">
                <h1 class="text-[64px] mt-[39px]">Pilih Jumlah</h1>
              </div>
              <div class="flex justify-center">
                <h1 class="text-[64px] -mt-5">Pemain</h1>
              </div>
              <div class="flex flex-col space-y-[22px] mt-[25px]">
                <button class="text-[32px] w-[466px] h-[77px] bg-[#00296B] rounded-[10px] text-white">
                  1 PEMAIN
                </button>
                <button class="text-[32px] w-[466px] h-[77px] bg-[#003F88] rounded-[10px] text-white">
                  2 PEMAIN
                </button>
                <button class="text-[32px] w-[466px] h-[77px] bg-[#FFD500] rounded-[10px]">
                  3 PEMAIN
                </button>
                <button class="text-[32px] w-[466px] h-[77px] bg-[#FDC500] rounded-[10px]">
                  4 PEMAIN
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <button>
            <img class="w-[30px] h-[32px] ml-[52px]" src={Bantuan} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChoosePlayer;
