import { Link } from "react-router-dom";
import { useState } from "react";

export default function HeaderDesktop() {
  const [under, setUnder] = useState("home");
  return (
    <div className="sm:hidden md:hidden absolute w-full  flex-row  items-center justify-between lg:flex pt-10 pl-14 ">
      <img src="/share/logo.svg" alt="logo" className="w-12 h-12" />
      <div className="w-full ml-[500px]  pt-10 pl-32 pr-40 flex flex-row  items-center justify-between backdrop-blur-custom bg-divBack">
        <div className="flex flex-col">
          <Link
            onClick={() => {
              setUnder("home");
            }}
            to="/"
            className="pointer pb-9"
          >
            <span className="text-white text-xs leading-4 tracking-[2.3px]  font-bold ">
              00
            </span>
            <span className="text-white text-xs leading-4 tracking-[2.3px]  ml-2">
              HOME
            </span>
          </Link>
          <div
            className="w-full bg-white h-[3px] "
            style={{ display: under === "home" ? "block" : "none" }}
          ></div>
        </div>
        <div className="flex flex-col">
          <Link
            onClick={() => {
              setUnder("destination");
            }}
            to="/destination/moon"
            className="pointer pb-9"
          >
            <span className="text-white text-xs leading-4 tracking-[2.3px] font-bold ">
              01
            </span>
            <span className="text-white text-xs leading-4 tracking-[2.3px] ml-2">
              DESTINATION
            </span>
          </Link>
          <div
            className="w-full bg-white h-[3px] "
            style={{ display: under === "destination" ? "block" : "none" }}
          ></div>
        </div>
        <div className="flex flex-col">
          <Link
            onClick={() => {
              setUnder("crew");
            }}
            to="/destination/crew"
            className="pointer pb-9"
          >
            <span className="text-white text-xs leading-4 tracking-[2.3px] font-bold ">
              02
            </span>
            <span className="text-white text-xs leading-4 tracking-[2.3px] ml-2">
              CREW
            </span>
          </Link>
          <div
            className="w-full bg-white h-[3px] "
            style={{ display: under === "crew" ? "block" : "none" }}
          ></div>
        </div>
        <div className="flex flex-col">
          <Link
            onClick={() => {
              setUnder("technology");
            }}
            to="/destination/technology"
            className="pointer pb-9"
          >
            <span className="text-white text-xs leading-4 tracking-[2.3px] font-bold ">
              03
            </span>
            <span className="text-white text-xs leading-4 tracking-[2.3px] ml-2">
              TECHNOLOGY
            </span>
          </Link>
          <div
            className="w-full bg-white h-[3px] "
            style={{ display: under === "technology" ? "block" : "none" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
