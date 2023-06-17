import React from "react";
import Marquee from "react-fast-marquee";
import Mycompo from "./Mycompo";
import { useState, useEffect } from "react";
function Slider() {
  const text = [
    "writers",
    "tweeters",
    "podcasters",
    "discordists",
    "streamers",
    "communiteers",
    "nfteers",
  ];

  

  return (<>
    <div className="w-full h-full hidden   lg:flex items-center justify-start overflow-hidden ">
      <Marquee
        direction="up"
        className="h-full w-full flex items-center text-[100px] font-[400] leading-[100px] overflow-hidden font-mint-grotesk text-[#ddb15c]"
        speed="50"
        autoFill="true"
        pauseOnHover={false}
      >
        
          {text.map((item, index) => {
            return(
                <>
              <p>writers</p>
              <p>tweeters</p>
              <p>podcasters</p>
              <p>discordists</p>
              <p>streamers</p>
              <p>communiteers</p>
              <p>nfteers</p>
                </>
            )
            })}
      </Marquee>
    </div>
    <div className="w-full h-full  lg:hidden">
    <Marquee
        direction="left"
        className="h-full w-full flex justify-evenly text-[50px] font-[400] leading-[100px] overflow-hidden font-mint-grotesk text-[#ddb15c] ta"
        speed="120"
        autoFill="true"
      >
    
        <div>writers</div>
              <div>tweeters</div>
              <div>podcasters</div>
              <div>discordists</div>
              <div>streamers</div>
              <div>communiteers</div>
              <div>nfteers</div>
              {/* </div> */}
      </Marquee>
    </div>
    </>
  );
}

export default Slider;
