import { Button, Container, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import IconService from "../../utils/Icon";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={isScrolled ? "scrolled-header" : "transparent-header"}>
      <div className="container">
        <div className="flex justify-between items-center py-5 z-10">
          <div className="cursor-pointer">
            <img alt="Logo" src={IconService.logo} width={100} height={100} />
          </div>

          <div className="flex flex-row gap-x-10 items-center">
            <Typography
              onClick={() => handleScrollToSection("services")}
              className="cursor-pointer"
              variant="h5"
            >
              Services
            </Typography>
            <Typography  onClick={() => handleScrollToSection("about-us")} color={"#333"} className="cursor-pointer" variant="h5">
              About Us
            </Typography>

            <Typography onClick={() => handleScrollToSection("blogs")}   className="cursor-pointer" variant="h5">
              Blogs
            </Typography>
            <Typography className="cursor-pointer" variant="h5" color={"#333"}>
              Case Studies
            </Typography>

            <Button
              style={{
                borderColor: "#FA8832 !important",
                background: "#FF6400",
                color: "white",
                borderRadius: "24px",
                textTransform: "capitalize",
                width: "178px",
                height: "53px",
              }}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
