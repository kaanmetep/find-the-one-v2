import NavItem from "./NavItem";
import Logo from "./Logo";
function HomeNav() {
  return (
    <nav>
      <ul className="flex flex-col-reverse sm:flex-row sm:gap-6 items-center">
        <div className="flex lg:gap-6 gap-4 text-white  tracking-wide font-semibold text-[8px] md:text-sm lg:text-base items-center">
          <NavItem to="learn">Learn</NavItem>
          <NavItem to="safety">Safety</NavItem>
          <NavItem to="support">Support</NavItem>
          <NavItem to="howitworks">How it works</NavItem>
        </div>
        <div className="flex-col-reverse">
          <Logo w={80} />
        </div>
      </ul>
    </nav>
  );
}

export default HomeNav;
