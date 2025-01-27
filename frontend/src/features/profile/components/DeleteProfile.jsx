import { TriangleAlert } from "lucide-react";
import { X } from "lucide-react";
import { useDeleteUser } from "../services/profileService";
import { useState } from "react";
const DeleteProfile = ({ setShowProfileDeletePage }) => {
  const [password, setPassword] = useState("");
  const { mutate: deleteUser } = useDeleteUser();
  const handleDeleteUser = (e) => {
    e.preventDefault();
    deleteUser(password);
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/40 z-10 re">
      <div className="bg-red-50 pt-4 pl-3 pr-16 pb-8 rounded-md relative">
        <X
          className="absolute right-2 top-2 hover:stroke-gray-400 transition-all hover-75 cursor-pointer"
          onClick={() => setShowProfileDeletePage(false)}
        />
        <div className="flex gap-1 items-center text-gray-800 font-semibold mb-2">
          <TriangleAlert />
          <p>Warning! This action is irreversible</p>
        </div>
        <p className="text-gray-500 mb-4">
          Please enter your password to delete your account
        </p>
        <form action="" className="flex flex-col">
          <div className="flex gap-2 items-center">
            <label htmlFor="password" className="text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-1 border-2 rounded-md border-red-50 focus:ring-red-100 focus:outline-none focus:ring-offset-1 focus:ring"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="px-4 py-2 bg-gradient-to-r from-red-200 to-red-300 text-black font-semibold rounded-md hover:text-gray-50 hover:shadow-lg  transition-all delay-75 w-fit  text-xs mt-6 ml-auto"
            onClick={handleDeleteUser}
          >
            Delete my account
          </button>
        </form>
      </div>
    </div>
  );
};

export default DeleteProfile;
