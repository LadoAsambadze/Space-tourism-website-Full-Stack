import { Link } from "react-router-dom";

export default function HeaderDesktop() {
  return (
    <div className="sm:hidden md:hidden absolute w-full  flex-row  items-center justify-between lg:flex pt-10 pl-14 ">
      <img src="/share/logo.svg" alt="logo" className="w-12 h-12" />
      <div className="w-full ml-[500px]  py-10 pl-32 pr-40 flex flex-row  items-center justify-between backdrop-blur-custom bg-divBack">
        <Link to="/" className="text-white text-xs leading-4  tracking-[2.3px]">
          HOME
        </Link>
        <Link
          to="/destination/moon"
          className="text-white text-xs leading-4  tracking-[2.3px]"
        >
          DESTINATION
        </Link>
        <span className="text-white text-xs leading-4  tracking-[2.3px]">
          CREW
        </span>
        <span className="text-white text-xs leading-4  tracking-[2.3px]">
          TECHNOLOGY
        </span>
      </div>
    </div>
  );
}
