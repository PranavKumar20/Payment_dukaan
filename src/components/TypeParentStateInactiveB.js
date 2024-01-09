import { useMemo } from "react";

const TypeParentStateInactiveB = ({
  navbarIcon,
  home,
  typeParentStateInactiveBFlexShrink,
  navbarIconOpacity,
}) => {
  const typeParentStateInactiveBStyle = useMemo(() => {
    return {
      flexShrink: typeParentStateInactiveBFlexShrink,
    };
  }, [typeParentStateInactiveBFlexShrink]);

  const navbarIconStyle = useMemo(() => {
    return {
      opacity: navbarIconOpacity,
    };
  }, [navbarIconOpacity]);

  return (
    <div
      className="rounded w-52 flex flex-row items-start justify-start py-2 px-4 box-border gap-[12px] text-left text-sm text-black-100 font-sub-title-medium"
      style={typeParentStateInactiveBStyle}
    >
      <img
        className="relative w-5 h-5 overflow-hidden shrink-0 object-cover"
        alt=""
        src={navbarIcon}
        style={navbarIconStyle}
      />
      <div className="relative leading-[20px] font-medium opacity-[0.8]">
        {home}
      </div>
    </div>
  );
};

export default TypeParentStateInactiveB;
