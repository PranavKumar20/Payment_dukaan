import { useMemo } from "react";
import TypeTextRegular from "./TypeTextRegular";

const CellHeaderRow = ({
  image,
  controlsCheckBox,
  outlinedWhatsApp,
  sampleData,
  outlinedWhatsApp1,
  triangleIcon,
  sort = false,
  cellHeaderRowBackgroundColor,
  cellHeaderRowWidth,
  cellHeaderRowFlexShrink,
  cellHeaderRowAlignItems,
  textIconFlexShrink,
  sampleDataTextAlign,
  resizableSpacerFlexShrink,
}) => {
  const cellHeaderRowStyle = useMemo(() => {
    return {
      backgroundColor: cellHeaderRowBackgroundColor,
      width: cellHeaderRowWidth,
      flexShrink: cellHeaderRowFlexShrink,
      alignItems: cellHeaderRowAlignItems,
    };
  }, [
    cellHeaderRowBackgroundColor,
    cellHeaderRowWidth,
    cellHeaderRowFlexShrink,
    cellHeaderRowAlignItems,
  ]);

  const textIconStyle = useMemo(() => {
    return {
      flexShrink: textIconFlexShrink,
    };
  }, [textIconFlexShrink]);

  const sampleDataStyle = useMemo(() => {
    return {
      textAlign: sampleDataTextAlign,
    };
  }, [sampleDataTextAlign]);

  const resizableSpacer1Style = useMemo(() => {
    return {
      flexShrink: resizableSpacerFlexShrink,
    };
  }, [resizableSpacerFlexShrink]);

  return (
    <div
      className="bg-black-100 overflow-hidden flex flex-col items-start justify-center"
      style={cellHeaderRowStyle}
    >
      <div
        className="shrink-0 flex flex-row items-center justify-start gap-[4px]"
        style={textIconStyle}
      >
        <TypeTextRegular
          image1="/image@2x.png"
          controlsCheckBox="/controls--check-box@2x.png"
          outlinedWhatsApp="/outlined--whatsapp@2x.png"
          text="Sample Data"
          outlinedWhatsApp1="/outlined--whatsapp@2x.png"
          infoTag={false}
          image={false}
          iconRight={false}
          twoLineText={false}
          italics={false}
          iconLeft={false}
          threeLineText={false}
          checkbox={false}
          strikeThrough={false}
          sampleDataFontWeight="500"
          sampleDataTextAlign="left"
          sampleDataColor="#4d4d4d"
        />
        {sort && (
          <img
            className="relative w-2 h-2 overflow-hidden shrink-0 object-cover hidden"
            alt=""
            src={triangleIcon}
          />
        )}
      </div>
      <div
        className="shrink-0 flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]"
        style={resizableSpacer1Style}
      >
        <div className="relative rounded-[50%] w-0 h-0" />
        <div className="relative rounded-[50%] w-0 h-0" />
      </div>
    </div>
  );
};

export default CellHeaderRow;
