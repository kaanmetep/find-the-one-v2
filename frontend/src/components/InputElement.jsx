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
      className={`shadow-md border-2 ${
        disabled
          ? "border-gray-200 bg-gray-50 cursor-not-allowed text-gray-500"
          : "border-rose-200 hover:border-rose-300 bg-white text-gray-800"
      } 
        px-3 rounded-lg py-2 placeholder:text-gray-400 placeholder:text-sm 
        transition-all duration-300 focus:outline-none
        focus:ring-2
        focus:ring-rose-300
        focus:border-rose-400
        focus:shadow-lg`}
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
