import { useAuth } from "@hooks/useAuth";
import { UserCircle } from "lucide-react"; // Kullanıcı ikonu için

const ProfileHeader = () => {
  const { userData } = useAuth();

  return (
    <div className="flex flex-col items-center space-y-4 p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center gap-4">
        <div className="p-2 bg-red-50 rounded-full">
          <UserCircle className="w-4 h-4 text-red-500" />
        </div>

        <h2 className="text-2xl font-semibold text-gray-800">
          Hey{" "}
          {userData?.firstName.at(0).toUpperCase() +
            userData?.firstName.slice(1)}
          ! 👋
        </h2>
      </div>
      <p className="text-gray-500 text-center max-w-md">
        You can see your infos below. You're allowed to update some of them.
      </p>
    </div>
  );
};

export default ProfileHeader;
