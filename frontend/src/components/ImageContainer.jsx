const ImageContainer = ({ children, htmlFor }) => {
  return (
    <label
      className="cursor-pointer relative h-[300px] w-[270px] min-w-[240px] border-2 border-red-300 rounded-md p-12"
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};

export default ImageContainer;
