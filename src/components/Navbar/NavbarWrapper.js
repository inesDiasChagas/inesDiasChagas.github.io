import React from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import useWindowWidth from "../../utils/hooks";

const NavbarWrapper = () => {
  const windowWidth = useWindowWidth();
  const breakpoint = 768;

  return windowWidth < breakpoint ? <MobileNavbar /> : <DesktopNavbar />;
};

export default NavbarWrapper;
