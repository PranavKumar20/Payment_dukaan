import { useMemo } from "react";

const TypeStatus = ({
  accepted,
  ellipseDivBackgroundColor,
  acceptedFontFamily,
}) => {
  const ellipseDiv1Style = useMemo(() => {
    return {
      backgroundColor: ellipseDivBackgroundColor,
    };
  }, [ellipseDivBackgroundColor]);

  const acceptedStyle = useMemo(() => {
    return {
      fontFamily: acceptedFontFamily,
    };
  }, [acceptedFontFamily]);

  return (
    <div className="flex flex-row items-center justify-start text-left text-sm text-black-12 font-body-2-medium">
      <div className="shrink-0 flex flex-row items-center justify-start gap-[6px]">
        <div
          className="relative rounded-[50%] bg-secondary-green w-2.5 h-2.5"
          style={ellipseDiv1Style}
        />
        <div className="relative leading-[20px]" style={acceptedStyle}>
          {accepted}
        </div>
      </div>
    </div>
  );
};

export default TypeStatus;
