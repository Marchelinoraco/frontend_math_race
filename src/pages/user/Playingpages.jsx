import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "../../assets/img/Logokecil.png";
import Bantuan from "../../assets/img/bantuan.png";
import Back from "../../assets/img/Back.png";
import { Link } from "react-router-dom";
import Bidakkali from "../../assets/img/Bidak ×.png";
import Bidakbagi from "../../assets/img/Bidak ÷.png";
import Bidakkurang from "../../assets/img/Bidak -.png";
import Bidaktambah from "../../assets/img/Bidak +.png";
import Navhome from "../../assets/img/navhome.png";
import timer from "../../assets/img/timer1.png";
import DiceOne from "../../assets/img/dice_one.png";
import DiceTwo from "../../assets/img/dice_two.png";
import DiceThree from "../../assets/img/dice_three.png";
import DiceFour from "../../assets/img/dice_four.png";
import DiceFive from "../../assets/img/Dicefive1.png";
import DiceSix from "../../assets/img/Dicesix1.png";

const Playingpages = () => {
  const [page, setPage] = useState(0);
  const [level, setLevel] = useState("");
  const [students, setStudents] = useState([]);
  const [countPlayer, setCountPlayer] = useState(0);
  const [numberDice, setNumberDice] = useState(1);
  const [second, setSecond] = useState(5);
  const [timeLeft, setTimeLeft] = useState(second);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(1);
  const [question, setQuestion] = useState({});
  let currentPage = "";

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/questions`);
        const filterData = response.data.filter((item) => item.level === level);
        const updatedData = filterData.map((item, number) => {
          return { ...item, number: number + 1 };
        });
        setQuestions(updatedData);
        const currentQuestion = updatedData.find(
          (item) => item.number === number
        );
        setQuestion(currentQuestion);
      } catch (error) {
        console.log(error.message);
      }
    };
    getQuestions();
  }, [level, number]);

  useEffect(() => {
    const getStudents = async () => {
      try {
        const response = await axios.get("http://localhost:4000/siswas");
        setStudents(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getStudents();
  }, []);

  useEffect(() => {
    if (timeLeft > 0) {
      const intervalId = setInterval(() => {
        setTimeLeft((timeLeft) => timeLeft - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
    if (level === "easy") {
      setTimeLeft(30);
    } else if (level === "medium") {
      setTimeLeft(20);
    } else {
      setTimeLeft(10);
    }
  }, [timeLeft]);

  const handleReset = () => {
    if (level === "easy") {
      setTimeLeft(30);
    } else if (level === "medium") {
      setTimeLeft(20);
    } else {
      setTimeLeft(10);
    }
  };

  const chooseLevel = (level) => {
    setPage(1);
    setLevel(level);
    if (level === "easy") {
      setTimeLeft(30);
    } else if (level === "medium") {
      setTimeLeft(20);
    } else {
      setTimeLeft(10);
    }
  };

  const choosePlayer = (count) => {
    setPage(2);
    setCountPlayer(count);
  };

  const chooseBidak = () => {
    setPage(3);
  };

  const backToChoosePlayer = () => {
    setPage(1);
    setCountPlayer(0);
  };

  const dice = () => {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    setNumberDice(randomNum);
    if (number === questions.length) {
      setNumber(1);
    } else {
      setNumber((number) => number + 1);
    }
    handleReset();
  };

  const seconds = timeLeft % 60;

  switch (page) {
    case 0:
      currentPage = (
        <>
          <div>
            <div className="flex bg-[#D4D7DC] justify-center w-[1440px] h-[1024px]">
              <div className="justify-center bg-[#021432] w-[1333px] h-[892px] mt-10 rounded-[40px]">
                <div className="flex bg-[#1D3D73] h-[84px] w-[1333px] items-center justify-between rounded-t-[40px] pl-20 pr-10">
                  <img
                    className="w-[72px] h-[72px] ml-[100px]"
                    src={Logo}
                    alt=""
                  />
                </div>
                <div className="flex justify-between">
                  <Link to={"/home"}>
                    <img src={Back} alt="" />
                  </Link>
                  <a href="Beranda.html">
                    <img src="./assets/images/Home.png" alt="" />
                  </a>
                </div>
                <div className="flex justify-center mt-[12px]">
                  <div className="flex justify-center bg-[#D9D9D9] w-[625px] h-[658px] rounded-[100px]">
                    <div>
                      <div className="flex justify-center">
                        <h1 className="text-[64px] mt-[61px]">Pilih Level</h1>
                      </div>
                      <div className="flex flex-col space-y-[22px] mt-[51px]">
                        <button
                          onClick={() => chooseLevel("easy")}
                          className="text-[32px] w-[466px] h-[77px] bg-[#EAC301] rounded-[10px]"
                        >
                          MUDAH
                        </button>
                        <button
                          onClick={() => chooseLevel("medium")}
                          className="text-[32px] w-[466px] h-[77px] bg-[#00509D] rounded-[10px] text-white"
                        >
                          MENENGAH
                        </button>
                        <button
                          onClick={() => chooseLevel("hard")}
                          className="text-[32px] w-[466px] h-[77px] bg-[#021432] rounded-[10px] text-white"
                        >
                          SULIT
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <button>
                    <img
                      className="w-[30px] h-[32px] ml-[52px]"
                      src={Bantuan}
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      );
      break;
    case 1:
      currentPage = (
        <>
          <div>
            <div className="flex bg-[#D4D7DC] justify-center w-[1440px] h-[1024px]">
              <div className="justify-center bg-[#021432] w-[1333px] h-[892px] mt-10 rounded-[40px]">
                <div className="flex bg-[#1D3D73] h-[84px] w-[1333px] items-center justify-between rounded-t-[40px] pl-20 pr-10">
                  <img
                    className="w-[72px] h-[72px] ml-[100px]"
                    src={Logo}
                    alt=""
                  />
                </div>
                <div className="flex justify-between">
                  <button onClick={() => setPage(0)}>
                    <img src={Back} alt="" />
                  </button>
                </div>
                <div className="flex justify-center mt-[12px]">
                  <div className="flex justify-center bg-[#D9D9D9] w-[625px] h-[677px] rounded-[100px]">
                    <div>
                      <div className="flex justify-center">
                        <h1 className="text-[64px] mt-[39px]">Pilih Jumlah</h1>
                      </div>
                      <div className="flex justify-center">
                        <h1 className="text-[64px] -mt-5">Pemain</h1>
                      </div>
                      <div className="flex flex-col space-y-[22px] mt-[25px]">
                        <button
                          onClick={() => choosePlayer(1)}
                          className="text-[32px] w-[466px] h-[77px] bg-[#00296B] rounded-[10px] text-white"
                        >
                          1 PEMAIN
                        </button>
                        <button
                          onClick={() => choosePlayer(2)}
                          className="text-[32px] w-[466px] h-[77px] bg-[#003F88] rounded-[10px] text-white"
                        >
                          2 PEMAIN
                        </button>
                        <button
                          onClick={() => choosePlayer(3)}
                          className="text-[32px] w-[466px] h-[77px] bg-[#FFD500] rounded-[10px]"
                        >
                          3 PEMAIN
                        </button>
                        <button
                          onClick={() => choosePlayer(4)}
                          className="text-[32px] w-[466px] h-[77px] bg-[#FDC500] rounded-[10px]"
                        >
                          4 PEMAIN
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <button>
                    <img
                      className="w-[30px] h-[32px] ml-[52px]"
                      src={Bantuan}
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      );
      break;
    case 2:
      currentPage = (
        <>
          <div className="flex bg-white justify-center w-[1440px] h-[1024px]">
            <div className="bg-[#021432] w-[1333px] h-[892px] mt-10 rounded-[40px]">
              {/* <!-- navbar --> */}
              <div className="flex bg-[#1D3D73] h-[84px] w-full items-center justify-between rounded-t-[40px] pl-20 pr-10">
                <img
                  className="w-[72px] h-[72px] ml-[122px]"
                  src={Logo}
                  alt=""
                />
              </div>
              {/* <!-- navbar end --> */}
              <div className="flex justify-between">
                <button onClick={() => backToChoosePlayer()}>
                  <img className="w-[54px] h-[50px]" src={Back} alt="" />
                </button>
              </div>

              <div className="w-[1019px] h-[87px] bg-[#D9D9D9] text-center ml-[151px] mt-[29px] rounded-[109px]">
                <h1 className="text-[64px] font-normal">Pilih Bidak</h1>
              </div>

              {/* <!-- bidak --> */}
              <div className="grid grid-cols-2 gap-4 mt-10 place-content-center place-items-center">
                {countPlayer >= 1 ? (
                  <>
                    <div className="flex flex-col items-center justify-center">
                      <div className="flex flex-col space-y-3 bg-[#00509D] rounded-md p-4">
                        <label className="text-[24px] text-white text-center">
                          Pemain 1
                        </label>
                        <select
                          className="rounded-lg bg-[#FDC500] text-black py-2 px-5"
                          name=""
                          id=""
                        >
                          <option
                            value="none"
                            selected
                            disabled
                            hidden
                          ></option>
                          {students.map((item, number) => (
                            <option key={number + 1} value={item.name}>
                              {item.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <img className="mt-[-50px]" src={Bidakkali} alt="" />
                      </div>
                    </div>
                  </>
                ) : null}
                {countPlayer >= 2 ? (
                  <>
                    <div className="flex flex-col items-center justify-center">
                      <div className="flex flex-col space-y-3 bg-[#00509D] rounded-md p-4">
                        <label className="text-[24px] text-white text-center">
                          Pemain 2
                        </label>
                        <select
                          className="rounded-lg bg-[#FDC500] text-black py-2 px-5"
                          name=""
                          id=""
                        >
                          <option
                            value="none"
                            selected
                            disabled
                            hidden
                          ></option>
                          {students.map((item, number) => (
                            <option key={number + 1} value={item.name}>
                              {item.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <img className="mt-[-50px]" src={Bidakbagi} alt="" />
                      </div>
                    </div>
                  </>
                ) : null}
                {countPlayer >= 3 ? (
                  <>
                    <div className="flex flex-col items-center justify-center">
                      <div className="flex flex-col space-y-3 bg-[#00509D] rounded-md p-4">
                        <label className="text-[24px] text-white text-center">
                          Pemain 3
                        </label>
                        <select
                          className="rounded-lg bg-[#FDC500] text-black py-2 px-5"
                          name=""
                          id=""
                        >
                          <option
                            value="none"
                            selected
                            disabled
                            hidden
                          ></option>
                          {students.map((item, number) => (
                            <option key={number + 1} value={item.name}>
                              {item.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <img className="mt-[-50px]" src={Bidakkurang} alt="" />
                      </div>
                    </div>
                  </>
                ) : null}
                {countPlayer >= 4 ? (
                  <>
                    <div className="flex flex-col items-center justify-center">
                      <div className="flex flex-col space-y-3 bg-[#00509D] rounded-md py-2 px-5">
                        <label className="text-[24px] text-white text-center">
                          Pemain 4
                        </label>
                        <select
                          className="rounded-lg bg-[#FDC500] text-black p-2"
                          name=""
                          id=""
                        >
                          <option
                            value="none"
                            selected
                            disabled
                            hidden
                          ></option>
                          {students.map((item, number) => (
                            <option key={number + 1} value={item.name}>
                              {item.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <img className="mt-[-50px]" src={Bidaktambah} alt="" />
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
              {/* <!-- bidak end --> */}
              <div className="flex justify-end mr-[50px] mt-[50px]">
                <button
                  onClick={() => chooseBidak("Board")}
                  className="w-[120px] py-2 bg-[#FDC500] rounded-lg text-[20px]"
                >
                  Selanjutnya
                </button>
              </div>
            </div>
          </div>
        </>
      );
      break;
    case 3:
      currentPage = (
        <>
          <div className="navbar navbar-expand-md top-0 z-50 flex w-full h-20 px-8 justify-between items-center fixed sticky bg-[#1D3D73]">
            <div>
              <img src={Bantuan} alt="" />
            </div>
            <div>
              <img src={Logo} alt="" />
            </div>
            <div>
              <Link to={"/home"}>
                <img src={Navhome} alt="" />
              </Link>
            </div>
          </div>
          <div className="flex text-white w-full h-screen">
            <div className="flex flex-col justify-center items-center bg-[#021432] h-screen p-4 w-[30%]">
              <div className="flex items-center justify-between p-4 space-x-6">
                <h4 className="font-bold text-[25px]">Soal</h4>
                <div className="flex space-x-1 items-center justify-center">
                  <img src={timer} alt="" />
                  <p className="text-white font-bold">
                    Waktu tersisa: {seconds} detik
                  </p>
                </div>
              </div>
              <div className="w-full">
                <div className="bg-[#00509D] w-full rounded-lg p-10">
                  <p className="text-center font-bold text-[24px]">
                    {question.name}
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-4 mt-4 w-full p-4">
                <button className="bg-[#EAC301] w-full p-4 rounded-md font-bold hover:bg-[#00509D]">
                  {question.optionOne}
                </button>
                <button className="bg-[#EAC301] w-full p-4 rounded-md font-bold hover:bg-[#00509D]">
                  {question.optionTwo}
                </button>
                <button className="bg-[#EAC301] w-full p-4 rounded-md font-bold hover:bg-[#00509D]">
                  {question.optionThree}
                </button>
              </div>
              <div className="side w-full flex flex-col justify-center items-center">
                <div className="bg-[#00509D] px-12 py-8 rounded-3xl w-max">
                  <div
                    className={`${numberDice === 1 ? "animate-dice-spin" : ``}`}
                  >
                    {numberDice === 1 ? (
                      <img src={DiceOne} alt="" className="w-10 h-10" />
                    ) : null}
                  </div>
                  <div
                    className={`${numberDice === 2 ? "animate-dice-spin" : ``}`}
                  >
                    {numberDice === 2 ? (
                      <img src={DiceTwo} alt="" className="w-10 h-10" />
                    ) : null}
                  </div>
                  <div
                    className={`${numberDice === 3 ? "animate-dice-spin" : ``}`}
                  >
                    {numberDice === 3 ? (
                      <img src={DiceThree} alt="" className="w-10 h-10" />
                    ) : null}
                  </div>
                  <div
                    className={`${numberDice === 4 ? "animate-dice-spin" : ``}`}
                  >
                    {numberDice === 4 ? (
                      <img src={DiceFour} alt="" className="w-10 h-10" />
                    ) : null}
                  </div>
                  <div
                    className={`${numberDice === 5 ? "animate-dice-spin" : ``}`}
                  >
                    {numberDice === 5 ? (
                      <img src={DiceFive} alt="" className="w-10 h-10" />
                    ) : null}
                  </div>
                  <div
                    className={`${numberDice === 6 ? "animate-dice-spin" : ``}`}
                  >
                    {numberDice === 6 ? (
                      <img src={DiceSix} alt="" className="w-10 h-10" />
                    ) : null}
                  </div>
                </div>
                <button
                  onClick={() => dice()}
                  className="bg-[#00509D] mt-4 p-4 w-full rounded-md font-bold"
                >
                  Kocok Dadu
                </button>
              </div>
            </div>
            <div className="w-full h-screen grid grid-cols-10 gap-1 p-1 bg-[#021432]">
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                100
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                99
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                98
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                97
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                96
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                95
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                94
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                93
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                92
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                91
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                81
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                82
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                83
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                84
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                85
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                86
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                87
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                88
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                89
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                90
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                80
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                79
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                78
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                77
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                76
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                75
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                74
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                73
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                72
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                71
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                61
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                62
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                63
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                64
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                65
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                66
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                67
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                68
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                69
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                70
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                60
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                59
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                58
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                57
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                56
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                55
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                54
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                53
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                52
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                51
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                41
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                42
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                43
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                44
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                45
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                46
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                47
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                48
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                49
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                50
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                40
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                39
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                38
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                37
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                36
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                35
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                34
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                33
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                32
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                31
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                21
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                22
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                23
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                24
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                25
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                26
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                27
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                28
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                29
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                30
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                20
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                19
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                18
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                17
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                16
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                15
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                14
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                13
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                12
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                11
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                1
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                2
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                3
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                4
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                5
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                6
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                7
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                8
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                9
              </div>
              <div className="flex bg-[#EAC301] text-center items-center justify-center">
                10
              </div>
            </div>
          </div>
        </>
      );
      break;
    default:
      currentPage = (
        <div className="font-bold grid place-content-center h-screen place-items-center">
          <h1 className="">Halaman tidak ditemukan</h1>
        </div>
      );
      break;
  }
  return <div>{currentPage}</div>;
};
export default Playingpages;
