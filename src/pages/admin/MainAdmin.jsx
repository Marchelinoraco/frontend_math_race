import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import DashboardPageAdmin from "./DashboardPageAdmin";
import AddQuestion from "./questions/AddQuestion";
import DataQuestions from "./questions/DataQuestions";
import AddStudent from "./students/AddStudent";
import DataStudents from "./students/DataStudents";
import UpdateStudent from "./students/UpdateStudent";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, getMe, reset } from "../../features/authSlice";
import Result from "./Result";

const MainAdmin = () => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/login");
    }
  }, [isError, navigate]);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/login");
  };
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="flex">
        <div className="w-[20%] bg-[#0B2551] h-screen flex justify-between py-10 flex-col items-center">
          <nav>
            <ul className="flex flex-col justify-center items-center space-y-4 text-white">
              <li className="py-6 px-20 w-full text-center text-[30px] hover:bg-[#EAC301]">
                <Link to="./dashboard">Dashboard</Link>
              </li>
              <li className="py-6 w-full text-center text-[30px] hover:bg-[#EAC301]">
                <Link to="./data-questions">Data Soal</Link>
              </li>
              <li className="py-6 w-full text-center text-[30px] hover:bg-[#EAC301]">
                <Link to="./data-students">Data Siswa</Link>
              </li>
              <li className="py-6 w-full text-center text-[30px] hover:bg-[#EAC301]">
                <Link to="./result">Hasil Permainan</Link>
              </li>
            </ul>
          </nav>
          <button
            onClick={() => setOpenModal(true)}
            className="text-center text-white"
          >
            Keluar
          </button>
        </div>
        <div className="w-[80%] bg-[#021432]">
          <div className="p-4">
            <Routes>
              {/* Dashboard */}
              <Route path="/dashboard" element={<DashboardPageAdmin />} />
              {/* Students */}
              <Route path="/data-students" element={<DataStudents />} />
              <Route path="/add-student" element={<AddStudent />} />
              <Route path="/update-student" element={<UpdateStudent />} />

              {/* Questions */}
              <Route path="/add-question" element={<AddQuestion />} />
              <Route path="/data-questions" element={<DataQuestions />} />
              <Route path="/update-question" element={<DataQuestions />} />
              {/*Result*/}
              <Route path="/result" element={<Result />} />
            </Routes>
          </div>
        </div>
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
            <div className="relative bg-white rounded-lg shadow p-8">
              <h3 className="text-center">Anda yakin ini keluar?</h3>
              <div className="flex items-center justify-center space-x-4">
                <button onClick={() => logout()}>Ya</button>
                <button onClick={() => setOpenModal(false)}>Tidak</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MainAdmin;
