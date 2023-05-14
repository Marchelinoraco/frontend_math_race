import React from "react";

const ChooseLevel = () => {
  return (
    <div class="flex bg-[#D4D7DC] justify-center w-[1440px] h-[1024px]">
      <div class="justify-center bg-[#021432] w-[1333px] h-[892px] mt-10 rounded-[40px]">
        <div class="flex bg-[#1D3D73] h-[84px] w-[1333px] items-center justify-between rounded-t-[40px] pl-20 pr-10">
          <img
            class="w-[72px] h-[72px] ml-[100px]"
            src="./assets/images/Logo.png"
            alt=""
          />
        </div>
        <div class="flex justify-between">
          <a href="Beranda.html">
            <img src="./assets/images/Back.png" alt="" />
          </a>
          <a href="Beranda.html">
            <img src="./assets/images/Home.png" alt="" />
          </a>
        </div>
        <div class="flex justify-center mt-[12px]">
          <div class="flex justify-center bg-[#D9D9D9] w-[625px] h-[658px] rounded-[100px]">
            <div>
              <div class="flex justify-center">
                <h1 class="text-[64px] mt-[61px]">Pilih Level</h1>
              </div>
              <div class="flex flex-col space-y-[22px] mt-[51px]">
                <button class="text-[32px] w-[466px] h-[77px] bg-[#EAC301] rounded-[10px]">
                  MUDAH
                </button>
                <button class="text-[32px] w-[466px] h-[77px] bg-[#00509D] rounded-[10px] text-white">
                  MENENGAH
                </button>
                <button class="text-[32px] w-[466px] h-[77px] bg-[#021432] rounded-[10px] text-white">
                  SULIT
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <button>
            <img
              class="w-[30px] h-[32px] ml-[52px]"
              src="/src/assets/images/Help.png"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseLevel;
