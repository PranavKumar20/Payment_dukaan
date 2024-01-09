import { useMemo } from "react";

const StrokeBlack90 = ({
  strokeBlack90StrokeBlack9,
  strokeBlack90IconWidth,
  strokeBlack90IconAlignSelf,
  strokeBlack90IconPosition,
  strokeBlack90IconMargin,
  strokeBlack90IconRight,
  strokeBlack90IconBottom,
  strokeBlack90IconLeft,
  strokeBlack90IconMaxWidth,
  strokeBlack90IconOverflow,
  strokeBlack90IconZIndex,
}) => {
  const strokeBlack90IconStyle = useMemo(() => {
    return {
      width: strokeBlack90IconWidth,
      alignSelf: strokeBlack90IconAlignSelf,
      position: strokeBlack90IconPosition,
      margin: strokeBlack90IconMargin,
      right: strokeBlack90IconRight,
      bottom: strokeBlack90IconBottom,
      left: strokeBlack90IconLeft,
      maxWidth: strokeBlack90IconMaxWidth,
      overflow: strokeBlack90IconOverflow,
      zIndex: strokeBlack90IconZIndex,
    };
  }, [
    strokeBlack90IconWidth,
    strokeBlack90IconAlignSelf,
    strokeBlack90IconPosition,
    strokeBlack90IconMargin,
    strokeBlack90IconRight,
    strokeBlack90IconBottom,
    strokeBlack90IconLeft,
    strokeBlack90IconMaxWidth,
    strokeBlack90IconOverflow,
    strokeBlack90IconZIndex,
  ]);

  return (
    <img
      className="max-h-full w-[472px] object-cover"
      alt=""
      src={strokeBlack90StrokeBlack9}
      style={strokeBlack90IconStyle}
    />
  );
};

export default StrokeBlack90;
