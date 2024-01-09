import TypeLink from "./TypeLink";

const Footer1 = ({ colorCode }) => {
  return (
    <div className="bg-black-100 w-[150.7px] overflow-hidden shrink-0 flex flex-col items-start justify-center z-[0]">
      <TypeLink
        controlsCheckBox="/controls--check-box@2x.png"
        outlinedWhatsApp="/outlined--whatsapp@2x.png"
        text="#281204"
        outlinedWhatsApp1="/outlined--whatsapp@2x.png"
        image={false}
        iconRight={false}
        twoLineText={false}
        italics={false}
        iconLeft={false}
        threeLineText={false}
        checkbox={false}
      />
      <div className="flex flex-row items-start justify-start gap-[376px] opacity-[0] mt-[-1px]">
        <div className="relative rounded-[50%] w-0 h-0" />
        <div className="relative rounded-[50%] w-0 h-0" />
      </div>
    </div>
  );
};

export default Footer1;
