function InputElement({
  type = "text",
  py = 1,
  placeholder = "",
  disabled = false,
  onChange,
  name = "",
  accept = "",
  maxLength = 36,
  pl = 4,
  w = 288,
  value = "",
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`shadow-lg border-2 border-rose-200 px-2 rounded-md py-1 placeholder:text-sm 
        transition-all duration-300 focus:outline-none
        focus:ring
        focus:ring-rose-200
        focus:ring-opacity-50 text-black`}
      style={{
        paddingLeft: `${pl}px`,
        paddingTop: `${py}px`,
        paddingBottom: `${py}px`,
        width: `${w}px`,
      }}
      disabled={disabled}
      onChange={onChange}
      name={name}
      accept={accept}
      maxLength={maxLength}
      value={value}
    />
  );
}

export default InputElement;
