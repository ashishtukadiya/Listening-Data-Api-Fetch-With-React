import { Container } from "@mui/material";
import { useState } from "react";
import Sidebar from "../Siderbar/sidebar";


const MainLayout = ({ children }) => {
  const [isOpened, setOpened] = useState(true);
  const HeaderHeight = "80px";
  return (
    <>
      <div style={{ height: "100vh", display: "flex" }}>
        <Sidebar isOpened={isOpened} />
        {children}
      </div>
    </>
  );
};

export default MainLayout;
