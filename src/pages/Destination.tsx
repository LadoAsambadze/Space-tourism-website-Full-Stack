function Destinations(): JSX.Element {
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
        </div>
      </main>
    </>
  );
}

export default Destinations;
