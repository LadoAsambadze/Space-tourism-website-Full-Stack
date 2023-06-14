import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
interface Technology {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
}

export default function Technology() {
  const { name } = useParams();
  const [data, setData] = useState<Technology | null>(null);

  const fetch = async () => {
    try {
      const response = await axios.get(
        `https://snotty-group-production.up.railway.app/technology/${name}`
      );
      setData(response.data.technology);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, [name]);

  return (
    <>
      <main
        className="w-full min-h-screen flex flex-col items-center pt-[87px] pb-[56px]  sm:bg-techmobile bg-no-repeat bg-cover
      md:pt-[136px] md:pb-[97px] lg:hidden"
      >
        <div className="w-full flex flex-row  justify-center items-center md:justify-start md:pl-10">
          <span
            className="font-[Barlow-Condensed] text-center text-lg leading-5 tracking-[2.7px] uppercase text-white mix-blend-normal opacity-25 md:text-left md:text-lg md:leading-6 md:tracking-[3.375px]
              lg:text-3xl lg:tracking-[4.725px] lg:leading-9 "
          >
            03
          </span>
          <span
            className="ml-5 font-[Barlow-Condensed] text-base leading-5 tracking-[2.7px] uppercase text-white md:text-lg md:leading-6 md:tracking-[3.375px]
              lg:text-3xl lg:tracking-[4.725px] lg:leading-9"
          >
            SPACE LAUNCH 101
          </span>
        </div>
        <img
          className="mt-8 md:mt-14 w-full  lg:hidden"
          src={data?.images.landscape}
          alt={name}
        />

        <div className="w-full flex flex-row justify-between items-center px-[30%] mt-8 md:mt-14 md:px-[35%]">
          <Link
            to="/technology/Launch vehicle"
            className="flex items-center justify-center px-4 py-3 border-2 border-white   text-black rounded-full pointer font-[Bellefair] text-base leading-4
            md:px-6 md:py-4"
            style={{
              opacity:
                location.pathname === "/technology/Launch%20vehicle"
                  ? "1"
                  : "0.7",
              color:
                location.pathname === "/technology/Launch%20vehicle"
                  ? "black"
                  : "white",
              background:
                location.pathname === "/technology/Launch%20vehicle"
                  ? "white"
                  : "",
            }}
          >
            1
          </Link>
          <Link
            to="/technology/Spaceport"
            className="flex items-center justify-center px-4 py-3 border-2 border-white  text-black rounded-full pointer font-[Bellefair] text-base leading-4
            md:px-6 md:py-4"
            style={{
              opacity:
                location.pathname === "/technology/Spaceport" ? "1" : "0.7",
              color:
                location.pathname === "/technology/Spaceport"
                  ? "black"
                  : "white",
              background:
                location.pathname === "/technology/Spaceport" ? "white" : "",
            }}
          >
            2
          </Link>
          <Link
            to="/technology/Space capsule"
            className="flex items-center justify-center px-4 py-3 border-2 border-white  text-black rounded-full pointer font-[Bellefair] text-base leading-4
          md:px-6 md:py-4"
            style={{
              opacity:
                location.pathname === "/technology/Space%20capsule"
                  ? "1"
                  : "0.7",
              color:
                location.pathname === "/technology/Space%20capsule"
                  ? "black"
                  : "white",
              background:
                location.pathname === "/technology/Space%20capsule"
                  ? "white"
                  : "",
            }}
          >
            3
          </Link>
        </div>
        <span className="text-base leading-4 tracking-[2.3625px] text-[#D0D6F9] font-[Barlow-Condensed] mt-7 text-center md:mt-12 md:px-[155px]">
          THE TERMINOLOGY…
        </span>
        <span className="uppercase text-2xl leading-7 text-[white] mt-3 font-[Bellefair] md:mt-4 md:px-[155px]">
          {data?.name}
        </span>
        <p className="mt-6 text-base leading-6 font-[Barlow] text-[#D0D6F9] text-center px-6 md:mt-4 md:px-[140px] md:leading-8">
          {data?.description}
        </p>
      </main>
      <main className="sm:hidden md:hidden lg:flex w-full min-h-screen lg:pt-[212px] lg:pb-[115px] lg:pl-40 flex bg-techdesktop bg-cover bg-no-repeat flex-row justify-between">
        <div className="flex flex-col items-between justify-start w-[55%]">
          <div className=" flex flex-row">
            <span
              className="font-[Barlow-Condensed] text-center text-lg leading-5 tracking-[2.7px] uppercase text-white mix-blend-normal opacity-25 
              lg:text-3xl lg:tracking-[4.725px] lg:leading-9 "
            >
              03
            </span>
            <span
              className="ml-5 font-[Barlow-Condensed] text-base leading-5 tracking-[2.7px] uppercase text-white md:text-lg md:leading-6 md:tracking-[3.375px]
              lg:text-3xl lg:tracking-[4.725px] lg:leading-9"
            >
              SPACE LAUNCH 101
            </span>
          </div>
          <div className="flex flex-row mt-[160px] h-[300px] items-center justify-between">
            <div className=" flex flex-col h-full justify-between ">
              <Link
                to="/technology/Launch vehicle"
                className="flex items-center justify-center border-2 border-white    text-black rounded-full pointer font-[Bellefair] text-[32px] leading-9
                px-8 py-5"
                style={{
                  opacity:
                    location.pathname === "/technology/Launch%20vehicle"
                      ? "1"
                      : "0.7",
                  color:
                    location.pathname === "/technology/Launch%20vehicle"
                      ? "black"
                      : "white",
                  background:
                    location.pathname === "/technology/Launch%20vehicle"
                      ? "white"
                      : "",
                }}
              >
                1
              </Link>
              <Link
                to="/technology/Spaceport"
                className="flex items-center justify-center border-2 border-white  text-black rounded-full pointer font-[Bellefair] text-[32px] leading-9
                px-8 py-5"
                style={{
                  opacity:
                    location.pathname === "/technology/Spaceport" ? "1" : "0.7",
                  color:
                    location.pathname === "/technology/Spaceport"
                      ? "black"
                      : "white",
                  background:
                    location.pathname === "/technology/Spaceport"
                      ? "white"
                      : "",
                }}
              >
                2
              </Link>
              <Link
                to="/technology/Space capsule"
                className="flex items-center justify-center border-2 border-white   text-black rounded-full pointer font-[Bellefair] text-[32px] leading-9
                px-8 py-5"
                style={{
                  opacity:
                    location.pathname === "/technology/Space%20capsule"
                      ? "1"
                      : "0.7",
                  color:
                    location.pathname === "/technology/Space%20capsule"
                      ? "black"
                      : "white",
                  background:
                    location.pathname === "/technology/Space%20capsule"
                      ? "white"
                      : "",
                }}
              >
                3
              </Link>
            </div>
            <div className="flex flex-col w-[500px] mr-20">
              <span className="text-base leading-5 tracking-[2.3625px] text-[#D0D6F9] font-[Barlow-Condensed]  text-left ">
                THE TERMINOLOGY…
              </span>
              <span className="uppercase text-[56px] leading-[64px] text-[white] mt-3 font-[Bellefair] text-left ">
                {data?.name}
              </span>
              <p className="mt-4 text-[18px] leading-8 font-[Barlow] text-[#D0D6F9]  text-left ">
                {data?.description}
              </p>
            </div>
          </div>
        </div>
        <img src={data?.images.portrait} alt={name} />
      </main>
    </>
  );
}
