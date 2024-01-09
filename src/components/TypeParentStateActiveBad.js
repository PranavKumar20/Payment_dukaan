import { useMemo } from "react";

const TypeParentStateActiveBad = ({
  navbarIcon,
  home,
  typeParentStateActiveBadFlexShrink,
}) => {
  const typeParentStateActiveBadStyle = useMemo(() => {
    return {
      flexShrink: typeParentStateActiveBadFlexShrink,
    };
  }, [typeParentStateActiveBadFlexShrink]);

  return (
    <div
      className="rounded bg-gray w-52 flex flex-row items-start justify-start py-2 px-4 box-border gap-[12px] text-left text-sm text-black-100 font-body-2-medium"
      style={typeParentStateActiveBadStyle}
    >
      <img
        className="relative w-5 h-5 overflow-hidden shrink-0 object-cover"
        alt=""
        src={navbarIcon}
      />
      <div className="relative leading-[20px] font-medium">{home}</div>
    </div>
  );
};

export default TypeParentStateActiveBad;
