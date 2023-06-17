import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Slider from "./Slider";
// import Slider from "./Slider";
function Page1() {
  return (
    <>
      <div className="w-full h-fit">
        <div className="mt-10 w-full">
          <p className="font-mint-grotesk text-white text-start ml-20 lg:ml-0 lg:text-center text-base">
            COMMUNITIES COME IN ALL SHAPES AND SIZES
          </p>
        </div>
        {/* <div className="lg:mt-10 mt-0 "> */}
          <div className="lg:mt-10 mt-0   flex w-full h-full  flex-col   lg:flex-row">
            <div className="lg:flex-[35%] flex-[10%] h-full w-full flex  justify-end ml-20 lg:ml-0 ">
              <div className="lg:w-[70%] w-full    ">
                <p className="text-[#ddb15c]  mt-5 pr-5 contrast-[90%] brightness-[120%] bg-transparent font-mint-grotesk text-[100px] mb-0 pb-0 lg:leading-[115px] flex text-end">
                  Built for
                </p>
                <p className="hidden lg:block text-white text-lg mt-8 text-end font-mint-grotesk-light pr-5 w-[95%]">
                  You’ve built a thriving community. Pallet helps you support
                  their careers, land great new roles,
                  <br /> and get paid, all in one product.
                </p>
                <div className="w-full  justify-end hidden lg:flex">
                  <button className="mt-8 text-white mr-10 flex items-center text-lg font-mint-grotesk transition-colors duration-450 cubic-bezier-custom ease-out hover:text-[#ddb15c]">
                    Request Access <AiOutlineArrowRight className="ml-3 " />{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-blue-400 lg:w-[65%] h-full">
             <div className="h-screen w-full  flex items-center justify-center  ">
                <Slider/>
             </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
}

export default Page1;
