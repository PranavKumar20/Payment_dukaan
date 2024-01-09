import { useMemo } from "react";

const HowToUse = ({ iconsOutlinedInfo, howToUse, howToUseFlexShrink }) => {
  const howToUseStyle = useMemo(() => {
    return {
      flexShrink: howToUseFlexShrink,
    };
  }, [howToUseFlexShrink]);

  return (
    <div
      className="flex flex-row items-center justify-start gap-[6px] text-left text-xs text-black-30 font-body-2-medium"
      style={howToUseStyle}
    >
      <img
        className="relative w-3.5 h-3.5 overflow-hidden shrink-0 object-cover"
        alt=""
        src={iconsOutlinedInfo}
      />
      <div className="relative leading-[16px]">{howToUse}</div>
    </div>
  );
};

export default HowToUse;
