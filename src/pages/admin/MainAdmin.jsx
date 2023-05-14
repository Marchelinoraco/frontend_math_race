import React, { useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import DashboardPageAdmin from "./DashboardPageAdmin";
import AddQuestion from "./questions/AddQuestion";
import DataQuestions from "./questions/DataQuestions";
import AddStudent from "./students/AddStudent";
import DataStudents from "./students/DataStudents";
import UpdateStudent from "./students/UpdateStudent";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../../features/authSlice";

const MainAdmin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  // useEffect(() => {
  //   if (isError) {
  //     navigate("/login");
  //   }
  // }, [isError, navigate]);

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="flex">
        <div className="w-[20%] bg-[#0B2551] h-screen">
          <nav>
            <ul className="flex flex-col justify-center items-center space-y-4 text-white">
              <li className="py-6 w-full text-center text-[30px] hover:bg-[#EAC301]">
                <Link to="./dashboard">Dashboard</Link>
              </li>
              <li className="py-6 w-full text-center text-[30px] hover:bg-[#EAC301]">
                <Link to="./data-questions">Data Soal</Link>
              </li>
              <li className="py-6 w-full text-center text-[30px] hover:bg-[#EAC301]">
                <Link to="./data-students">Data Siswa</Link>
              </li>
            </ul>
          </nav>
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
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};
export default MainAdmin;
