import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Middle() {
  const goToBtn = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className=" ">
      <div className=" text-white absolute inset-x-0 left-[140px]  bottom-[130px] w-[360px]">
        <div className="px-[8px] py-[14px] text-[32px] font-display">
        <p><span className=" font-display2 font-bold">Atom Space.</span></p>
        </div>
        <a className="" href="https://calendly.com/shryasbhurat">
           <div className=" bg-white text-black rounded-sm h-[35px] text-center content-end p-[5px]  font-display3 text-[15px]">
               Connect with us
           </div>
        </a>
      </div>
      <div className="flex items-center justify-center  absolute inset-x-0  bottom-0 text-center bg-moonbg bg-cover ">
        <span className=" hover:cursor-pointer ">
          <ExpandMoreIcon
            className="icon"
            style={{ color: "#666666", fontSize: "48px" }}
            onClick={goToBtn}
          ></ExpandMoreIcon>
        </span>
      </div>
    </div>
  );
}

export default Middle;
