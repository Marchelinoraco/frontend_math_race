import React from "react";

const ChooseBidak = () => {
  return (
    <div class="flex bg-white justify-center w-[1440px] h-[1024px]">
      <div class="bg-[#021432] w-[1333px] h-[892px] mt-10 rounded-[40px]">
        {/* <!-- navbar --> */}
        <div class="flex bg-[#1D3D73] h-[84px] w-full items-center justify-between rounded-t-[40px] pl-20 pr-10">
          <img
            class="w-[72px] h-[72px] ml-[122px]"
            src="./img/Logo kecil.png"
            alt=""
          />
        </div>
        {/* <!-- navbar end --> */}
        <div class="flex justify-between">
          <button>
            <img class="w-[54px] h-[50px]" src="./img/Back.png" alt="" />
          </button>
          <button>
            <img class="w-[54px] h-[50px]" src="./img/Home.png" alt="" />
          </button>
        </div>

        <div class="w-[1019px] h-[87px] bg-[#D9D9D9] text-center ml-[151px] mt-[29px] rounded-[109px]">
          <h1 class="text-[64px] font-normal">Pilih Bidak</h1>
        </div>

        {/* <!-- bidak --> */}
        <div class="flex mt-[51px]">
          <div class="justify-center ml-[151px]">
            <div class="flex w-[443px] pl-[154px] rounded-[10px] space-x-[90px] py-[19px] items-center h-[77px] bg-[#00509D]">
              <h1 class="text-[32px] text-white">Pemain 1</h1>
              <button>
                <img src="./img/dropdown.png" alt="" />
              </button>
            </div>
            <div class="flex space-x-[58px] mt-[50px] ml-[80px]">
              <button>
                <img src="./img/Polygonleft 2.png" alt="" />
              </button>
              <img class="mt-[-70px]" src="./img/Bidak ×.png" alt="" />
              <button>
                <img src="./img/Polygonrigth 3.png" alt="" />
              </button>
            </div>
          </div>
          <div class="justify-center ml-[151px]">
            <div class="flex w-[443px] pl-[154px] rounded-[10px] space-x-[90px] py-[19px] items-center h-[77px] bg-[#00509D]">
              <h1 class="text-[32px] text-white">Pemain 2</h1>
              <button>
                <img src="./img/dropdown.png" alt="" />
              </button>
            </div>
            <div class="flex space-x-[58px] mt-[50px] ml-[80px]">
              <button>
                <img src="./img/Polygonleft 2.png" alt="" />
              </button>
              <img class="mt-[-70px]" src="./img/Bidak ÷.png" alt="" />
              <button>
                <img src="./img/Polygonrigth 3.png" alt="" />
              </button>
            </div>
          </div>
        </div>
        <div class="flex mt-[50px]">
          <div class="justify-center ml-[151px]">
            <div class="flex w-[443px] pl-[154px] rounded-[10px] space-x-[90px] py-[19px] items-center h-[77px] bg-[#00509D]">
              <h1 class="text-[32px] text-white">Pemain 3</h1>
              <button>
                <img src="./img/dropdown.png" alt="" />
              </button>
            </div>
            <div class="flex space-x-[58px] mt-[50px] ml-[80px]">
              <button>
                <img src="./img/Polygonleft 2.png" alt="" />
              </button>
              <img class="mt-[-70px]" src="./img/Bidak -.png" alt="" />
              <button>
                <img src="./img/Polygonrigth 3.png" alt="" />
              </button>
            </div>
          </div>
          <div class="justify-center ml-[151px]">
            <div class="flex w-[443px] pl-[154px] rounded-[10px] space-x-[90px] py-[19px] items-center h-[77px] bg-[#00509D]">
              <h1 class="text-[32px] text-white">Pemain 4</h1>
              <button>
                <img src="./img/dropdown.png" alt="" />
              </button>
            </div>
            <div class="flex space-x-[58px] mt-[50px] ml-[80px]">
              <button>
                <img src="./img/Polygonleft 2.png" alt="" />
              </button>
              <img class="mt-[-70px]" src="./img/Bidak ÷.png" alt="" />
              <button>
                <img src="./img/Polygonrigth 3.png" alt="" />
              </button>
            </div>
          </div>
        </div>
        {/* <!-- bidak end --> */}
      </div>
    </div>
  );
};

export default ChooseBidak;
