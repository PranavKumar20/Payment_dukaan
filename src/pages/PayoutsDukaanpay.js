import BackArrowFalseHelpTrueS from "../components/BackArrowFalseHelpTrueS";
import OverviewContainer from "../components/OverviewContainer";
import StateActive from "../components/StateActive";
import FilterFormContainer from "../components/FilterFormContainer";
import NavbarAccount from "../components/NavbarAccount";

const PayoutsDukaanpay = () => {
  return (
    <div className="relative bg-black-98 w-full h-[882px] text-left text-xl text-black-12 font-body-2-medium">
      <BackArrowFalseHelpTrueS
        dashboard="Payouts"
        iconsOutlinedInfo="/outlined--help@2x.png"
        howToUse="How it works"
        backArrowFalseHelpTrueSPosition="absolute"
        backArrowFalseHelpTrueSTop="0px"
        backArrowFalseHelpTrueSLeft="224px"
      />
      <div className="absolute top-[96px] left-[250px] w-[1152px] flex flex-col items-start justify-start gap-[32px]">
        <OverviewContainer />
        <div className="flex flex-col items-start justify-start gap-[24px]">
          <div className="shrink-0 flex flex-col items-start justify-start gap-[24px]">
            <div className="relative leading-[28px] font-medium">
              Transactions | This Month
            </div>
            <div className="shrink-0 flex flex-row items-start justify-start gap-[12px]">
              <StateActive
                outlinedSettings="/outlined--settings@2x.png"
                textHere="Payouts (22)"
                outlinedSettings1="/outlined--settings@2x.png"
                rightIcon={false}
                leftIcon={false}
                stateActiveBackgroundColor="#e6e6e6"
                stateActiveGap="10px"
                stateActiveFlexShrink="0"
                outlinedSettingsWidth="20px"
                outlinedSettingsHeight="20px"
                textHereColor="#808080"
                outlinedSettingsWidth1="20px"
                outlinedSettingsHeight1="20px"
              />
              <StateActive
                outlinedSettings="/outlined--settings@2x.png"
                textHere="Refunds (6)"
                outlinedSettings1="/outlined--settings@2x.png"
                rightIcon={false}
                leftIcon={false}
                stateActiveBackgroundColor="#146eb4"
                stateActiveGap="6px"
                stateActiveFlexShrink="0"
                outlinedSettingsWidth="16px"
                outlinedSettingsHeight="16px"
                textHereColor="#fff"
                outlinedSettingsWidth1="16px"
                outlinedSettingsHeight1="16px"
              />
            </div>
          </div>
          <FilterFormContainer />
        </div>
      </div>
      <NavbarAccount
        navbarIcon="/navbar-icon@2x.png"
        navbarIcon1="/navbar-icon@2x.png"
        showBaseNavButton={false}
        navbarAccountHeight="882px"
        navbarAccountPosition="absolute"
        navbarAccountTop="0px"
        navbarAccountLeft="0px"
        baseNavButtonBackgroundColor="rgba(255, 255, 255, 0.1)"
        navbarIconOpacity="unset"
        homeFontFamily="'Galano Grotesque'"
        homeOpacity="unset"
      />
    </div>
  );
};

export default PayoutsDukaanpay;
