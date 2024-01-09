import { useMemo } from "react";
import HowToUse from "./HowToUse";
import Type2 from "./Type2";

const BackArrowFalseHelpTrueS = ({
  dashboard,
  iconsOutlinedInfo,
  howToUse,
  backArrowFalseHelpTrueSPosition,
  backArrowFalseHelpTrueSTop,
  backArrowFalseHelpTrueSLeft,
}) => {
  const backArrowFalseHelpTrueSStyle = useMemo(() => {
    return {
      position: backArrowFalseHelpTrueSPosition,
      top: backArrowFalseHelpTrueSTop,
      left: backArrowFalseHelpTrueSLeft,
    };
  }, [
    backArrowFalseHelpTrueSPosition,
    backArrowFalseHelpTrueSTop,
    backArrowFalseHelpTrueSLeft,
  ]);

  return (
    <div
      className="bg-black-100 box-border w-[1216px] flex flex-row items-center justify-start py-3 px-8 gap-[16px] text-left text-xl text-black-12 font-body-2-medium border-b-[1px] border-solid border-black-85"
      style={backArrowFalseHelpTrueSStyle}
    >
      <div className="flex-1 shrink-0 flex flex-row items-center justify-start gap-[16px]">
        <div className="overflow-hidden flex flex-row items-center justify-start">
          <div className="relative leading-[28px] font-medium">{dashboard}</div>
        </div>
        <HowToUse
          iconsOutlinedInfo="/icons--outlined--info@2x.png"
          howToUse="How to use"
          howToUseFlexShrink="0"
        />
      </div>
      <div className="self-stretch rounded-md bg-black-95 w-[400px] flex flex-row items-center justify-start py-[9px] px-4 box-border gap-[8px] text-mini text-black-50">
        <img
          className="relative w-4 h-4 overflow-hidden shrink-0 object-cover"
          alt=""
          src="/iconssearch@2x.png"
        />
        <div className="relative leading-[22px]">
          Search features, tutorials, etc.
        </div>
      </div>
      <div className="flex-1 shrink-0 flex flex-row items-start justify-end">
        <Type2 type2FlexShrink="0" />
      </div>
    </div>
  );
};

export default BackArrowFalseHelpTrueS;
