import React from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import useWindowWidth from "../../utils/hooks";

const NavbarWrapper = ({ className }) => {
  const windowWidth = useWindowWidth();
  const breakpoint = 768;

  return windowWidth < breakpoint ? (
    <MobileNavbar />
  ) : (
    <DesktopNavbar className={className} />
  );
};

export default NavbarWrapper;
