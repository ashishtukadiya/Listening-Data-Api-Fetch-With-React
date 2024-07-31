import React from "react";
import IconService from "../../utils/Icon";
import { Button, Typography } from "@mui/material";

const AboutUs = () => {
  return (
    <div id="about-us"  className="container pt-[100px] ">
      <div>
      {/* <div className="float-end  ">
          <img src={IconService.aboutRectangel} className="w-sc" />
        </div> */}
        <div className="float-end  ">
          <img src={IconService.aboutusImg} />
        </div>
        <div className="h-full flex flex-col gap-[22px] pt-[200px] items-center">
          <div className="flex flex-col gap-5">
            <Typography  className="!font-bold text-center !text-[27px]">
              About US
            </Typography>
            <Typography className="">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur
              sadipscing elitr
            </Typography>
           
              <Button
                style={{
                  borderColor: "#FA8832 !important",
                  background: "#FF6400",
                  color: "white",
                  borderRadius: "20px",
                  textTransform: "capitalize",
                  width: "100px",
                }}
              >
                For More
              </Button>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
