import Transition from "../../Hooks/Transitions/Transition";
import NavigationDesktop from "./components/NavigationDesktop/NavigationDesktop";
import NavigationMobile from "./components/NavigationMobile/NavigationMobile";

const Navigation = () => {
  return (
    <>
    <Transition />
      <NavigationDesktop />
      <NavigationMobile />
    </>
  );
};

export default Navigation;
