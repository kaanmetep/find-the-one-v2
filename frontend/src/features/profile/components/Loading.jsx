const Loading = () => {
  return (
    <div className="flex space-x-2">
      <div className="dot animate-pulse-1 w-3 h-3 bg-red-500 rounded-full"></div>
      <div className="dot animate-pulse-2 w-3 h-3 bg-red-500 rounded-full"></div>
      <div className="dot animate-pulse-3 w-3 h-3 bg-red-500 rounded-full"></div>
    </div>
  );
};

export default Loading;
