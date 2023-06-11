import infos from "../data/data.json";
import { useParams } from "react-router-dom";

function Destinations(): JSX.Element {
  const { name } = useParams();
  const destArray = infos.destinations;
  const destination = destArray.find(
    (item) => item.name.toLowerCase() === name
  );

  return (
    <>
      <main className="w-full">
        <div className="w-full min-h-screen pt-28 px-6 pb-16 flex flex-col items-center bg-destmobile bg-no-repeat bg-cover">
          <div className="w-full flex flex-row items-center justify-center">
            <span className="font-[Barlow-Condensed] text-base leading-5 tracking-[2.7px] uppercase text-white mix-blend-normal opacity-25">
              01
            </span>
            <span className="ml-5 font-[Barlow-Condensed] text-base leading-5 tracking-[2.7px] uppercase text-white">
              Pick your destination
            </span>
          </div>
          <div className="pt-8 pb-7 w-full flex items-center justify-center">
            <img
              src={destination?.images.png}
              alt="moon"
              className="w-[170px] h-[170px]"
            />
          </div>
          <div className="w-full flex flex-row justify-around  mt-4 px-8">
            <span className="text-xs leading-4 tracking-[2.3625px] text-[#D0D6F9] font-[Barlow-Condensed] uppercase underline-hover-8px cursor-pointer">
              moon
            </span>

            <span className="text-xs leading-4 tracking-[2.3625px] text-[#D0D6F9] font-[Barlow-Condensed] uppercase underline-hover-8px cursor-pointer">
              mars
            </span>

            <span className="text-xs leading-4 tracking-[2.3625px] text-[#D0D6F9] font-[Barlow-Condensed] uppercase underline-hover-8px cursor-pointer">
              europa
            </span>
            <span className="text-xs leading-4 tracking-[2.3625px] text-[#D0D6F9] font-[Barlow-Condensed] uppercase underline-hover-8px cursor-pointer">
              titan
            </span>
          </div>
          <h1 className="text-[56px] leading-[64px] text-white text-center font-[Bellefair] mt-8 uppercase tracking-[4px] font-normal">
            {destination?.name}
          </h1>
          <p className="text-base text-[#D0D6F9] leading-6 text-center font-[Barlow] mt-2">
            {destination?.description}
          </p>
          <div className="mt-8 w-full h-[1px] bg-[#383B4B]"></div>
          <div className="w-full mt-8 flex flex-col items-center justify-center">
            <div className="w-full flex flex-col">
              <span className="text-[#D0D6F9] text-xs leading-4 text-center uppercase tracking-[2.3625px] font-[Barlow-Condensed]">
                AVG. DISTANCE
              </span>
              <span className="text-white leading-8 text-3xl uppercase text-center mt-3 font-[Bellefair] ">
                {destination?.distance}
              </span>
            </div>
            <div className="w-full flex flex-col mt-8">
              <span className="text-[#D0D6F9] text-xs leading-4 text-center uppercase tracking-[2.3625px] font-[Barlow-Condensed]">
                Est. travel time
              </span>
              <span className="text-white leading-8 text-3xl uppercase text-center mt-3 font-[Bellefair] ">
                {destination?.travel}
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Destinations;