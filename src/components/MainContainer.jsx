import Heading from "./Heading";
import SecondaryHeading from "./SecondaryHeading";
import Learn from "./Learn";
import Safety from "./Safety";
import Support from "./Support";
function MainContainer() {
  return (
    <div>
      <Heading />
      <SecondaryHeading />
      <Learn />
      <Safety />
      <Support />
      <p className="my-16 text-center bg-rose-400">How it works</p>
    </div>
  );
}

export default MainContainer;
