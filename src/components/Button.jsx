function Button({
  onClick,
  children,
  bgcolor = "bg-white",
  textcolor = "text-black",
  disabled = false,
}) {
  return (
    <button
      onClick={onClick}
      className={`${bgcolor} ${textcolor} lg:py-2 lg:px-12 py-1 px-8 text-sm lg:text-base rounded-lg tracking-wide font-bold   hover:font-extrabold hover:shadow-white transition-all delay-[50ms] bg-gradient-to-r from-stone-100 to-stone-500 `}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
