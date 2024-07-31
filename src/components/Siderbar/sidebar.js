import React from "react";
import { NavLink, useHistory } from "react-router-dom";

const Sidebar = ({ isOpened }) => {
  const sidebarWidth = 300;
//   const history = useHistory(); // Import useHistory hook

//   const selected = history.location.pathname === "/logout"; // Use useHistory hook to access location

  const handleLogout = () => {
    // Handle logout logic here
    // For example:
    // history.push("/logout"); // Redirect to logout page
  };

  const pages = [
    { title: "Home", path: "/" },
    { title: "About", path: "/book" },
  ];

  return (
    <div
      className={`bg-primary-background text-white font-bold text-base font-sans h-screen overflow-y-auto flex flex-col
      sm:text-[14px] md:text-[16px] lg:text-[16px] xl:text-[16px] 2xl:text-[16px] `}
      style={{
        width: sidebarWidth,
        minWidth: sidebarWidth,
      }}
    >
      <div className="flex justify-center items-center p-5 mb-7">
        {/* <Image src={IconService.} alt="project" /> */}
      </div>
      <div
        className="pl-4 flex-1"
        style={{
          marginBottom: "48px",
        }}
      >
        {" "}
        {pages.map((page, index) => (
          <div key={index} className="mb-3">
            <NavLink to={page.path}>{page.title}</NavLink>
          </div>
        ))}
      </div>

      <div
        className={`flex items-center py-3 gap-5 fixed bottom-0 cursor-pointer px-8 bg-primary-background text-base 
      sm:text-[14px] md:text-[14px] lg:text-[16px] xl:text-[16px] 2xl:text-[18px] lg:w-[280px] xl:w-[280px]`}
        style={{ width: sidebarWidth }}
        onClick={handleLogout}
      >
        {/* <Image
        src={IconService.Logout}
        alt="logout"
        className={selected ? "invert" : "invert-0"}
      /> */}
        <span className="text-black" >Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;
