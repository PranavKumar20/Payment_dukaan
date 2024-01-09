import { useMemo } from "react";
import BaseSearchField from "./BaseSearchField";

const TypeDefaultSizeDefault = ({
  orderIDPhoneOrAName,
  boldCross,
  typeDefaultSizeDefaultWidth,
  typeDefaultSizeDefaultFlexShrink,
}) => {
  const typeDefaultSizeDefaultStyle = useMemo(() => {
    return {
      width: typeDefaultSizeDefaultWidth,
      flexShrink: typeDefaultSizeDefaultFlexShrink,
    };
  }, [typeDefaultSizeDefaultWidth, typeDefaultSizeDefaultFlexShrink]);

  return (
    <div
      className="w-[344px] flex flex-row items-start justify-start"
      style={typeDefaultSizeDefaultStyle}
    >
      <BaseSearchField
        orderIDPhoneOrAName="Search by order ID..."
        boldCross="/bold--cross@2x.png"
        showX={false}
        icon
        baseSearchFieldFlexShrink="0"
      />
    </div>
  );
};

export default TypeDefaultSizeDefault;
