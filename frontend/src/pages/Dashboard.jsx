import Header from "../features/profile/components/Header";
import Navigation from "../features/profile/components/Navigation";
import { useGetUser } from "../features/profile/services/profileService";
import LoadingSpinner from "../components/LoadingSpinner";
import HomePageContent from "../features/profile/components/HomePageContent";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";
function Dashboard() {
  const { isPending, data } = useGetUser();
  const { userData, setUserData } = useAuth();
  const location = useLocation();
  useEffect(() => {
    if (data) {
      setUserData(data);
    }
  }, [data, setUserData]);
  return (
    <>
      <div className="flex justify-between px-8 py-4 border-b bg-gradient-to-r from-red-100 to-red-200 font-medium">
        {isPending ? (
          <LoadingSpinner />
        ) : (
          <Header firstName={userData?.firstName} />
        )}
        <Navigation />
      </div>
      <div className="px-4 py-4">
        {location.pathname === "/dashboard" ? <HomePageContent /> : <Outlet />}
      </div>
    </>
  );
}

export default Dashboard;
