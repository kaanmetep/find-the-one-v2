function Header({ firstName }) {
  return (
    <div>
      <p className="text-gray-600  lg:text-lg">
        Welcome{" "}
        <span className="font-semibold  text-gray-800">
          {firstName?.at(0).toUpperCase() + firstName?.slice(1)}!
        </span>
      </p>
    </div>
  );
}

export default Header;
