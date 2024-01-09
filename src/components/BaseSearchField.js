import { useMemo } from "react";

const BaseSearchField = ({
  orderIDPhoneOrAName,
  boldCross,
  showX = false,
  icon = true,
  baseSearchFieldFlexShrink,
}) => {
  const baseSearchFieldStyle = useMemo(() => {
    return {
      flexShrink: baseSearchFieldFlexShrink,
    };
  }, [baseSearchFieldFlexShrink]);

  return (
    <div
      className="rounded bg-black-100 box-border flex flex-row items-center justify-start py-2.5 px-4 gap-[8px] text-left text-sm text-black-60 font-body-2-medium flex-1 border-[1px] border-solid border-black-85"
      style={baseSearchFieldStyle}
    >
      {icon && (
        <img
          className="relative w-3.5 h-3.5 overflow-hidden shrink-0 object-cover"
          alt=""
          src="/bold--search@2x.png"
        />
      )}
      <div className="flex-1 relative leading-[20px]">
        {orderIDPhoneOrAName}
      </div>
      {showX && (
        <img
          className="relative w-4 h-4 overflow-hidden shrink-0 object-cover hidden"
          alt=""
          src={boldCross}
        />
      )}
    </div>
  );
};

export default BaseSearchField;
