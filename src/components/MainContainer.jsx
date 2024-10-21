import Heading from "./Heading";
import SecondaryHeading from "./SecondaryHeading";
function MainContainer() {
  return (
    <div>
      <Heading />
      <SecondaryHeading />
      <p className="my-8 text-center">other content</p>
    </div>
  );
}

export default MainContainer;
