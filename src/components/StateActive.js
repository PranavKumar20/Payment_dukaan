import { useMemo } from "react";

const StateActive = ({
  outlinedSettings,
  textHere,
  outlinedSettings1,
  rightIcon = false,
  leftIcon = false,
  stateActiveBackgroundColor,
  stateActiveGap,
  stateActiveFlexShrink,
  outlinedSettingsWidth,
  outlinedSettingsHeight,
  textHereColor,
  outlinedSettingsWidth1,
  outlinedSettingsHeight1,
}) => {
  const stateActiveStyle = useMemo(() => {
    return {
      backgroundColor: stateActiveBackgroundColor,
      gap: stateActiveGap,
      flexShrink: stateActiveFlexShrink,
    };
  }, [stateActiveBackgroundColor, stateActiveGap, stateActiveFlexShrink]);

  const outlinedSettingsStyle = useMemo(() => {
    return {
      width: outlinedSettingsWidth,
      height: outlinedSettingsHeight,
    };
  }, [outlinedSettingsWidth, outlinedSettingsHeight]);

  const textHereStyle = useMemo(() => {
    return {
      color: textHereColor,
    };
  }, [textHereColor]);

  const outlinedSettings1Style = useMemo(() => {
    return {
      width: outlinedSettingsWidth1,
      height: outlinedSettingsHeight1,
    };
  }, [outlinedSettingsWidth1, outlinedSettingsHeight1]);

  return (
    <div
      className="rounded-21xl bg-primary-blue flex flex-row items-center justify-start py-1.5 px-4 gap-[6px] text-left text-sm text-black-100 font-sub-title-medium"
      style={stateActiveStyle}
    >
      {leftIcon && (
        <img
          className="relative w-4 h-4 overflow-hidden shrink-0 object-cover hidden"
          alt=""
          src={outlinedSettings}
          style={outlinedSettingsStyle}
        />
      )}
      <div
        className="relative leading-[20px] font-medium"
        style={textHereStyle}
      >
        {textHere}
      </div>
      {rightIcon && (
        <img
          className="relative w-4 h-4 overflow-hidden shrink-0 object-cover hidden"
          alt=""
          src={outlinedSettings1}
          style={outlinedSettings1Style}
        />
      )}
    </div>
  );
};

export default StateActive;
