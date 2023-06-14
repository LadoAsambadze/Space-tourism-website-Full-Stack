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
    
      <main
        className="w-full min-h-screen sm:bg-crewmobile md:bg-crewtablet bg-no-repeat bg-cover pt-[88px] pb-20 px-6 flex flex-col items-center
      md:pt-[156px] md:pr-[155px] md:pl-[155px] md:pb-0 lg:pt-[212px] lg:pl-40 lg:pr-[137px] lg:flex-row lg:items-start sm:flex-col-reverse md:flex-col"
      >
        <div className="lg:w-[70%] lg:flex  lg:flex-col lg:items-start lg:justify-start flex flex-col items-center justify-end lg:h-[712px] ">
          <div className="w-full flex flex-row sm:absolute sm:top-[88px] justify-center items-center md:top-[136px] md:justify-start md:absolute md:left-10 md:w-[50%] lg:relative lg:w-[80%]  lg:left-0 lg:mt-0 lg:top-0">
            <span
              className="font-[Barlow-Condensed] text-center text-lg leading-5 tracking-[2.7px] uppercase text-white mix-blend-normal opacity-25 md:text-left md:text-lg md:leading-6 md:tracking-[3.375px]
              lg:text-3xl lg:tracking-[4.725px] lg:leading-9 "
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

          <div className="w-full h-[2px] bg-[#383B4B] md:hidden lg:hidden  "></div>
          <div className="w-full flex flex-row justify-between  pt-8 md:pt-10 px-[30%]  md:px-[35%] md:order-3  lg:pt-[120px] lg:pl-0 lg:pr-[70%]  lg:pb-[94px]">
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
          <span
            className="text-base leading-5 mix-blend-normal opacity-50 uppercase text-white font-[Bellefair] sm:pt-8
         md:pt-16 md:text-2xl md:leading-7 lg:pt-[154px] lg:text-4xl lg:leading-9"
          >
            Commander
          </span>
          <span
            className="text-white font-[Bellefair] text-2xl leading-7 uppercase pt-2  md:text-10 md:leading-[46px] md:tracking-[3px]
          lg:pt-4 lg:text-[56px] lg:leading-[64px] "
          >
            {data?.name}
          </span>
          <p className="text-[#D0D6F9] font-[Barlow] text-[18px] leading-6 text-center pt-4 lg:pt-7 lg:w-[400px] lg:text-left">
            {data?.bio}
          </p>
        </div>

        <img
          className="mt-8 md:mt-10 w-[177px] h-[222px] md:order-3 md:w-[456px] md:h-[572px]  lg:w-[568px] lg:h-[712px] lg:mt-0 "
          src={data?.images.png}
          alt={data?.images.png}
        />
      </main>
    </>
  );
}
