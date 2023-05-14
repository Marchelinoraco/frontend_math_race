import React from "react";

const PlayBoardEasy = () => {
  return (
    <div class="flex bg-white justify-center w-[1440px] h-[1024px]">
      <div class="bg-[#021432] w-[1333px] h-[892px] mt-10 rounded-[40px]">
        {/* <!-- navbar --> */}
        <div class="flex bg-[#1D3D73] h-[84px] w-full items-center justify-between rounded-t-[40px] pl-20 pr-10">
          <button>
            <img class="w-[30px] h-[32px]" src="./img/bantuan.png" alt="" />
          </button>

          <img
            class="w-[72px] h-[72px] mr-[800px]"
            src="./img/Logo kecil.png"
            alt=""
          />
          <button>
            <img
              class="w-[52px] h-[52px] mr-[15.5px]"
              src="./img/navhome.png"
              alt=""
            />
          </button>
        </div>
        {/* <!-- navbar end --> */}

        {/* <!-- content --> */}
        <div class="flex space-x-3 ml-[14px] mt-[10px]">
          <img class="w-[21px] h-[34px]" src="./img/Polygon 1.png" alt="" />
          <p class="text-white text-[25px]">(Pemain Sekarang)</p>
        </div>

        <div class="flex space-x-[100px] mt-[16px] ml-[61px]">
          <h1 class="text-[30px] text-white font-normal">Soal</h1>
          <div class="flex items-center space-x-3">
            <img class="w-[24px] h-[24px]" src="./img/timer1.png" alt="" />
            <p class="text-[16px] font-normal text-white">tersisa 5 detik</p>
          </div>
        </div>

        {/* <!-- Border soal --> */}
        <div class="bg-[#00509D] w-[365px] h-[262px] rounded-3xl ml-[14px] ">
          <p class="text-[50px] text-center text-white">ISI SOAL</p>
        </div>
        {/* <!-- border soal end --> */}

        {/* <!-- border jawaban --> */}
        <div class="flex w-[295px] h-[53px] space-x-[113px] items-center  text-center text-[40px] text-white bg-[#00509D] ml-[49px] mt-[30px]">
          <input class="w-[24px] h-[24px] ml-3" type="radio" name="" id="" />
          <div class="flex justify-center">
            <p>1</p>
          </div>
        </div>
        <div class="flex w-[295px] h-[53px] space-x-[113px] items-center text-center text-[40px] text-white bg-[#EAC301] ml-[49px] mt-[13px]">
          <input class="w-[24px] h-[24px] ml-3" type="radio" name="" id="" />
          <div>
            <p>3</p>
          </div>
        </div>
        <div class="flex w-[295px] h-[53px] space-x-[113px] items-center text-center text-[40px] text-white bg-[#EAC301] ml-[49px] mt-[13px]">
          <input class="w-[24px] h-[24px] ml-3" type="radio" name="" id="" />
          <div>
            <p>2</p>
          </div>
        </div>

        {/* <!-- Dadu --> */}
        <div class="w-[182px] h-[112px] bg-[#00509D] rounded-[50px] mt-[45px] ml-[100px]"></div>

        {/* <!-- papanbermain --> */}
        <table class="ml-[391px] mt-[-741px] w-[943px] bg-black h-[808px] border text-center text-[20px] rounded-br-xl font-normal">
          <tr>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">100</td>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">99</td>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">98</td>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">97</td>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">96</td>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">95</td>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">94</td>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">93</td>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">92</td>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">91</td>
          </tr>
          <tr>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">81</td>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">82</td>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">83</td>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">84</td>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">85</td>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">86</td>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">87</td>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">88</td>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">89</td>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">90</td>
          </tr>
          <tr>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">80</td>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">79</td>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">78</td>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">77</td>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">76</td>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">75</td>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">74</td>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">73</td>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">72</td>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">71</td>
          </tr>
          <tr>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">61</td>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">62</td>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">63</td>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">64</td>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">65</td>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">66</td>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">67</td>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">68</td>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">69</td>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">70</td>
          </tr>
          <tr>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">60</td>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">59</td>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">58</td>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">57</td>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">56</td>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">55</td>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">54</td>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">53</td>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">52</td>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">51</td>
          </tr>
          <tr>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">41</td>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">42</td>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">43</td>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">44</td>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">46</td>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">45</td>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">44</td>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">43</td>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">42</td>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">50</td>
          </tr>
          <tr>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">40</td>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">39</td>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">38</td>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">37</td>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">36</td>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">35</td>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">34</td>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">33</td>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">32</td>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">31</td>
          </tr>
          <tr>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">21</td>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">22</td>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">23</td>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">24</td>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">25</td>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">26</td>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">27</td>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">28</td>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">29</td>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">30</td>
          </tr>
          <tr>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">20</td>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">19</td>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">18</td>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">17</td>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">16</td>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">15</td>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">14</td>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">13</td>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">12</td>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">11</td>
          </tr>
          <tr>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">1</td>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">2</td>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">3</td>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">4</td>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">5</td>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">6</td>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">7</td>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">8</td>
            <td class="w-[80px] h-[80px] text-black bg-[#EAC301]">9</td>
            <td class="w-[80px] h-[80px] text-white bg-[#021432]">10</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default PlayBoardEasy;
