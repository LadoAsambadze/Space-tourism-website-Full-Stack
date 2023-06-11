import { Link } from "react-router-dom";

export default function HeaderTablet() {
  return (
    <div className="sm:hidden  absolute w-full  flex-row md:flex md:justify-between lg:hidden">
      <img src="/share/logo.svg" alt="logo" className="py-6 pl-10" />
      <div className="w-full ml-[230px]  py-10 px-12 flex flex-row  items-center justify-between backdrop-blur-custom bg-divBack">
        <Link to="/" className="text-white text-xs leading-4  tracking-[2.3px]">
          HOME
        </Link>
        <Link
          to="/destination/moon
          "
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
