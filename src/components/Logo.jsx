function Logo({ w = 160 }) {
  return (
    <img
      src="mainlogo.png"
      alt="find-the-one-logo"
      className={` filter invert brightness-0 `}
      style={{ width: `${w}px` }}
    />
  );
}

export default Logo;
