function TextArea() {
  return (
    <textarea
      className="shadow-lg border-2 border-rose-200 px-2 pt-2  rounded-md py-6 placeholder:text-sm w-40 md:w-80 md:focus:w-[340px]
  transition-all duration-300 focus:outline-none
  focus:ring
  focus:ring-rose-200
  focus:ring-opacity-50 text-black "
      maxLength={100}
      placeholder="Start typing..."
    ></textarea>
  );
}

export default TextArea;
