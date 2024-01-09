import TypeDefaultSizeDefault from "./TypeDefaultSizeDefault";
import CellHeaderRow from "./CellHeaderRow";
import TypeTextRegular from "./TypeTextRegular";
import Footer1 from "./Footer1";
import Footer from "./Footer";
import CellTableRow from "./CellTableRow";
import StrokeBlack90 from "./StrokeBlack90";

const FilterFormContainer = () => {
  return (
    <div className="rounded-lg bg-black-100 shadow-[0px_2px_6px_rgba(26,_24,_30,_0.04)] w-[1152px] overflow-hidden flex flex-col items-end justify-start pt-3 px-3 pb-2 box-border text-left text-base text-black-30 font-sub-title-medium">
      <div className="flex flex-col items-end justify-start gap-[12px]">
        <div className="self-stretch shrink-0 flex flex-row items-center justify-between">
          <TypeDefaultSizeDefault
            orderIDPhoneOrAName="Order ID or transaction ID"
            boldCross="/bold--cross@2x.png"
            typeDefaultSizeDefaultWidth="248px"
            typeDefaultSizeDefaultFlexShrink="0"
          />
          <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
            <div className="rounded bg-black-100 shrink-0 hidden flex-row items-center justify-start py-1.5 px-3 gap-[6px] border-[1px] border-solid border-black-85">
              <div className="relative leading-[24px]">Filter</div>
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/outlined--filters@2x.png"
              />
            </div>
            <div className="shrink-0 flex flex-row items-center justify-end gap-[16px]">
              <div className="shrink-0 flex flex-row items-center justify-start gap-[12px]">
                <div className="rounded bg-black-100 shrink-0 flex flex-row items-center justify-start py-1.5 px-3 gap-[6px] border-[1px] border-solid border-black-85">
                  <div className="relative leading-[24px]">Sort</div>
                  <img
                    className="relative w-4 h-4 shrink-0 object-cover"
                    alt=""
                    src="/outlined--sort@2x.png"
                  />
                </div>
                <div className="rounded bg-black-100 shrink-0 hidden flex-row items-center justify-start py-1.5 px-3 gap-[6px] border-[1px] border-solid border-black-85">
                  <div className="relative leading-[24px]">Filter</div>
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/outlined--filters@2x.png"
                  />
                </div>
              </div>
              <div className="relative w-9 h-9">
                <div className="absolute top-[0px] right-[0px] rounded box-border w-9 h-9 border-[1px] border-solid border-black-85" />
                <img
                  className="absolute top-[8px] right-[8px] w-5 h-5 object-cover"
                  alt=""
                  src="/iconsdownload@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="rounded bg-black-95 w-[1128px] shrink-0 flex flex-row items-center justify-between py-2.5 px-3 box-border">
          <img
            className="relative w-5 h-5 object-cover hidden"
            alt=""
            src="/controls--check-box@2x.png"
          />
          <CellHeaderRow
            image="/image@2x.png"
            controlsCheckBox="/controls--check-box@2x.png"
            outlinedWhatsApp="/outlined--whatsapp@2x.png"
            sampleData="Order ID"
            outlinedWhatsApp1="/outlined--whatsapp@2x.png"
            triangleIcon="/triangleicon@2x.png"
            sort={false}
            cellHeaderRowBackgroundColor="unset"
            cellHeaderRowWidth="150.7px"
            cellHeaderRowFlexShrink="0"
            cellHeaderRowAlignItems="flex-start"
            textIconFlexShrink="unset"
            sampleDataTextAlign="left"
            resizableSpacerFlexShrink="unset"
          />
          <CellHeaderRow
            image="/image@2x.png"
            controlsCheckBox="/controls--check-box@2x.png"
            outlinedWhatsApp="/outlined--whatsapp@2x.png"
            sampleData="Status"
            outlinedWhatsApp1="/outlined--whatsapp@2x.png"
            triangleIcon="/triangleicon@2x.png"
            sort={false}
            cellHeaderRowBackgroundColor="unset"
            cellHeaderRowWidth="150.7px"
            cellHeaderRowFlexShrink="0"
            cellHeaderRowAlignItems="flex-start"
            textIconFlexShrink="unset"
            sampleDataTextAlign="right"
            resizableSpacerFlexShrink="unset"
          />
          <CellHeaderRow
            image="/image@2x.png"
            controlsCheckBox="/controls--check-box@2x.png"
            outlinedWhatsApp="/outlined--whatsapp@2x.png"
            sampleData="Transaction ID"
            outlinedWhatsApp1="/outlined--whatsapp@2x.png"
            triangleIcon="/triangleicon@2x.png"
            sort={false}
            cellHeaderRowBackgroundColor="unset"
            cellHeaderRowWidth="150.7px"
            cellHeaderRowFlexShrink="0"
            cellHeaderRowAlignItems="flex-start"
            textIconFlexShrink="unset"
            sampleDataTextAlign="right"
            resizableSpacerFlexShrink="unset"
          />
          <CellHeaderRow
            image="/image@2x.png"
            controlsCheckBox="/controls--check-box@2x.png"
            outlinedWhatsApp="/outlined--whatsapp@2x.png"
            sampleData="Refund date"
            outlinedWhatsApp1="/outlined--whatsapp@2x.png"
            triangleIcon="/triangleicon@2x.png"
            sort={false}
            cellHeaderRowBackgroundColor="unset"
            cellHeaderRowWidth="150.7px"
            cellHeaderRowFlexShrink="0"
            cellHeaderRowAlignItems="flex-start"
            textIconFlexShrink="unset"
            sampleDataTextAlign="left"
            resizableSpacerFlexShrink="unset"
          />
          <CellHeaderRow
            image="/image@2x.png"
            controlsCheckBox="/controls--check-box@2x.png"
            outlinedWhatsApp="/outlined--whatsapp@2x.png"
            sampleData="Order amount"
            outlinedWhatsApp1="/outlined--whatsapp@2x.png"
            triangleIcon="/triangleicon@2x.png"
            sort={false}
            cellHeaderRowBackgroundColor="unset"
            cellHeaderRowWidth="150.7px"
            cellHeaderRowFlexShrink="0"
            cellHeaderRowAlignItems="flex-end"
            textIconFlexShrink="unset"
            sampleDataTextAlign="right"
            resizableSpacerFlexShrink="unset"
          />
          <div className="w-32 overflow-hidden shrink-0 hidden flex-col items-end justify-center">
            <div className="self-stretch flex flex-row items-center justify-end gap-[4px]">
              <TypeTextRegular
                image1="/image@2x.png"
                controlsCheckBox="/controls--check-box@2x.png"
                outlinedWhatsApp="/outlined--whatsapp@2x.png"
                text="Refunds"
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
                sampleDataTextAlign="right"
                sampleDataColor="#4d4d4d"
              />
              <img
                className="relative w-2 h-2 overflow-hidden shrink-0 object-cover hidden"
                alt=""
                src="/triangleicon@2x.png"
              />
            </div>
            <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
              <div className="relative rounded-[50%] w-0 h-0" />
              <div className="relative rounded-[50%] w-0 h-0" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black-100 w-[1128px] h-12 flex flex-row items-center justify-between py-3.5 px-3 box-border relative">
        <Footer1 colorCode="#281209" />
        <Footer statusMessage="Successful" propBackgroundColor="#17b31b" />
        <CellTableRow
          image="/image@2x.png"
          controlsCheckBox="/controls--check-box@2x.png"
          outlinedWhatsApp="/outlined--whatsapp@2x.png"
          sampleData="131634495747"
          outlinedWhatsApp1="/outlined--whatsapp@2x.png"
          cellTableRowWidth="150.7px"
          cellTableRowFlexShrink="0"
          cellTableRowZIndex="2"
          cellTableRowAlignItems="flex-start"
          sampleDataFontWeight="unset"
          sampleDataColor="#4d4d4d"
          sampleDataTextAlign="left"
          resizableSpacerFlexShrink="unset"
        />
        <CellTableRow
          image="/image@2x.png"
          controlsCheckBox="/controls--check-box@2x.png"
          outlinedWhatsApp="/outlined--whatsapp@2x.png"
          sampleData="Today, 08:45 PM"
          outlinedWhatsApp1="/outlined--whatsapp@2x.png"
          cellTableRowWidth="150.7px"
          cellTableRowFlexShrink="0"
          cellTableRowZIndex="3"
          cellTableRowAlignItems="flex-start"
          sampleDataFontWeight="unset"
          sampleDataColor="#4d4d4d"
          sampleDataTextAlign="left"
          resizableSpacerFlexShrink="unset"
        />
        <CellTableRow
          image="/image@2x.png"
          controlsCheckBox="/controls--check-box@2x.png"
          outlinedWhatsApp="/outlined--whatsapp@2x.png"
          sampleData="₹1,125.00"
          outlinedWhatsApp1="/outlined--whatsapp@2x.png"
          cellTableRowWidth="150.7px"
          cellTableRowFlexShrink="0"
          cellTableRowZIndex="4"
          cellTableRowAlignItems="flex-end"
          sampleDataFontWeight="unset"
          sampleDataColor="#1a181e"
          sampleDataTextAlign="right"
          resizableSpacerFlexShrink="unset"
        />
        <div className="bg-black-100 w-32 overflow-hidden shrink-0 hidden flex-col items-end justify-center z-[5]">
          <TypeTextRegular
            image1="/image@2x.png"
            controlsCheckBox="/controls--check-box@2x.png"
            outlinedWhatsApp="/outlined--whatsapp@2x.png"
            text="₹0.00"
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
            sampleDataFontWeight="unset"
            sampleDataTextAlign="right"
            sampleDataColor="#4d4d4d"
          />
          <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
            <div className="relative rounded-[50%] w-0 h-0" />
            <div className="relative rounded-[50%] w-0 h-0" />
          </div>
        </div>
        <StrokeBlack90
          strokeBlack90StrokeBlack9="/divider@2x.png"
          strokeBlack90IconWidth="calc(100% - 24px)"
          strokeBlack90IconAlignSelf="stretch"
          strokeBlack90IconPosition="absolute"
          strokeBlack90IconMargin="0 !important"
          strokeBlack90IconRight="12px"
          strokeBlack90IconBottom="-1px"
          strokeBlack90IconLeft="12px"
          strokeBlack90IconMaxWidth="100%"
          strokeBlack90IconOverflow="hidden"
          strokeBlack90IconZIndex="6"
        />
      </div>
      <div className="bg-black-100 w-[1128px] h-12 flex flex-row items-center justify-between py-3.5 px-3 box-border relative">
        <Footer1 colorCode="#281208" />
        <Footer statusMessage="Processing" propBackgroundColor="#999" />
        <CellTableRow
          image="/image@2x.png"
          controlsCheckBox="/controls--check-box@2x.png"
          outlinedWhatsApp="/outlined--whatsapp@2x.png"
          sampleData="131634495747"
          outlinedWhatsApp1="/outlined--whatsapp@2x.png"
          cellTableRowWidth="150.7px"
          cellTableRowFlexShrink="0"
          cellTableRowZIndex="2"
          cellTableRowAlignItems="flex-start"
          sampleDataFontWeight="unset"
          sampleDataColor="#4d4d4d"
          sampleDataTextAlign="left"
          resizableSpacerFlexShrink="unset"
        />
        <CellTableRow
          image="/image@2x.png"
          controlsCheckBox="/controls--check-box@2x.png"
          outlinedWhatsApp="/outlined--whatsapp@2x.png"
          sampleData="Yesterday, 3:00 PM"
          outlinedWhatsApp1="/outlined--whatsapp@2x.png"
          cellTableRowWidth="150.7px"
          cellTableRowFlexShrink="0"
          cellTableRowZIndex="3"
          cellTableRowAlignItems="flex-start"
          sampleDataFontWeight="unset"
          sampleDataColor="#4d4d4d"
          sampleDataTextAlign="left"
          resizableSpacerFlexShrink="unset"
        />
        <CellTableRow
          image="/image@2x.png"
          controlsCheckBox="/controls--check-box@2x.png"
          outlinedWhatsApp="/outlined--whatsapp@2x.png"
          sampleData="₹1,125.00"
          outlinedWhatsApp1="/outlined--whatsapp@2x.png"
          cellTableRowWidth="150.7px"
          cellTableRowFlexShrink="0"
          cellTableRowZIndex="4"
          cellTableRowAlignItems="flex-end"
          sampleDataFontWeight="unset"
          sampleDataColor="#1a181e"
          sampleDataTextAlign="right"
          resizableSpacerFlexShrink="unset"
        />
        <div className="bg-black-100 w-32 overflow-hidden shrink-0 hidden flex-col items-end justify-center z-[5]">
          <TypeTextRegular
            image1="/image@2x.png"
            controlsCheckBox="/controls--check-box@2x.png"
            outlinedWhatsApp="/outlined--whatsapp@2x.png"
            text="₹0.00"
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
            sampleDataFontWeight="unset"
            sampleDataTextAlign="right"
            sampleDataColor="#4d4d4d"
          />
          <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
            <div className="relative rounded-[50%] w-0 h-0" />
            <div className="relative rounded-[50%] w-0 h-0" />
          </div>
        </div>
        <StrokeBlack90
          strokeBlack90StrokeBlack9="/divider@2x.png"
          strokeBlack90IconWidth="calc(100% - 24px)"
          strokeBlack90IconAlignSelf="stretch"
          strokeBlack90IconPosition="absolute"
          strokeBlack90IconMargin="0 !important"
          strokeBlack90IconRight="12px"
          strokeBlack90IconBottom="-1px"
          strokeBlack90IconLeft="12px"
          strokeBlack90IconMaxWidth="100%"
          strokeBlack90IconOverflow="hidden"
          strokeBlack90IconZIndex="6"
        />
      </div>
      <div className="bg-black-100 w-[1128px] h-12 flex flex-row items-center justify-between py-3.5 px-3 box-border relative">
        <Footer1 colorCode="#281207" />
        <Footer statusMessage="Successful" propBackgroundColor="#17b31b" />
        <CellTableRow
          image="/image@2x.png"
          controlsCheckBox="/controls--check-box@2x.png"
          outlinedWhatsApp="/outlined--whatsapp@2x.png"
          sampleData="131634495747"
          outlinedWhatsApp1="/outlined--whatsapp@2x.png"
          cellTableRowWidth="150.7px"
          cellTableRowFlexShrink="0"
          cellTableRowZIndex="2"
          cellTableRowAlignItems="flex-start"
          sampleDataFontWeight="unset"
          sampleDataColor="#4d4d4d"
          sampleDataTextAlign="left"
          resizableSpacerFlexShrink="unset"
        />
        <CellTableRow
          image="/image@2x.png"
          controlsCheckBox="/controls--check-box@2x.png"
          outlinedWhatsApp="/outlined--whatsapp@2x.png"
          sampleData="12 Jul 2023, 03:00 PM"
          outlinedWhatsApp1="/outlined--whatsapp@2x.png"
          cellTableRowWidth="150.7px"
          cellTableRowFlexShrink="0"
          cellTableRowZIndex="3"
          cellTableRowAlignItems="flex-start"
          sampleDataFontWeight="unset"
          sampleDataColor="#4d4d4d"
          sampleDataTextAlign="left"
          resizableSpacerFlexShrink="unset"
        />
        <CellTableRow
          image="/image@2x.png"
          controlsCheckBox="/controls--check-box@2x.png"
          outlinedWhatsApp="/outlined--whatsapp@2x.png"
          sampleData="₹1,125.00"
          outlinedWhatsApp1="/outlined--whatsapp@2x.png"
          cellTableRowWidth="150.7px"
          cellTableRowFlexShrink="0"
          cellTableRowZIndex="4"
          cellTableRowAlignItems="flex-end"
          sampleDataFontWeight="unset"
          sampleDataColor="#1a181e"
          sampleDataTextAlign="right"
          resizableSpacerFlexShrink="unset"
        />
        <div className="bg-black-100 w-32 overflow-hidden shrink-0 hidden flex-col items-end justify-center z-[5]">
          <TypeTextRegular
            image1="/image@2x.png"
            controlsCheckBox="/controls--check-box@2x.png"
            outlinedWhatsApp="/outlined--whatsapp@2x.png"
            text="₹0.00"
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
            sampleDataFontWeight="unset"
            sampleDataTextAlign="right"
            sampleDataColor="#4d4d4d"
          />
          <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
            <div className="relative rounded-[50%] w-0 h-0" />
            <div className="relative rounded-[50%] w-0 h-0" />
          </div>
        </div>
        <StrokeBlack90
          strokeBlack90StrokeBlack9="/divider@2x.png"
          strokeBlack90IconWidth="calc(100% - 24px)"
          strokeBlack90IconAlignSelf="stretch"
          strokeBlack90IconPosition="absolute"
          strokeBlack90IconMargin="0 !important"
          strokeBlack90IconRight="12px"
          strokeBlack90IconBottom="-1px"
          strokeBlack90IconLeft="12px"
          strokeBlack90IconMaxWidth="100%"
          strokeBlack90IconOverflow="hidden"
          strokeBlack90IconZIndex="6"
        />
      </div>
      <div className="bg-black-100 w-[1128px] h-12 flex flex-row items-center justify-between py-3.5 px-3 box-border relative">
        <Footer1 colorCode="#281206" />
        <Footer statusMessage="Successful" propBackgroundColor="#17b31b" />
        <CellTableRow
          image="/image@2x.png"
          controlsCheckBox="/controls--check-box@2x.png"
          outlinedWhatsApp="/outlined--whatsapp@2x.png"
          sampleData="131634495747"
          outlinedWhatsApp1="/outlined--whatsapp@2x.png"
          cellTableRowWidth="150.7px"
          cellTableRowFlexShrink="0"
          cellTableRowZIndex="2"
          cellTableRowAlignItems="flex-start"
          sampleDataFontWeight="unset"
          sampleDataColor="#4d4d4d"
          sampleDataTextAlign="left"
          resizableSpacerFlexShrink="unset"
        />
        <CellTableRow
          image="/image@2x.png"
          controlsCheckBox="/controls--check-box@2x.png"
          outlinedWhatsApp="/outlined--whatsapp@2x.png"
          sampleData="12 Jul 2023, 03:00 PM"
          outlinedWhatsApp1="/outlined--whatsapp@2x.png"
          cellTableRowWidth="150.7px"
          cellTableRowFlexShrink="0"
          cellTableRowZIndex="3"
          cellTableRowAlignItems="flex-start"
          sampleDataFontWeight="unset"
          sampleDataColor="#4d4d4d"
          sampleDataTextAlign="left"
          resizableSpacerFlexShrink="unset"
        />
        <CellTableRow
          image="/image@2x.png"
          controlsCheckBox="/controls--check-box@2x.png"
          outlinedWhatsApp="/outlined--whatsapp@2x.png"
          sampleData="₹1,125.00"
          outlinedWhatsApp1="/outlined--whatsapp@2x.png"
          cellTableRowWidth="150.7px"
          cellTableRowFlexShrink="0"
          cellTableRowZIndex="4"
          cellTableRowAlignItems="flex-end"
          sampleDataFontWeight="unset"
          sampleDataColor="#1a181e"
          sampleDataTextAlign="right"
          resizableSpacerFlexShrink="unset"
        />
        <div className="bg-black-100 w-32 overflow-hidden shrink-0 hidden flex-col items-end justify-center z-[5]">
          <TypeTextRegular
            image1="/image@2x.png"
            controlsCheckBox="/controls--check-box@2x.png"
            outlinedWhatsApp="/outlined--whatsapp@2x.png"
            text="₹0.00"
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
            sampleDataFontWeight="unset"
            sampleDataTextAlign="right"
            sampleDataColor="#4d4d4d"
          />
          <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
            <div className="relative rounded-[50%] w-0 h-0" />
            <div className="relative rounded-[50%] w-0 h-0" />
          </div>
        </div>
        <StrokeBlack90
          strokeBlack90StrokeBlack9="/divider@2x.png"
          strokeBlack90IconWidth="calc(100% - 24px)"
          strokeBlack90IconAlignSelf="stretch"
          strokeBlack90IconPosition="absolute"
          strokeBlack90IconMargin="0 !important"
          strokeBlack90IconRight="12px"
          strokeBlack90IconBottom="-1px"
          strokeBlack90IconLeft="12px"
          strokeBlack90IconMaxWidth="100%"
          strokeBlack90IconOverflow="hidden"
          strokeBlack90IconZIndex="6"
        />
      </div>
      <div className="bg-black-100 w-[1128px] h-12 flex flex-row items-center justify-between py-3.5 px-3 box-border relative">
        <Footer1 colorCode="#281205" />
        <Footer statusMessage="Successful" propBackgroundColor="#17b31b" />
        <CellTableRow
          image="/image@2x.png"
          controlsCheckBox="/controls--check-box@2x.png"
          outlinedWhatsApp="/outlined--whatsapp@2x.png"
          sampleData="131634495747"
          outlinedWhatsApp1="/outlined--whatsapp@2x.png"
          cellTableRowWidth="150.7px"
          cellTableRowFlexShrink="0"
          cellTableRowZIndex="2"
          cellTableRowAlignItems="flex-start"
          sampleDataFontWeight="unset"
          sampleDataColor="#4d4d4d"
          sampleDataTextAlign="left"
          resizableSpacerFlexShrink="unset"
        />
        <CellTableRow
          image="/image@2x.png"
          controlsCheckBox="/controls--check-box@2x.png"
          outlinedWhatsApp="/outlined--whatsapp@2x.png"
          sampleData="12 Jul 2023, 03:00 PM"
          outlinedWhatsApp1="/outlined--whatsapp@2x.png"
          cellTableRowWidth="150.7px"
          cellTableRowFlexShrink="0"
          cellTableRowZIndex="3"
          cellTableRowAlignItems="flex-start"
          sampleDataFontWeight="unset"
          sampleDataColor="#4d4d4d"
          sampleDataTextAlign="left"
          resizableSpacerFlexShrink="unset"
        />
        <CellTableRow
          image="/image@2x.png"
          controlsCheckBox="/controls--check-box@2x.png"
          outlinedWhatsApp="/outlined--whatsapp@2x.png"
          sampleData="₹1,125.00"
          outlinedWhatsApp1="/outlined--whatsapp@2x.png"
          cellTableRowWidth="150.7px"
          cellTableRowFlexShrink="0"
          cellTableRowZIndex="4"
          cellTableRowAlignItems="flex-end"
          sampleDataFontWeight="unset"
          sampleDataColor="#1a181e"
          sampleDataTextAlign="right"
          resizableSpacerFlexShrink="unset"
        />
        <div className="bg-black-100 w-32 overflow-hidden shrink-0 hidden flex-col items-end justify-center z-[5]">
          <TypeTextRegular
            image1="/image@2x.png"
            controlsCheckBox="/controls--check-box@2x.png"
            outlinedWhatsApp="/outlined--whatsapp@2x.png"
            text="₹0.00"
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
            sampleDataFontWeight="unset"
            sampleDataTextAlign="right"
            sampleDataColor="#4d4d4d"
          />
          <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
            <div className="relative rounded-[50%] w-0 h-0" />
            <div className="relative rounded-[50%] w-0 h-0" />
          </div>
        </div>
        <StrokeBlack90
          strokeBlack90StrokeBlack9="/divider@2x.png"
          strokeBlack90IconWidth="calc(100% - 24px)"
          strokeBlack90IconAlignSelf="stretch"
          strokeBlack90IconPosition="absolute"
          strokeBlack90IconMargin="0 !important"
          strokeBlack90IconRight="12px"
          strokeBlack90IconBottom="-1px"
          strokeBlack90IconLeft="12px"
          strokeBlack90IconMaxWidth="100%"
          strokeBlack90IconOverflow="hidden"
          strokeBlack90IconZIndex="6"
        />
      </div>
      <div className="bg-black-100 w-[1128px] h-12 flex flex-row items-center justify-between py-3.5 px-3 box-border relative">
        <Footer1 colorCode="#281204" />
        <Footer statusMessage="Successful" propBackgroundColor="#17b31b" />
        <CellTableRow
          image="/image@2x.png"
          controlsCheckBox="/controls--check-box@2x.png"
          outlinedWhatsApp="/outlined--whatsapp@2x.png"
          sampleData="131634495747"
          outlinedWhatsApp1="/outlined--whatsapp@2x.png"
          cellTableRowWidth="150.7px"
          cellTableRowFlexShrink="0"
          cellTableRowZIndex="2"
          cellTableRowAlignItems="flex-start"
          sampleDataFontWeight="unset"
          sampleDataColor="#4d4d4d"
          sampleDataTextAlign="left"
          resizableSpacerFlexShrink="unset"
        />
        <CellTableRow
          image="/image@2x.png"
          controlsCheckBox="/controls--check-box@2x.png"
          outlinedWhatsApp="/outlined--whatsapp@2x.png"
          sampleData="12 Jul 2023, 03:00 PM"
          outlinedWhatsApp1="/outlined--whatsapp@2x.png"
          cellTableRowWidth="150.7px"
          cellTableRowFlexShrink="0"
          cellTableRowZIndex="3"
          cellTableRowAlignItems="flex-start"
          sampleDataFontWeight="unset"
          sampleDataColor="#4d4d4d"
          sampleDataTextAlign="left"
          resizableSpacerFlexShrink="unset"
        />
        <CellTableRow
          image="/image@2x.png"
          controlsCheckBox="/controls--check-box@2x.png"
          outlinedWhatsApp="/outlined--whatsapp@2x.png"
          sampleData="₹1,125.00"
          outlinedWhatsApp1="/outlined--whatsapp@2x.png"
          cellTableRowWidth="150.7px"
          cellTableRowFlexShrink="0"
          cellTableRowZIndex="4"
          cellTableRowAlignItems="flex-end"
          sampleDataFontWeight="unset"
          sampleDataColor="#1a181e"
          sampleDataTextAlign="right"
          resizableSpacerFlexShrink="unset"
        />
        <div className="bg-black-100 w-32 overflow-hidden shrink-0 hidden flex-col items-end justify-center z-[5]">
          <TypeTextRegular
            image1="/image@2x.png"
            controlsCheckBox="/controls--check-box@2x.png"
            outlinedWhatsApp="/outlined--whatsapp@2x.png"
            text="₹0.00"
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
            sampleDataFontWeight="unset"
            sampleDataTextAlign="right"
            sampleDataColor="#4d4d4d"
          />
          <div className="flex flex-row items-start justify-start gap-[90px] opacity-[0] mt-[-1px]">
            <div className="relative rounded-[50%] w-0 h-0" />
            <div className="relative rounded-[50%] w-0 h-0" />
          </div>
        </div>
        <StrokeBlack90
          strokeBlack90StrokeBlack9="/divider@2x.png"
          strokeBlack90IconWidth="calc(100% - 24px)"
          strokeBlack90IconAlignSelf="stretch"
          strokeBlack90IconPosition="absolute"
          strokeBlack90IconMargin="0 !important"
          strokeBlack90IconRight="12px"
          strokeBlack90IconBottom="0px"
          strokeBlack90IconLeft="12px"
          strokeBlack90IconMaxWidth="100%"
          strokeBlack90IconOverflow="hidden"
          strokeBlack90IconZIndex="6"
        />
      </div>
    </div>
  );
};

export default FilterFormContainer;
