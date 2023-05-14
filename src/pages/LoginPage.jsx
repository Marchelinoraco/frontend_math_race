import React from "react";
import ButtonPrimary from "../components/ButtonPrimary";
import { Link } from "react-router-dom";
import Logo from "../assets/img/LogoMR (1).png";
import Help from "../assets/img/bantuan.png";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/authSlice";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/pages/dashboard");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ username, password }));
  };
  return (
    <div className="flex bg-[#D4D7DC] justify-center w-[1440px] h-[1024px]">
      <div className="justify-center bg-[#021432] w-[1333px] h-[892px] mt-10 rounded-[40px]">
        <div className="flex bg-[#0B2551] h-[84px] w-[1333px] items-center justify-between rounded-t-[40px] pl-20 pr-10"></div>
        <div className="flex justify-between"></div>
        <div className="flex justify-center mt-[12px]">
          <div className="flex justify-center bg-[#D9D9D9] w-[843px] h-[601px] rounded-[100px]">
            <div>
              <div className="flex justify-center mt-[24px]">
                <img className="w-[150px] h-[150px]" src={Logo} alt="" />
              </div>
              <h1 className="flex justify-center text-[64px]">Masuk</h1>
              <div className="flex flex-col">
                <form onSubmit={Auth}>
                  <div className="mt-[22px]">
                    <input
                      className="shadow appearance-none border rounded-[10px] w-[466px] h-[77px] py-[19px] px-[30px] text-[32px] text-white bg-[#00509D] leading-tight focus:outline-none focus:shadow-outline placeholder-white"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      type="text"
                      placeholder="Nama Pengguna"
                    />
                  </div>
                  <div className="mt-[22px]">
                    <input
                      className="shadow appearance-none border rounded-[10px] w-[466px] h-[77px] py-[19px] px-[30px] text-[32px] text-white bg-[#FDC500] leading-tight focus:outline-none focus:shadow-outline placeholder-white"
                      id="username"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      placeholder="Kata Sandi"
                    />
                  </div>
                  <div className="flex justify-center mt-[45px]">
                    <button
                      type="submit"
                      className="bg-[#021432] text-center py-2 text-white text-[24px] w-[217px] h-[52px] rounded-[50px]"
                    >
                      Masuk
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button>
            <img
              className="w-[30px] h-[32px] mt-[65px] ml-[1217px] mr-[75px]"
              src={Help}
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
