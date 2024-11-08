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
  pl = 4,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`shadow-lg border-2 border-rose-200 px-2 rounded-md py-1 placeholder:text-sm w-80 md:focus:w-[340px]
        transition-all duration-300 focus:outline-none
        focus:ring
        focus:ring-rose-200
        focus:ring-opacity-50 text-black`}
      style={{
        paddingLeft: `${pl}px`,
        paddingTop: `${py}px`,
        paddingBottom: `${py}px`,
      }}
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
