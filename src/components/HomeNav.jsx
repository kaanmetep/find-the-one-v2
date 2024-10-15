import NavItem from "./NavItem";
import Logo from "./Logo";
function HomeNav() {
  return (
    <nav>
      <ul className="flex lg:gap-6 gap-4 text-white  tracking-wide font-semibold text-[8px] md:text-sm lg:text-base items-center">
        <NavItem to="learn">Learn</NavItem>
        <NavItem to="safety">Safety</NavItem>
        <NavItem to="support">Support</NavItem>
        <NavItem to="howitworks">How it works</NavItem>
        <Logo />
      </ul>
    </nav>
  );
}

export default HomeNav;
