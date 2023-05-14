import React from "react";
import Logo from "../../assets/img/LogoMR (1).png";

const DashboardPageAdmin = () => {
  return (
    <>
      <div>
        <h1 className="text-white ml-[20%] mt-[5%] text-[30px]">Welcome to,</h1>
      </div>
      <div>
        <img className="mt-[3%] ml-[25%]" src={Logo} alt="" />
      </div>
    </>
  );
};

export default DashboardPageAdmin;
