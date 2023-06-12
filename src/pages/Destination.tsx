import { useEffect, useState } from "react";
import infos from "../data/data.json";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
interface Destination {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}

function Destinations(): JSX.Element {
  const [dest, setDest] = useState<Destination | null>(null);
  const { name } = useParams();
  const destArray = infos.destinations;
  const destination = destArray.find(
    (item) => item.name.toLowerCase() === name
  );

  const fetch = async () => {
    try {
      const response = await axios.get(
        ` http://localhost:3000/destinations/${name}`
      );
      setDest(response.data.destination);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, [name]);
  console.log(name);
  return (
    <>
      <main className="w-full min-h-screen">
        <div
          className="w-full min-h-screen  pt-28 px-6 pb-16 sm:justify-center flex flex-col  sm:bg-destmobile md:bg-desttablet lg:bg-destdesktop bg-no-repeat bg-cover md:pt-[125px] md:pb-16 md:px-24 
        lg:flex-row lg:justify-center lg:items-center lg:px-40 lg:pt-[180px] lg:pb-28"
        >
          <div className="lg:w-[55%] ">
            <div className="w-full flex flex-row justify-center items-center md:justify-start">
              <span
                className="font-[Barlow-Condensed] text-center text-lg leading-5 tracking-[2.7px] uppercase text-white mix-blend-normal opacity-25 md:text-left md:text-lg md:leading-6 md:tracking-[3.375px]
              lg:text-3xl lg:tracking-[4.725px] lg:leading-9"
              >
                01
              </span>
              <span
                className="ml-5 font-[Barlow-Condensed] text-base leading-5 tracking-[2.7px] uppercase text-white md:text-lg md:leading-6 md:tracking-[3.375px]
              lg:text-3xl lg:tracking-[4.725px] lg:leading-9"
              >
                Pick your destination
              </span>
            </div>
            <div className="pt-8 pb-7 w-full flex items-center justify-center md:pt-12 lg:pt-16">
              <img
                src={dest?.images.png}
                alt={name}
                className="w-[170px] h-[170px] md:w-[300px] md:h-[300px] lg:w-[445px] lg:h-[445px]"
              />
            </div>
          </div>
          <div className="lg:w-[45%] lg:ml-36 lg:mt-8 sm:flex  sm:flex-col sm:items-center">
            <div className="w-full flex flex-row justify-around  mt-4 px-8 md:px-20 lg:pr-28 lg:pl-0 lg:justify-between  ">
              <div className="flex flex-col">
                <Link
                  to="/destination/Moon"
                  className="text-xs leading-4 tracking-[2.3625px] text-[#D0D6F9] font-[Barlow-Condensed] uppercase underline-hover-8px cursor-pointer
            md:text-base md:leading-5 md:tracking-[2.7px] pb-2 "
                >
                  moon
                </Link>
                <div
                  className="w-full bg-white h-[3px] "
                  style={{ display: name === "Moon" ? "block" : "none" }}
                ></div>
              </div>

              <div className="flex flex-col">
                <Link
                  to="/destination/Mars"
                  className="text-xs leading-4 tracking-[2.3625px] text-[#D0D6F9] font-[Barlow-Condensed] uppercase underline-hover-8px cursor-pointer
            md:text-base md:leading-5 md:tracking-[2.7px] pb-2 "
                >
                  mars
                </Link>
                <div
                  className="w-full bg-white h-[3px] "
                  style={{ display: name === "Mars" ? "block" : "none" }}
                ></div>
              </div>

              <div className="flex flex-col">
                <Link
                  to="/destination/Europa"
                  className="text-xs leading-4 tracking-[2.3625px] text-[#D0D6F9] font-[Barlow-Condensed] uppercase underline-hover-8px cursor-pointer
            md:text-base md:leading-5 md:tracking-[2.7px] pb-2 "
                >
                  europa
                </Link>
                <div
                  className="w-full bg-white h-[3px] "
                  style={{ display: name === "Europa" ? "block" : "none" }}
                ></div>
              </div>
              <div className="flex flex-col">
                <Link
                  to="/destination/Titan"
                  className="text-xs leading-4 tracking-[2.3625px] text-[#D0D6F9] font-[Barlow-Condensed] uppercase underline-hover-8px cursor-pointer
            md:text-base md:leading-5 md:tracking-[2.7px] pb-2 "
                >
                  titan
                </Link>
                <div
                  className="w-full bg-white h-[3px] "
                  style={{ display: name === "Titan" ? "block" : "none" }}
                ></div>
              </div>
            </div>
            <h1
              className="text-[56px] leading-[64px] text-white text-center font-[Bellefair] mt-8 uppercase tracking-[4px] font-normal
          md:text-[80px] md:leading-[92px] md:mt-10 lg:text-[100px] lg:leading-[115px] lg:mt-12 lg:text-left"
            >
              {dest?.name}
            </h1>
            <span
              className="text-base text-[#D0D6F9] leading-6 text-center font-[Barlow] mt-2 md:text-2xl md:leading-9 
            lg:text-base lg:leading-8 lg:mt-8  lg:text-left"
            >
              {dest?.description}
            </span>
            <div className="mt-8 w-full h-[1px] bg-[#383B4B] md:mt-12"></div>
            <div className="w-full mt-8 flex flex-col items-center justify-center md:flex-row md:items-center md:justify-center md:mt-7">
              <div className="w-full flex flex-col md:justify-center md:items-center ">
                <span className="text-[#D0D6F9] text-xs leading-4 text-center uppercase tracking-[2.3625px] font-[Barlow-Condensed]">
                  AVG. DISTANCE
                </span>
                <span className="text-white leading-8 text-3xl uppercase text-center mt-3 font-[Bellefair] ">
                  {dest?.distance}
                </span>
              </div>
              <div className="w-full flex flex-col mt-8  md:justify-center md:items-center md:mt-0">
                <span className="text-[#D0D6F9] text-xs leading-4 text-center uppercase tracking-[2.3625px] font-[Barlow-Condensed]">
                  Est. travel time
                </span>
                <span className="text-white leading-8 text-3xl uppercase text-center mt-3 font-[Bellefair] ">
                  {dest?.travel}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Destinations;
