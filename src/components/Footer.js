import { useMemo } from "react";
import TypeStatus from "./TypeStatus";

const Footer = ({ statusMessage, propBackgroundColor }) => {
  const ellipseDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div className="bg-black-100 w-[150.7px] overflow-hidden shrink-0 flex flex-col items-start justify-center z-[1]">
      <TypeStatus
        accepted="Successful"
        ellipseDivBackgroundColor="#17b31b"
        acceptedFontFamily="Inter"
      />
      <div className="flex flex-row items-start justify-start gap-[120px] opacity-[0] mt-[-1px]">
        <div className="relative rounded-[50%] w-0 h-0" />
        <div className="relative rounded-[50%] w-0 h-0" />
      </div>
    </div>
  );
};

export default Footer;
