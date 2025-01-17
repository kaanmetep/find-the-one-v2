function Button({
  onClick,
  children,
  bgcolor = "bg-white",
  textcolor = "text-black",
  disabled = false,
  type = "button",
}) {
  return (
    <button
      onClick={onClick}
      className={`${bgcolor} ${textcolor} lg:py-2 lg:px-12 py-2 px-10 text-sm lg:text-base rounded-full tracking-wide font-bold   hover:font-extrabold hover:shadow-white transition-all delay-[50ms] bg-gradient-to-r from-rose-200 to-rose-300 `}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
