function TextArea({ value, onChange }) {
  return (
    <textarea
      className="shadow-lg border-2 border-rose-200 px-2 pt-2  rounded-md py-6 placeholder:text-sm w-72 
  transition-all duration-300 focus:outline-none
  focus:ring
  focus:ring-rose-200
  focus:ring-opacity-50 text-black "
      maxLength={100}
      placeholder="Start typing..."
      value={value}
      onChange={onChange}
    />
  );
}

export default TextArea;
