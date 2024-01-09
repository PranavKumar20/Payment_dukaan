import { useMemo } from "react";

const WeightRegularTypeProcessin = ({
  processing,
  weightRegularTypeProcessiFlexShrink,
  ellipseDivBackgroundColor,
}) => {
  const weightRegularTypeProcessinStyle = useMemo(() => {
    return {
      flexShrink: weightRegularTypeProcessiFlexShrink,
    };
  }, [weightRegularTypeProcessiFlexShrink]);

  const ellipseDivStyle = useMemo(() => {
    return {
      backgroundColor: ellipseDivBackgroundColor,
    };
  }, [ellipseDivBackgroundColor]);

  return (
    <div
      className="flex flex-row items-center justify-start gap-[6px] text-left text-sm text-black-12 font-sub-title-medium"
      style={weightRegularTypeProcessinStyle}
    >
      <div
        className="relative rounded-[50%] bg-black-60 w-2.5 h-2.5"
        style={ellipseDivStyle}
      />
      <div className="relative leading-[20px]">{processing}</div>
    </div>
  );
};

export default WeightRegularTypeProcessin;
