const ImageContainer = ({ children, htmlFor }) => {
  return (
    <label
      className="border-dashed rounded-lg cursor-pointer hover:border-red-500 transition-all delay-75 relative h-[300px] w-[250px] min-w-[240px] border-2 border-red-300 p-12"
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};

export default ImageContainer;
