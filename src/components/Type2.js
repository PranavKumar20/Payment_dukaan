import { useMemo } from "react";

const Type2 = ({ type2FlexShrink }) => {
  const type2Style = useMemo(() => {
    return {
      flexShrink: type2FlexShrink,
    };
  }, [type2FlexShrink]);

  return (
    <div
      className="flex flex-row items-start justify-start gap-[12px]"
      style={type2Style}
    >
      <img
        className="relative w-10 h-10 overflow-hidden shrink-0 object-cover"
        alt=""
        src="/noatification1-icon.png"
      />
      <img
        className="relative w-10 h-10 overflow-hidden shrink-0 object-cover"
        alt=""
        src="/icons--menu@2x.png"
      />
    </div>
  );
};

export default Type2;
