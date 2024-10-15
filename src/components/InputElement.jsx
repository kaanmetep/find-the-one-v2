function InputElement({
  type = "text",
  py = 1,
  placeholder = "",
  disabled = false,
  value = "",
  onChange,
  name = "",
  accept = "",
  maxLength = 36,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`shadow-lg border-2 border-slate-400 px-2 rounded-md py-${py} placeholder:text-xs w-40 md:w-80 md:focus:w-[340px]
        transition-all duration-300 focus:outline-none
        focus:ring
        focus:ring-slate-400
        focus:ring-opacity-50`}
      disabled={disabled}
      value={value}
      onChange={onChange}
      name={name}
      accept={accept}
      maxLength={maxLength}
    />
  );
}

export default InputElement;
