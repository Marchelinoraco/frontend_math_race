import React, { useState, useEffect, useRef } from "react";
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
import "../../games.css";

const Playingpages = () => {
  const [page, setPage] = useState(0);
  const [level, setLevel] = useState("");
  const [students, setStudents] = useState([]);
  const [countPlayer, setCountPlayer] = useState(2);
  const [numberDice, setNumberDice] = useState(1);
  const [second, setSecond] = useState(5);
  const [timeLeft, setTimeLeft] = useState(second);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(1);
  const [question, setQuestion] = useState({});
  let currentPage = "";
  const [playerTurn, setPlayerTurn] = useState("Red");
  const [diceRoll, setDiceRoll] = useState(0);
  const [playerPositions, setPlayerPositions] = useState({
    Red: 1,
    Yellow: 1,
  });
  const [score, setScore] = useState({
    Red: {
      wrong: 0,
      correct: 0,
    },
    Yellow: {
      wrong: 0,
      correct: 0,
    },
  });
  const [answer, setAnswer] = useState("");
  const [enabled, setEnabled] = useState(false);
  const [openToastMessage, setOpenToastMessage] = useState(false);
  const [openToastTime, setOpenToastTime] = useState(false);
  const [check, setCheck] = useState(false);
  const [openToastCongratulation, setOpenToastCongratulation] = useState(false);

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
        setAnswer(currentQuestion.answer);
        console.log(answer);
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
    let intervalId;

    if (timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
    } else {
      if (level === "easy") {
        setTimeLeft(30);
      } else if (level === "medium") {
        setTimeLeft(20);
      } else {
        setTimeLeft(10);
      }

      openToastT();
      // Set player positions to a specific value when time is up
      setPlayerTurn(playerTurn === "Red" ? "Yellow" : "Red");
    }

    return () => clearInterval(intervalId);
  }, [timeLeft, level]);

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

  const chooseBidak = () => {
    setPage(2);
    if (level === "easy") {
      setTimeLeft(30);
    } else if (level === "medium") {
      setTimeLeft(20);
    } else {
      setTimeLeft(10);
    }
  };

  const backToChoosePlayer = () => {
    setPage(0);
  };

  useEffect(() => {
    checkWin();
  }, [playerPositions]);

  const handleDiceRoll = () => {
    const num = Math.floor(Math.random() * 6) + 1;
    setNumberDice(num);
    if (number === questions.length) {
      setNumber(1);
    } else {
      setNumber((number) => number + 1);
    }
    movePlayer(num);
    setEnabled(false);
    if (level === "easy") {
      setTimeLeft(30);
    } else if (level === "medium") {
      setTimeLeft(20);
    } else {
      setTimeLeft(10);
    }
    setPlayerTurn(playerTurn === "Red" ? "Yellow" : "Red");
  };

  const movePlayer = (steps) => {
    const currentPlayerPosition = playerPositions[playerTurn];
    let newPosition = currentPlayerPosition + steps;

    if (newPosition > 100) {
      newPosition = currentPlayerPosition;
    }

    const updatedPositions = {
      ...playerPositions,
      [playerTurn]: newPosition,
    };

    setPlayerPositions(updatedPositions);
  };

  const checkWin = () => {
    const currentPlayerPosition = playerPositions[playerTurn];
    if (currentPlayerPosition === 100) {
      alert(`${playerTurn} wins!`);
      resetGame();
    }
  };

  const openToast = () => {
    setTimeout(() => {
      setOpenToastMessage(false);
    }, 1000);
    setOpenToastMessage(true);
  };

  const openToastT = () => {
    setTimeout(() => {
      setOpenToastTime(false);
    }, 1000);
    setOpenToastTime(true);
  };

  const checkAnswer = (answer) => {
    if (question.answer === answer) {
      setEnabled(true);
      setCheck(true);

      openToast();
    } else {
      setCheck(false);
      openToast();
      setPlayerTurn(playerTurn === "Red" ? "Yellow" : "Red");
    }
  };

  const resetGame = () => {
    setPlayerTurn("Red");
    setDiceRoll(0);
    setPlayerPositions({
      Red: 1,
      Yellow: 1,
    });
  };

  const renderBoxes = () => {
    const boxOrder = Array.from({ length: 100 }, (_, index) => 100 - index);

    const boxes = boxOrder.map((boxNumber) => {
      const extraClass =
        boxNumber === playerPositions.Red
          ? " red-player"
          : boxNumber === playerPositions.Yellow
          ? " yellow-player"
          : "";

      const boxId = `b${boxNumber.toString().padStart(2, "0")}`;

      return (
        <div key={boxId} className={`box${extraClass}`} id={boxId}>
          {boxNumber}
        </div>
      );
    });

    return boxes;
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
                  <Link to={"/"}>
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
                        <h1 className="text-[64px] mt-[61px] text-black">
                          Pilih Level
                        </h1>
                      </div>
                      <div className="flex flex-col space-y-[22px] mt-[51px]">
                        <button
                          onClick={() => chooseLevel("easy")}
                          className="text-[32px] w-[466px] h-[77px] bg-[#EAC301] rounded-[10px] text-white"
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
                <h1 className="text-[64px] font-normal text-black">
                  Pilih Pemain
                </h1>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-10 place-content-center place-items-center">
                {countPlayer >= 1 && (
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-col space-y-3 bg-blue-900 rounded-md p-4">
                      <label className="text-2xl text-white text-center">
                        Pemain 1
                      </label>
                      <select
                        className="rounded-lg bg-yellow-500 text-black py-2 px-5"
                        defaultValue=""
                      >
                        <option value="" disabled hidden>
                          Select player
                        </option>
                        {students.map((item, index) => (
                          <option key={index} value={`player1-${index}`}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <img className="mt-[-50px]" src={Bidakkali} alt="" />
                    </div>
                  </div>
                )}
                {countPlayer >= 2 && (
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-col space-y-3 bg-blue-900 rounded-md p-4">
                      <label className="text-2xl text-white text-center">
                        Pemain 2
                      </label>
                      <select
                        className="rounded-lg bg-yellow-500 text-black py-2 px-5"
                        defaultValue=""
                      >
                        <option value="" disabled hidden>
                          Select player
                        </option>
                        {students.map((item, index) => (
                          <option key={index} value={`player2-${index}`}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <img className="mt-[-50px]" src={Bidakbagi} alt="" />
                    </div>
                  </div>
                )}
              </div>

              {/* <!-- bidak end --> */}
              <div className="flex justify-end mr-[50px] mt-[50px]">
                <button
                  onClick={() => chooseBidak("Board")}
                  className="w-[120px] py-2 bg-[#FDC500] rounded-lg text-[20px] text-black"
                >
                  Selanjutnya
                </button>
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

              <div className="flex text-white w-full h-screen rounded-xl">
                <div className="flex flex-col justify-center items-center bg-[#021432] h-screen p-4 w-[30%]">
                  <div id="diceCont">
                    <p id="tog" className="text-[24px]">
                      {playerTurn === "Red" ? "Player 1" : "Player 2"} :
                    </p>
                    {/* <p id="dice">{diceRoll}</p> */}
                  </div>
                  <div className="flex items-center justify-between p-4 space-x-6">
                    <h4 className="text-[20px]">Soal</h4>
                    <div className="flex space-x-1 items-center justify-center">
                      <img src={timer} alt="" />
                      <p className="text-white">
                        Waktu tersisa: {seconds} detik
                      </p>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="bg-[#00509D] w-full rounded-lg p-10">
                      <p className="text-center text-[36px]">{question.name}</p>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-4 mt-4 w-full p-4">
                    <button
                      onClick={() => checkAnswer("a")}
                      className="bg-[#EAC301] w-full p-4 rounded-md"
                    >
                      {question.optionOne}
                    </button>
                    <button
                      onClick={() => checkAnswer("b")}
                      className="bg-[#EAC301] w-full p-4 rounded-md"
                    >
                      {question.optionTwo}
                    </button>
                    <button
                      onClick={() => checkAnswer("c")}
                      className="bg-[#EAC301] w-full p-4 rounded-md"
                    >
                      {question.optionThree}
                    </button>
                  </div>
                  <div className="side w-full flex flex-col justify-center items-center">
                    <div className="bg-[#00509D] px-12 py-8 rounded-3xl w-max">
                      <div>
                        {numberDice === 1 ? (
                          <img src={DiceOne} alt="" className="w-10 h-10" />
                        ) : null}
                      </div>
                      <div>
                        {numberDice === 2 ? (
                          <img src={DiceTwo} alt="" className="w-10 h-10" />
                        ) : null}
                      </div>
                      <div>
                        {numberDice === 3 ? (
                          <img src={DiceThree} alt="" className="w-10 h-10" />
                        ) : null}
                      </div>
                      <div>
                        {numberDice === 4 ? (
                          <img src={DiceFour} alt="" className="w-10 h-10" />
                        ) : null}
                      </div>
                      <div>
                        {numberDice === 5 ? (
                          <img src={DiceFive} alt="" className="w-10 h-10" />
                        ) : null}
                      </div>
                      <div>
                        {numberDice === 6 ? (
                          <img src={DiceSix} alt="" className="w-10 h-10" />
                        ) : null}
                      </div>
                    </div>
                    {enabled ? (
                      <button
                        id="diceBtn"
                        onClick={handleDiceRoll}
                        className="bg-[#00509D] mt-4 p-4 w-full rounded-md font-bold"
                      >
                        Kocok Dadu
                      </button>
                    ) : null}
                  </div>
                </div>
                <div className="w-full p-10 grid grid-cols-10">
                  {renderBoxes()}
                </div>
              </div>
            </div>
          </div>
          {openToastMessage ? (
            <div className="toast toast-top toast-center w-[200px]">
              <div
                className={`alert alert-success text-center justify-center ${
                  check ? null : "bg-red-600"
                }`}
              >
                {" "}
                <p className="text-center text-white">
                  Jawaban {check ? "Benar" : "Salah"}
                </p>
              </div>
            </div>
          ) : null}
          {openToastTime ? (
            <div className="toast toast-top toast-center w-[200px]">
              <div
                className={`alert alert-success text-center justify-center bg-red-600
                }`}
              >
                {" "}
                <p className="text-center text-white">Waktu Habis</p>
              </div>
            </div>
          ) : null}
          {openToastTime ? (
            <div className="toast toast-top toast-center w-[200px]">
              <div
                className={`alert alert-success text-center justify-center bg-red-600
                }`}
              >
                {" "}
                <p className="text-center text-white">Waktu Habis</p>
              </div>
            </div>
          ) : null}
          {openToastCongratulation ? (
            <div className="toast toast-top toast-center w-[200px]">
              <div
                className={`alert alert-success text-center justify-center bg-blue-600
                }`}
              >
                {" "}
                <p className="text-center text-white">${playerTurn} wins!</p>
              </div>
            </div>
          ) : null}
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
