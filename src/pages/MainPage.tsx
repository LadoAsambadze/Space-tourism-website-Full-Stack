function MainPage(): JSX.Element {
  return (
    <>
      <main className="w-full">
        <div className="w-full  min-h-screen sm:bg-mainmobile md:bg-maintablet   bg-cover bg-no-repeat   ">
          <div className="pt-28 px-6 pb-12 w-full min-h-screen flex flex-col justify-center items-center md:pt-52 md:px-40 md:pb-24 lg:flex-row lg:pt-[387px] lg:items-start lg:justify-between ">
            <div className="w-full flex justify-center items-center flex-col lg:items-start  ">
              <span
                className="text-base leading-5 text-center tracking-[2.7px] text-[#D0D6F9] font-[Barlow-Condensed]
                md:text-lg md:leading-6 md:tracking-[3.375px]
                lg:text-3xl lg:leading-9 lg:tracking-[4.725px] lg:text-left"
              >
                SO, YOU WANT TO TRAVEL TO
              </span>
              <span className="mt-4 text-white text-[80px] leading-[100px] text-center font-[Bellefair] md:text-[150px] md:leading-[150px] md:mt-6 lg:leading-[172px] lg:text-left">
                SPACE
              </span>
              <p className="font-[Barrlow] text-[#D0D6F9] text-base leading-6 text-center mt-4 md:mt-6 md:leading-7 lg:text-xl lg:leading-8 lg:text-left">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </div>
            <div className="lg:mt-10 lg:ml-[125px]">
              <div className="bg-white mt-20 flex justify-center items-center rounded-full w-[300px] h-[300px] bg-opacity-10 md:w-[330px] md:h-[330px] md:mt-10 lg:mt-0 lg:w-[450px] lg:h-[450px] ">
                <div className=" absolute rounded-full bg-white w-40 h-40 cursor-pointer flex justify-center items-center md:w-[242px] md:h-[242px]    ">
                  <span className="font-[Bellefair] tracking-[1.25px] text-xl leading-6 text-[#0B0D17] text-center">
                    EXPLORE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default MainPage;
