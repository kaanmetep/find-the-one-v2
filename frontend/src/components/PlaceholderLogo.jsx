function PlaceholderLogo({ children }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="absolute w-6 top-1/2 -translate-y-1/2 ml-2"
    >
      {children}
    </svg>
  );
}

export default PlaceholderLogo;
