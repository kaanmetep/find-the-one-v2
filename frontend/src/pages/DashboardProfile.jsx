import ProfileContent from "../features/profile/components/ProfileContent";
import ProfileHeader from "../features/profile/components/ProfileHeader";
import { useAuth } from "../hooks/useAuth";
const DashboardProfile = () => {
  const { userData } = useAuth();
  return (
    userData && (
      <>
        <ProfileHeader />
        <ProfileContent />
      </>
    )
  );
};

export default DashboardProfile;
