import Heading from "./Heading";
import SecondaryHeading from "./SecondaryHeading";
import Learn from "./Learn";
import Safety from "./Safety";
function MainContainer() {
  return (
    <div>
      <Heading />
      <SecondaryHeading />
      <Learn />
      <Safety />
      <p className="my-16 text-center bg-rose-400">Support</p>
      <p className="my-16 text-center bg-rose-400">How it works</p>
    </div>
  );
}

export default MainContainer;
