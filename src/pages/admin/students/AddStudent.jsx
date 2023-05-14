import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const [name, setName] = useState("");
  const [openModal, setOpenModal] = useState(false);
  let navigate = useNavigate();

  const sendData = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/siswa", {
        name: name,
      });
      setTimeout(() => {
        setOpenModal(false);
      }, 1000);
      setOpenModal(true);
      setName("");
      navigate("../data-students");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="flex justify-center items-center space-x-3 mt-[10%]">
        <form onSubmit={sendData}>
          <div className="flex space-x-3 items-center">
            <label className="text-white" htmlFor="">
              Nama Siswa
            </label>
            <input
              className="w-[500px] py-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              id=""
            />
          </div>
          <button
            className="mt-[50px] py-2 px-4 text-white rounded-lg mx-[50%] bg-[#EAC301]"
            type="submit"
          >
            Simpan
          </button>
        </form>
      </div>

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

export default AddStudent;
