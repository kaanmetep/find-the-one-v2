import Header from "../features/profile/components/Header";
import Navigation from "../features/profile/components/Navigation";
import { useGetUser } from "../features/profile/services/profileService";
import LoadingSpinner from "../components/LoadingSpinner";
function Dashboard() {
  const { isLoading, data } = useGetUser();
  console.log(data);
  return (
    <div className="flex justify-between px-4 py-8">
      {isLoading ? <LoadingSpinner /> : <Header firstName={data?.firstName} />}
      <Navigation />
    </div>
  );
}

export default Dashboard;
