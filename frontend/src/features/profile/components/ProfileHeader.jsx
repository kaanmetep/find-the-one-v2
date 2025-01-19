import { useAuth } from "@hooks/useAuth";
const ProfileHeader = () => {
  const { userData } = useAuth();
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl text-gray-950">
        Hey{" "}
        {userData?.firstName.at(0).toUpperCase() + userData?.firstName.slice(1)}
        ! This is your profile page.
      </h2>
      <p className="text-gray-400">
        You can see your infos below. You're allowed to update some of them.
      </p>
    </div>
  );
};

export default ProfileHeader;
