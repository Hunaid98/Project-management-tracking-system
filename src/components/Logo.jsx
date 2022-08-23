import React from "react";
import logo from "../assets/logo.png";

const Logo = (props) => {
  const { w, h } = props;
  return (
    <div className="text-[#05843E] font-bold">
      Project Management
      {/* <img width={w} h={h} src={logo} alt="" /> */}
    </div>
  );
};

export default Logo;
