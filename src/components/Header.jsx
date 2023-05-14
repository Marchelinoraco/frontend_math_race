import React from "react";
import Logo from "../assets/img/Logokecil.png";
import IconDefault from "../assets/img/ic_default.png";
const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between px-4 py-3 bg-[#0B2551]">
        <div>
          <img src={Logo} alt="" className="ml-24" />
        </div>
        <div className="flex  items-center space-x-4">
          <h2 className="text-white text-[35px] mr-10">Admin</h2>
        </div>
      </header>
    </>
  );
};

export default Header;
