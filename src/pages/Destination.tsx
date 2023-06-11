import infos from "../data/data.json";
import { Link, useParams } from "react-router-dom";

function Destinations(): JSX.Element {
  const { name } = useParams();
  const destArray = infos.destinations;
  const destination = destArray.find(
    (item) => item.name.toLowerCase() === name
  );

  return (
    <>
      <main className="w-full">
        <div
          className="w-full min-h-screen pt-28 px-6 pb-16 sm:justify-center flex flex-col  sm:bg-destmobile md:bg-desttablet lg:bg-destdesktop bg-no-repeat bg-cover md:pt-[125px] md:pb-16 md:px-24 
        lg:flex-row lg:justify-center lg:items-center lg:px-40 lg:pt-[180px] lg:pb-28"
        >
          <div className="lg:w-[55%]">
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
                src={destination?.images.png}
                alt="moon"
                className="w-[170px] h-[170px] md:w-[300px] md:h-[300px] lg:w-[445px] lg:h-[445px]"
              />
            </div>
          </div>
          <div className="lg:w-[45%] lg:ml-36 lg:mt-8 sm:flex  sm:flex-col sm:items-center">
            <div className="w-full flex flex-row justify-around  mt-4 px-8 md:px-20 lg:pr-28 lg:pl-0 lg:justify-between  ">
              <Link
                to="/destination/moon"
                className="text-xs leading-4 tracking-[2.3625px] text-[#D0D6F9] font-[Barlow-Condensed] uppercase underline-hover-8px cursor-pointer
            md:text-base md:leading-5 md:tracking-[2.7px] "
              >
                moon
              </Link>

              <Link
                to="/destination/mars"
                className="text-xs leading-4 tracking-[2.3625px] text-[#D0D6F9] font-[Barlow-Condensed] uppercase underline-hover-8px cursor-pointer
            md:text-base md:leading-5 md:tracking-[2.7px]"
              >
                mars
              </Link>

              <Link
                to="/destination/europa"
                className="text-xs leading-4 tracking-[2.3625px] text-[#D0D6F9] font-[Barlow-Condensed] uppercase underline-hover-8px cursor-pointer
            md:text-base md:leading-5 md:tracking-[2.7px]"
              >
                europa
              </Link>
              <Link
                to="/destination/titan"
                className="text-xs leading-4 tracking-[2.3625px] text-[#D0D6F9] font-[Barlow-Condensed] uppercase underline-hover-8px cursor-pointer
            md:text-base md:leading-5 md:tracking-[2.7px]"
              >
                titan
              </Link>
            </div>
            <h1
              className="text-[56px] leading-[64px] text-white text-center font-[Bellefair] mt-8 uppercase tracking-[4px] font-normal
          md:text-[80px] md:leading-[92px] md:mt-10 lg:text-[100px] lg:leading-[115px] lg:mt-12 lg:text-left"
            >
              {destination?.name}
            </h1>
            <span
              className="text-base text-[#D0D6F9] leading-6 text-center font-[Barlow] mt-2 md:text-2xl md:leading-9 
            lg:text-base lg:leading-8 lg:mt-8  lg:text-left"
            >
              {destination?.description}
            </span>
            <div className="mt-8 w-full h-[1px] bg-[#383B4B] md:mt-12"></div>
            <div className="w-full mt-8 flex flex-col items-center justify-center md:flex-row md:items-center md:justify-center md:mt-7">
              <div className="w-full flex flex-col md:justify-center md:items-center ">
                <span className="text-[#D0D6F9] text-xs leading-4 text-center uppercase tracking-[2.3625px] font-[Barlow-Condensed]">
                  AVG. DISTANCE
                </span>
                <span className="text-white leading-8 text-3xl uppercase text-center mt-3 font-[Bellefair] ">
                  {destination?.distance}
                </span>
              </div>
              <div className="w-full flex flex-col mt-8  md:justify-center md:items-center md:mt-0">
                <span className="text-[#D0D6F9] text-xs leading-4 text-center uppercase tracking-[2.3625px] font-[Barlow-Condensed]">
                  Est. travel time
                </span>
                <span className="text-white leading-8 text-3xl uppercase text-center mt-3 font-[Bellefair] ">
                  {destination?.travel}
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
