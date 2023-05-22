import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Result = () => {
  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [uuidStudent, setUuiddStudent] = useState(0);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/siswas");
      setData(response.data);
    } catch (error) {
      console.log(error.data);
    }
  };

  return (
    <>
      <div className="w-full mt-4">
        <table className="w-full text-center">
          <thead className="bg-[#302F2B]">
            <tr className="text-white">
              <td>No</td>
              <td>Nama Siswa</td>
              <td>Jumlah Benar</td>
              <td>Jumlah Salah</td>
              <td>Presentasi</td>
            </tr>
          </thead>
          <tbody className="bg-white">
            {data.map((item, number) => (
              <tr key={number + 1}>
                <td>{number + 1}</td>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Result;
