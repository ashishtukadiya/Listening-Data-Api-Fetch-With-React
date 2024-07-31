import { Card, Typography } from "@mui/material";
import React from "react";
import IconService from "../../utils/Icon";

const Services = () => {
  const services = [
    {
      id: "customers",
      name: "Audit & Account",
      image: IconService.account,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      id: "agents",
      name: "Budget & Projections",
      image: IconService.budget,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      id: "booths",
      name: "Payroll & Bookkeepin",
      image: IconService.payroll,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      id: "booths",
      name: "Software Training &",
      image: IconService.software,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      id: "booths",
      name: "Tax planning & Retur",
      image: IconService.textplanning,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      id: "booths",
      name: "Management Informatis",
      image: IconService.managementInfo,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
  ];
  return (
    <div className="container relative">
      <div className="float-end">
        <img src={IconService.service} className="" />
      </div>

      <div  id='services' className="absolute flex flex-col gap-10 top-[25%]  ">
        <Typography className="!font-bold  !text-[27px] " >Services</Typography>
        <div className="learnmore ">
          <div className="flex justify-center items-center ">
            <div className="learnmorecard grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xl:gap-[4.5rem] lg:gap-[4rem] md:gap-[3.5rem]">
              {services.map((item, id) => (
                <div
                  key={id}
                  className="px-[1.25rem] pt-10 pb-[23px] flex flex-col justify-between gap-y-[3.5rem]"
                >
                  <div className="learn-card-div flex flex-col  justify-center items-center gap-y-[1.8rem] ">
                    <img
                      width={121}
                      height={121}
                      src={item.image}
                      alt="card1icon"
                      loading="lazy"
                    />
                    <Typography variant="subtitle1" className="text-center !font-bold  !text-[22px]">
                      {item.name}
                    </Typography>
                    <div className="text-center">
                      <Typography variant="h6" className="">
                        {item.description}
                      </Typography>
                    </div>
                  </div>
                  <div
                    className="flex gap-2 cursor-pointer justify-end items-end text-base font-semibold"
                    //   onMouseEnter={() => handleMouseEnter(item?.id)}
                    //   onMouseLeave={handleMouseLeave}
                    //   onClick={() => {
                    //     router.push({
                    //       pathname: "/our-services/about-us",
                    //       query: { key: item?.id },
                    //     });
                    //   }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
