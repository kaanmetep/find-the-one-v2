import { useEffect } from "react";
import { useOutsideClick } from "../../../hooks/useOutsideClick";
import { X } from "lucide-react";
import UserDetailsCardContactSection from "./UserDetailsCardContactSection.jsx";
import { getMatchColor } from "../../../lib/utils.js";
const UserDetailsCard = ({ userDetails, setUserDetails }) => {
  const { userInfo, matchPercentage } = userDetails;
  useOutsideClick(setUserDetails, null);
  const formattedUserName =
    userInfo.firstName.at(0).toUpperCase() + userInfo.firstName.slice(1);
  const userAge =
    new Date().getFullYear() - new Date(userInfo.birthdayDate).getFullYear();
  const matchColors = getMatchColor(matchPercentage);

  // Disable background scroll on mount
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center overflow-auto p-2 sm:p-4">
      <div className="relative bg-white shadow-2xl rounded-lg w-full max-w-4xl overflow-hidden popup  ">
        {/* Close button - daha büyük ve daha görünür yapıldı */}
        <button
          className="absolute right-2 top-2 sm:right-4 sm:top-4 bg-red-50 hover:bg-red-100 text-red-500 rounded-full p-3 transition-all duration-300 z-20 shadow-md"
          onClick={() => setUserDetails(null)}
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Header section */}
        <div className="bg-gradient-to-r from-red-300 to-red-400 py-4 sm:py-6 px-4 sm:px-6 md:px-10">
          <h2 className="text-center font-bold text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2 text-white">
            Get to know {formattedUserName}
          </h2>
          <p className="text-center text-white/90">
            You have{" "}
            <span className="font-bold text-white text-xl lg:text-2xl">
              {matchPercentage}%
            </span>{" "}
            match rate!
          </p>
        </div>

        {/* Content section */}
        <div className="p-4 sm:p-6 md:p-10 overflow-y-auto max-h-[70vh] sm:max-h-[80vh]">
          <div className="grid grid-cols-2  md:grid-cols-3  gap-2 sm:gap-3 mb-6 sm:mb-8">
            {userInfo.photos.map((photo) => (
              <div
                key={photo}
                className="aspect-square overflow-hidden rounded-md shadow-md hover:shadow-lg border-2 border-transparent hover:border-red-400 transition-all duration-300"
              >
                <img
                  src={photo}
                  alt={`Photo of ${formattedUserName}`}
                  className="w-full h-full object-cover transition-all duration-300 hover:scale-105 hover:opacity-80"
                />
              </div>
            ))}
          </div>

          <div className="text-center mb-4 sm:mb-6 bg-red-50 rounded-lg p-3 sm:p-4 border-l-4 border-red-400">
            <p className="text-base sm:text-lg text-gray-800">
              <span className="font-medium">{formattedUserName}</span> is{" "}
              <span className="font-bold text-lg sm:text-xl text-red-600">
                {userAge}
              </span>{" "}
              years old
            </p>
          </div>
          <div className="text-center mb-4 sm:mb-8 bg-red-50 rounded-lg p-3 sm:p-4 border-l-4 border-red-400">
            <p className="text-base sm:text-lg text-gray-800">
              <span className="font-medium">{formattedUserName}</span> is{" "}
              {/^[aeiouAEIOU]/.test(userInfo.occupation) ? "an" : "a"}{" "}
              <span className="font-bold text-lg sm:text-xl text-red-600">
                {userInfo?.occupation}
              </span>
            </p>
          </div>
          <div className="text-center mb-4 sm:mb-8 bg-red-50 rounded-lg p-3 sm:p-4 border-l-4 border-red-400">
            <p className="text-base sm:text-lg text-gray-800">
              <span className="font-medium">{formattedUserName}</span> is
              looking for a{" "}
              <span className="font-bold text-lg sm:text-xl text-red-600">
                {userInfo?.preferences?.relationshipType === "doesntMatter"
                  ? "any kind of"
                  : userInfo?.preferences?.relationshipType}{" "}
                relationship
              </span>
            </p>
          </div>

          {/* Footer with match percentage */}
          <div
            className={`mt-6 sm:mt-8 text-center bg-gray-50 p-4 sm:p-6 rounded-lg border ${matchColors.border}`}
          >
            <div className="mb-3">
              <div className="text-center mb-2 font-bold text-base sm:text-lg text-gray-800">
                Match Rate: {matchPercentage}%
              </div>
              <div className="bg-gray-200 rounded-full h-3 sm:h-4 w-full">
                <div
                  className={`bg-gradient-to-r ${matchColors.bg} h-3 sm:h-4 rounded-full`}
                  style={{ width: `${matchPercentage}%` }}
                ></div>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Based on your preferences and interests, you have a{" "}
              <span className={`font-bold text-red-600`}>
                {matchPercentage}%
              </span>{" "}
              match with {formattedUserName}
            </p>
          </div>
          {/* Contact Section */}
          <UserDetailsCardContactSection
            userInfo={userInfo}
            formattedUserName={formattedUserName}
          />
        </div>
      </div>
    </div>
  );
};

export default UserDetailsCard;
