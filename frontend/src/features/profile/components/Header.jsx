function Header({ firstName }) {
  return (
    <div>
      <p>Welcome {firstName?.at(0).toUpperCase() + firstName?.slice(1)}!</p>
    </div>
  );
}

export default Header;
