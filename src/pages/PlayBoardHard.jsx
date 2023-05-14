import React from "react";

const PlayBoardHard = () => {
  return (
    <div class="flex bg-white justify-center w-[1440px] h-[1024px]">
      <div class="bg-[#021432] w-[1333px] h-[892px] mt-10 rounded-[40px]">
        {/* <!-- navbar --> */}
        <div class="flex bg-[#B62203] h-[84px] w-full items-center justify-between rounded-t-[40px] pl-20 pr-10">
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
        <div class="bg-[#801100] w-[365px] h-[262px] rounded-3xl ml-[14px] ">
          <p class="text-[50px] text-center text-white">ISI SOAL</p>
        </div>
        {/* <!-- border soal end --> */}

        {/* <!-- border jawaban --> */}
        <div class="flex w-[295px] h-[53px] space-x-[113px] items-center  text-center text-[40px] text-white bg-[#D73502] ml-[49px] mt-[30px]">
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
        <div class="w-[182px] h-[112px] bg-[#801100]  rounded-[50px] mt-[45px] ml-[100px]"></div>

        {/* <!-- papanbermain --> */}
        <table class="ml-[391px] mt-[-741px] w-[943px] bg-black h-[808px] border text-center text-[20px] rounded-br-xl font-normal">
          <tr>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">100</td>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">99</td>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">98</td>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">97</td>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">96</td>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">95</td>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">94</td>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">93</td>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">92</td>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">91</td>
          </tr>
          <tr>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">81</td>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">82</td>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">83</td>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">84</td>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">85</td>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">86</td>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">87</td>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">88</td>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">89</td>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">90</td>
          </tr>
          <tr>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">80</td>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">79</td>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">78</td>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">77</td>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">76</td>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">75</td>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">74</td>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">73</td>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">72</td>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">71</td>
          </tr>
          <tr>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">61</td>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">62</td>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">63</td>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">64</td>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">65</td>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">66</td>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">67</td>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">68</td>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">69</td>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">70</td>
          </tr>
          <tr>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">60</td>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">59</td>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">58</td>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">57</td>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">56</td>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">55</td>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">54</td>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">53</td>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">52</td>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">51</td>
          </tr>
          <tr>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">41</td>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">42</td>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">43</td>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">44</td>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">45</td>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">46</td>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">47</td>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">48</td>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">49</td>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">50</td>
          </tr>
          <tr>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">40</td>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">39</td>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">38</td>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">37</td>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">36</td>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">35</td>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">34</td>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">33</td>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">32</td>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">31</td>
          </tr>
          <tr>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">21</td>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">22</td>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">23</td>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">24</td>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">25</td>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">26</td>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">27</td>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">28</td>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">29</td>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">30</td>
          </tr>
          <tr>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">20</td>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">19</td>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">18</td>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">17</td>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">16</td>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">15</td>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">14</td>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">13</td>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">12</td>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">11</td>
          </tr>
          <tr>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">1</td>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">2</td>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">3</td>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">4</td>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">5</td>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">6</td>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">7</td>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">8</td>
            <td class="w-[80px] h-[80px] text-black bg-[#FAC000]">9</td>
            <td class="w-[80px] h-[80px] text-white bg-[#B62203]">10</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default PlayBoardHard;
