function Header({ firstName }) {
  return (
    <div>
      <p className="text-gray-600 text-xs lg:text-base">
        Welcome{" "}
        <span className="font-semibold text-sm lg:text-lg text-gray-800">
          {firstName?.at(0).toUpperCase() + firstName?.slice(1)}!
        </span>
      </p>
    </div>
  );
}

export default Header;
