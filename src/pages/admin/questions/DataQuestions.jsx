import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DataQuestions = () => {
  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [uuidQuestion, setUuidQuestion] = useState(0);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/questions");
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.data);
    }
  };

  const deleteData = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/question/${uuidQuestion}`
      );
      setData(data.filter((item) => item.uuid !== response.data.question.uuid));
      setOpenModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const setUuid = (id) => {
    setOpenModal(true);
    setUuidQuestion(id);
    console.log(id);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        <div className="flex justify-end items-center">
          <Link
            to={"../add-question"}
            className="py-2 px-4 text-white rounded-lg  bg-[#EAC301]"
          >
            Tambah Soal
          </Link>
        </div>
        <div className="w-full mt-4">
          <table className="w-full text-center">
            <thead className="bg-[#302F2B]">
              <tr className="text-white">
                <td>No</td>
                <td>Soal</td>
                <td>Pilihan Jawaban</td>
                <td>Jawaban Benar</td>
                <td>Level</td>
                <td>Aksi</td>
              </tr>
            </thead>
            <tbody className="bg-white ">
              {data.map((item, number) => (
                <tr key={number + 1}>
                  <td>{number + 1}</td>
                  <td>{item.name}</td>
                  <td>
                    <ul className="flex flex-row justify-center space-x-3~">
                      <li>{item.optionOne}</li>
                      <li>{item.optionTwo}</li>
                      <li>{item.optionThree}</li>
                    </ul>
                  </td>
                  <td>{item.answer}</td>
                  <td>{item.level}</td>
                  <td>
                    <button
                      className="py-2 px-4 text-white rounded-lg  bg-red-600"
                      onClick={() => setUuid(item.uuid)}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      <div>
        <div
          id="popup-modal"
          tabIndex="-1"
          className={`${
            openModal ? "flex" : "hidden"
          } fixed top-0 left-0 right-0 z-50 justify-center items-center  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
        >
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                onClick={() => setOpenModal(false)}
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-hide="popup-modal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-6 text-center">
                <svg
                  aria-hidden="true"
                  className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Are you sure you want to delete this product?
                </h3>
                <button
                  data-modal-hide="popup-modal"
                  type="button"
                  onClick={() => deleteData()}
                  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  Yes, I'm sure
                </button>
                <button
                  onClick={() => setOpenModal(false)}
                  data-modal-hide="popup-modal"
                  type="button"
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataQuestions;
