const TypeLink = ({
  controlsCheckBox,
  outlinedWhatsApp,
  text = "Sample Data",
  outlinedWhatsApp1,
  image = false,
  iconRight = false,
  twoLineText = false,
  italics = false,
  iconLeft = false,
  threeLineText = false,
  checkbox = false,
}) => {
  return (
    <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px] text-left text-xs text-primary-blue font-body-2-medium">
      {image && (
        <div className="relative w-12 h-12 hidden">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/image@2x.png"
          />
        </div>
      )}
      <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
        {checkbox && (
          <img
            className="relative w-5 h-5 object-cover hidden"
            alt=""
            src={controlsCheckBox}
          />
        )}
        <div className="shrink-0 flex flex-col items-start justify-center gap-[2px]">
          <div className="shrink-0 flex flex-row items-center justify-start gap-[8px] text-sm">
            {iconLeft && (
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                alt=""
                src={outlinedWhatsApp}
              />
            )}
            <div className="relative leading-[20px] font-medium">{text}</div>
            {iconRight && (
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover hidden"
                alt=""
                src={outlinedWhatsApp1}
              />
            )}
            {italics && (
              <i className="relative text-3xs leading-[16px] hidden text-black-12">
                Italics
              </i>
            )}
          </div>
          {twoLineText && (
            <div className="relative leading-[16px] text-black-30 hidden w-[90px]">
              +1 more
            </div>
          )}
          {threeLineText && (
            <div className="relative [text-decoration:underline] leading-[16px] font-medium hidden">
              Third Line
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TypeLink;
