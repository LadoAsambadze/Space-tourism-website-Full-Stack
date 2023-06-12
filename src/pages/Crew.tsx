import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
interface Crew {
  name: string;
  bio: string;
  images: {
    png: string;
    webp: string;
  };
}

export default function Crew(): JSX.Element {
  const [active, setActive] = useState("1");
  const [data, setData] = useState<Crew | null>(null);
  const { name } = useParams();

  const fetch = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/crew/${name}`);
      setData(response.data.crew);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, [name]);

  return (
    <>
      <main className="w-full min-h-screen bg-techmobile bg-no-repeat bg-cover pt-[88px] pb-20 px-6 flex flex-col items-center ">
        <div className="w-full flex flex-row justify-center items-center md:justify-start">
          <span
            className="font-[Barlow-Condensed] text-center text-lg leading-5 tracking-[2.7px] uppercase text-white mix-blend-normal opacity-25 md:text-left md:text-lg md:leading-6 md:tracking-[3.375px]
              lg:text-3xl lg:tracking-[4.725px] lg:leading-9"
          >
            02
          </span>
          <span
            className="ml-5 font-[Barlow-Condensed] text-base leading-5 tracking-[2.7px] uppercase text-white md:text-lg md:leading-6 md:tracking-[3.375px]
              lg:text-3xl lg:tracking-[4.725px] lg:leading-9"
          >
            Meet your crew
          </span>
        </div>
        <img
          className="mt-8 w-[177px] h-[222px]"
          src={data?.images.png}
          alt={data?.images.png}
        />
        <div className="w-full h-[2px] bg-[#383B4B] "></div>
        <div className="w-full flex flex-row justify-between  mt-8 px-[30%]">
          <Link
            to="/crew/Douglas Hurley"
            className="w-3 h-3 rounded-full bg-white pointer mix-blend-normal opacity-20"
            onClick={() => {
              setActive("1");
            }}
            style={{ opacity: active === "1" ? "1" : "0.20" }}
          ></Link>
          <Link
            to="/crew/Mark Shuttleworth"
            className="w-3 h-3 rounded-full bg-white pointer mix-blend-normal opacity-20"
            onClick={() => {
              setActive("2");
            }}
            style={{ opacity: active === "2" ? "1" : "0.20" }}
          ></Link>
          <Link
            to="/crew/Victor Glover"
            className="w-3 h-3 rounded-full bg-white pointer mix-blend-normal opacity-20"
            onClick={() => {
              setActive("3");
            }}
            style={{ opacity: active === "3" ? "1" : "0.20" }}
          ></Link>
          <Link
            to="/crew/Anousheh Ansari"
            className="w-3 h-3 rounded-full bg-white pointer mix-blend-normal opacity-20"
            onClick={() => {
              setActive("4");
            }}
            style={{ opacity: active === "4" ? "1" : "0.20" }}
          ></Link>
        </div>
        <span className="text-base leading-5 mix-blend-normal opacity-50 uppercase text-white font-[Bellefair] mt-8">
          Commander
        </span>
        <span className="text-white font-[Bellefair] text-2xl leading-7 uppercase mt-2">
          {data?.name}
        </span>
        <p className="text-[#D0D6F9] font-[Barlow] text-base leading-6 text-center mt-4 ">
          {data?.bio}
        </p>
      </main>
    </>
  );
}
