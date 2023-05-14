import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddQuestion = () => {
  const [name, setName] = useState("");
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const [optionThree, setOptionThree] = useState("");
  const [answer, setAnswer] = useState("a");
  const [level, setLevel] = useState("easy");
  const [openModal, setOpenModal] = useState(false);
  let navigate = useNavigate();

  const sendData = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/question", {
        name: name,
        optionOne: optionOne,
        optionTwo: optionTwo,
        optionThree: optionThree,
        answer: answer,
        level: level,
      });
      setTimeout(() => {
        setOpenModal(false);
      }, 1000);
      setOpenModal(true);
      setName("");
      setOptionOne("");
      setOptionTwo("");
      setOptionThree("");
      setAnswer("");
      setLevel("");
      navigate("../data-questions");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center mt-[10%]">
        <form
          onSubmit={sendData}
          className="flex flex-col space-y-10 items-center"
        >
          <div className="flex space-x-3 items-center">
            <label className="text-white">Soal</label>
            <input
              className="w-[500px] py-1 rounded-md"
              value={name}
              name=""
              onChange={(e) => setName(e.target.value)}
              type="text"
            />
          </div>
          <div className="flex justify-center text-white">
            <h1>Pilihan Jawaban</h1>
          </div>
          <div className="flex space-x-3 items-center">
            <label className="text-white">A</label>
            <input
              className="w-[500px] py-1 rounded-md"
              value={optionOne}
              onChange={(e) => setOptionOne(e.target.value)}
              type="text"
            />
          </div>
          <div className="flex space-x-3 items-center">
            <label className="text-white">B</label>
            <input
              className="w-[500px] py-1 rounded-md"
              value={optionTwo}
              onChange={(e) => setOptionTwo(e.target.value)}
              type="text"
            />
          </div>
          <div className="flex space-x-3 items-center">
            <label className="text-white">C</label>
            <input
              className="w-[500px] py-1 rounded-md"
              value={optionThree}
              onChange={(e) => setOptionThree(e.target.value)}
              type="text"
            />
          </div>
          <div className="flex space-x-3 items-center">
            <label className="text-white">Jawaban Benar</label>
            <select
              className=" py-1 rounded-md "
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              id=""
            >
              <option value="a">A</option>
              <option value="b">B</option>
              <option value="b">C</option>
            </select>
          </div>
          <div className="flex space-x-3 items-center">
            <label className="text-white">Level</label>
            <select
              className="py-1 rounded-md"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              name=""
              id=""
            >
              <option value="easy">Mudah</option>
              <option value="medium">Sedang</option>
              <option value="hard">Sulit</option>
            </select>
          </div>
          <button
            type="submit"
            className="mt-[50px] py-2 px-4 text-white rounded-lg mx-[50%] bg-[#EAC301]"
          >
            Simpan
          </button>
        </form>
      </div>
      {/* Popup Massage */}
      <div>
        <div
          id="popup-modal"
          tabIndex="-1"
          className={`${
            openModal ? "flex" : "hidden"
          } fixed top-0 left-0 right-0 z-50 justify-center items-center  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
        >
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow">
              <div className="p-6 text-center">
                <h3 className="text-lg font-normal text-gray-500 dark:text-gray-400">
                  Data Berhasil Ditambahkan
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddQuestion;
