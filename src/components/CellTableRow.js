import { useMemo } from "react";
import TypeTextRegular from "./TypeTextRegular";

const CellTableRow = ({
  image,
  controlsCheckBox,
  outlinedWhatsApp,
  sampleData,
  outlinedWhatsApp1,
  cellTableRowWidth,
  cellTableRowFlexShrink,
  cellTableRowZIndex,
  cellTableRowAlignItems,
  sampleDataFontWeight,
  sampleDataColor,
  sampleDataTextAlign,
  resizableSpacerFlexShrink,
}) => {
  const cellTableRowStyle = useMemo(() => {
    return {
      width: cellTableRowWidth,
      flexShrink: cellTableRowFlexShrink,
      zIndex: cellTableRowZIndex,
      alignItems: cellTableRowAlignItems,
    };
  }, [
    cellTableRowWidth,
    cellTableRowFlexShrink,
    cellTableRowZIndex,
    cellTableRowAlignItems,
  ]);

  const sampleDataStyle = useMemo(() => {
    return {
      fontWeight: sampleDataFontWeight,
      color: sampleDataColor,
      textAlign: sampleDataTextAlign,
    };
  }, [sampleDataFontWeight, sampleDataColor, sampleDataTextAlign]);

  const resizableSpacerStyle = useMemo(() => {
    return {
      flexShrink: resizableSpacerFlexShrink,
    };
  }, [resizableSpacerFlexShrink]);

  return (
    <div
      className="bg-black-100 overflow-hidden flex flex-col items-start justify-center"
      style={cellTableRowStyle}
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
      <div
        className="shrink-0 flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]"
        style={resizableSpacerStyle}
      >
        <div className="relative rounded-[50%] w-0 h-0" />
        <div className="relative rounded-[50%] w-0 h-0" />
      </div>
    </div>
  );
};

export default CellTableRow;
