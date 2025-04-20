import ProfileContent from "../features/profile/components/ProfileContent";
import ProfileHeader from "../features/profile/components/ProfileHeader";
import { useAuth } from "../hooks/useAuth";
import Loading from "../features/profile/components/Loading";
const DashboardProfile = () => {
  const { userData } = useAuth();
  return userData ? (
    <>
      <ProfileHeader />
      <ProfileContent />
    </>
  ) : (
    <div className="fixed inset-0 flex items-center justify-center -z-10">
      <Loading />
    </div>
  );
};

export default DashboardProfile;
