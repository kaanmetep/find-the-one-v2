import Heading from "./Heading";
import SecondaryHeading from "./SecondaryHeading";
import Learn from "./Learn";
function MainContainer() {
  return (
    <div>
      <Heading />
      <SecondaryHeading />
      <Learn />
      <p className="my-16 text-center bg-rose-400">Safety</p>
      <p className="my-16 text-center bg-rose-400">Suppot</p>
    </div>
  );
}

export default MainContainer;
