import { Outlet } from "react-router-dom";
const HomePageContent = () => {
  return (
    <div>
      <h2 className="text-xl">Discover your perfect match</h2>
      <p className="text-gray-400">Meet Like-Minded People</p>
      <Outlet />
    </div>
  );
};

export default HomePageContent;
