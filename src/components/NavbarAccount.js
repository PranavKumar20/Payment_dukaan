import { useMemo } from "react";
import BaseNavigationBar from "./BaseNavigationBar";

const NavbarAccount = ({
  navbarIcon,
  navbarIcon1,
  showBaseNavButton,
  navbarAccountHeight,
  navbarAccountPosition,
  navbarAccountTop,
  navbarAccountLeft,
  baseNavButtonBackgroundColor,
  navbarIconOpacity,
  homeFontFamily,
  homeOpacity,
}) => {
  const navbarAccountStyle = useMemo(() => {
    return {
      height: navbarAccountHeight,
      position: navbarAccountPosition,
      top: navbarAccountTop,
      left: navbarAccountLeft,
    };
  }, [
    navbarAccountHeight,
    navbarAccountPosition,
    navbarAccountTop,
    navbarAccountLeft,
  ]);

  const typeParentStateInactiveBStyle = useMemo(() => {
    return {
      backgroundColor: baseNavButtonBackgroundColor,
    };
  }, [baseNavButtonBackgroundColor]);

  const navbarIconStyle = useMemo(() => {
    return {
      opacity: navbarIconOpacity,
    };
  }, [navbarIconOpacity]);

  const homeStyle = useMemo(() => {
    return {
      fontFamily: homeFontFamily,
      opacity: homeOpacity,
    };
  }, [homeFontFamily, homeOpacity]);

  return (
    <div
      className="h-[800px] flex flex-col items-start justify-start"
      style={navbarAccountStyle}
    >
      <BaseNavigationBar
        navbarIcon="/navbar-icon@2x.png"
        navbarIcon1="/navbar-icon@2x.png"
        navbarIcon2="/navbar-icon@2x.png"
        showBaseNavButton
        baseNavButtonVisible={false}
        baseNavButtonVisible1={false}
        navbarIconOpacity="0.8"
        baseNavButtonBackgroundColor="unset"
        navbarIconOpacity1="0.8"
        homeFontFamily="Inter"
        homeOpacity="0.8"
      />
    </div>
  );
};

export default NavbarAccount;
