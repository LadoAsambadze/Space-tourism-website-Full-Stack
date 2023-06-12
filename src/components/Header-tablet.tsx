import { useState } from "react";
import { Link } from "react-router-dom";

export default function HeaderTablet() {
  const [under, setUnder] = useState("home");

  return (
    <div className="sm:hidden  absolute w-full  flex-row md:flex md:justify-between lg:hidden">
      <img src="/share/logo.svg" alt="logo" className="py-6 pl-10" />
      <div className="w-full ml-[230px]  pt-10 px-12 flex flex-row  items-center justify-between backdrop-blur-custom bg-divBack">
        <div className="flex flex-col">
          <Link
            onClick={() => {
              setUnder("home");
            }}
            to="/"
            className="text-white text-xs leading-4  tracking-[2.3px] pb-9"
          >
            HOME
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
            to="/destination/Moon
          "
            className="text-white text-xs leading-4  tracking-[2.3px] pb-9"
          >
            DESTINATION
          </Link>
          <div
            className="w-full bg-white h-[3px] "
            style={{ display: under === "destination" ? "block" : "none" }}
          ></div>
        </div>
        <div className="flex flex-col">
          <Link
            onClick={() => {
              setUnder("destination");
            }}
            to="/destination/cref"
            className="text-white text-xs leading-4  tracking-[2.3px] pb-9"
          >
            CREW
          </Link>
          <div className="w-full bg-white h-[3px] "  style={{ display: under === "crew" ? "block" : "none" }}></div>
        </div>
        <div className="flex flex-col">
          <Link
            to="/destination/technology"
            className="text-white text-xs leading-4  tracking-[2.3px] pb-9"
          >
            TECHNOLOGY
          </Link>
          <div className="w-full bg-white h-[3px] "  style={{ display: under === "technology" ? "block" : "none" }}></div>
        </div>
      </div>
    </div>
  );
}
