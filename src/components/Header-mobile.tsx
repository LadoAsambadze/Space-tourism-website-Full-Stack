import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [active, setActive] = useState(false);
  console.log(active);
  return (
    <>
      <div className="w-full absolute px-6 pt-6 flex flex-row justify-between items-center md:hidden">
        <img src="/share/logo.svg" alt="logo" />
        <img
          src="/share/icon-hamburger.svg"
          alt="hamburger icon"
          className="w-6 h-5 pointer"
          onClick={() => {
            setActive(true);
          }}
        />
        <div
          className="w-[70%] min-h-screen bg-[#FFFFFF0A] backdrop-blur-custom bg-divback absolute right-0 top-0 
        pt-8 pr-7 pb-[377px] pl-8 flex flex-col md:hidden lg:hidden"
          style={{ display: active ? "flex" : "none" }}
        >
          <div className="w-full flex justify-end">
            <img
              src="share/icon-close.svg"
              alt="close icon"
              className="pointer"
              onClick={() => {
                setActive(false);
              }}
            />
          </div>
          <div className="mt-16 w-full flex flex-col items-start ">
            <div className="w-full pb-8">
              <span className="text-base leading-5 tracking-[2.7px]  font-[700] pb-8 text-white">
                00
              </span>
              <Link
                to="/"
                className="text-base leading-5 tracking-[2.7px] ml-3 text-white pointer "
              >
                HOME
              </Link>
            </div>
            <div className="w-full pb-8">
              <span className="text-base leading-5 tracking-[2.7px]  font-[700] text-white">
                01
              </span>
              <Link
                to="/destination/moon"
                className="text-base leading-5 tracking-[2.7px] ml-3 text-white pointer"
              >
                DESTINATION
              </Link>
            </div>
            <div className="w-full pb-8">
              <span className="text-base leading-5 tracking-[2.7px]  font-[700] text-white">
                02
              </span>
              <span className="text-base leading-5 tracking-[2.7px] ml-3 text-white pointer">
                CREW
              </span>
            </div>
            <div className="w-full pb-8">
              <span className="text-base leading-5 tracking-[2.7px]  font-[700] text-white">
                03
              </span>
              <span className="text-base leading-5 tracking-[2.7px] ml-3 text-white pointer">
                TECHNOLOGY
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
