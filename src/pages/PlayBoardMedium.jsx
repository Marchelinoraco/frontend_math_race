import React from "react";

const PlayBoardMedium = () => {
  return (
    <div class="flex bg-white justify-center w-[1440px] h-[1024px]">
      <div class="bg-[#2859A6] w-[1333px] h-[892px] mt-10 rounded-[40px]">
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
        <div class="bg-[#99AFE4] w-[365px] h-[262px] rounded-3xl ml-[14px] ">
          <p class="text-[50px] text-center text-white">ISI SOAL</p>
        </div>
        {/* <!-- border soal end --> */}

        {/* <!-- border jawaban --> */}
        <div class="flex w-[295px] h-[53px] space-x-[113px] items-center  text-center text-[40px] text-white bg-[#248EF4] ml-[49px] mt-[30px]">
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
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">100</td>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">99</td>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">98</td>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">97</td>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">96</td>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">95</td>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">94</td>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">93</td>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">92</td>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">91</td>
          </tr>
          <tr>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">81</td>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">82</td>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">83</td>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">84</td>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">85</td>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">86</td>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">87</td>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">88</td>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">89</td>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">90</td>
          </tr>
          <tr>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">80</td>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">79</td>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">78</td>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">77</td>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">76</td>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">75</td>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">74</td>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">73</td>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">72</td>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">71</td>
          </tr>
          <tr>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">61</td>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">62</td>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">63</td>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">64</td>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">65</td>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">66</td>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">67</td>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">68</td>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">69</td>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">70</td>
          </tr>
          <tr>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">60</td>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">59</td>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">58</td>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">57</td>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">56</td>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">55</td>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">54</td>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">53</td>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">52</td>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">51</td>
          </tr>
          <tr>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">41</td>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">42</td>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">43</td>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">44</td>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">45</td>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">46</td>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">47</td>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">48</td>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">49</td>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">50</td>
          </tr>
          <tr>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">40</td>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">39</td>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">38</td>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">37</td>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">36</td>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">35</td>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">34</td>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">33</td>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">32</td>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">31</td>
          </tr>
          <tr>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">21</td>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">22</td>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">23</td>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">24</td>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">25</td>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">26</td>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">27</td>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">28</td>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">29</td>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">30</td>
          </tr>
          <tr>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">20</td>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">19</td>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">18</td>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">17</td>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">16</td>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">15</td>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">14</td>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">13</td>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">12</td>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">11</td>
          </tr>
          <tr>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">1</td>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">2</td>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">3</td>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">4</td>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">5</td>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">6</td>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">7</td>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">8</td>
            <td class="w-[80px] h-[80px] text-black bg-[#C9CCDE]">9</td>
            <td class="w-[80px] h-[80px] text-white bg-[#2859A6]">10</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default PlayBoardMedium;
