import { MessageCircle } from "lucide-react";
import {
  FaInstagram,
  FaSnapchat,
  FaXTwitter,
  FaBluesky,
} from "react-icons/fa6";

const UserDetailsCardContactSection = ({ formattedUserName, userDetails }) => {
  const socialPlatforms = [
    {
      name: "Instagram",
      icon: <FaInstagram size={20} />,
      username: userDetails?.socialMedia?.instagram,
      baseUrl: "https://instagram.com/",
      gradient:
        "from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
    },
    {
      name: "Snapchat",
      icon: <FaSnapchat size={20} />,
      username: userDetails?.socialMedia?.snapchat,
      baseUrl: "https://snapchat.com/add/",
      gradient:
        "from-yellow-400 to-yellow-300 hover:from-yellow-500 hover:to-yellow-400",
    },
    {
      name: "Twitter",
      icon: <FaXTwitter size={20} />,
      username:
        userDetails?.socialMedia?.twitter || userDetails?.socialMedia?.x,
      baseUrl: "https://twitter.com/",
      gradient:
        "from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500",
    },
    {
      name: "Bluesky",
      icon: <FaBluesky size={20} />,
      username: userDetails?.socialMedia?.bluesky,
      baseUrl: "https://bsky.app/profile/",
      gradient: "from-sky-400 to-cyan-300 hover:from-sky-500 hover:to-cyan-400",
    },
  ];

  // Filter out platforms without usernames
  const availablePlatforms = socialPlatforms.filter(
    (platform) => platform.username
  );

  return (
    <div className="mt-6 sm:mt-8 rounded-lg border border-gray-200 p-4 sm:p-6 shadow-md bg-white">
      <h3 className="flex items-center gap-2 text-lg sm:text-xl font-semibold mb-4 text-red-600 border-b-2 border-red-200 pb-2">
        <MessageCircle size={20} className="text-red-500" />
        Connect with {formattedUserName}
      </h3>

      {availablePlatforms.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {availablePlatforms.map((platform, index) => (
            <a
              key={index}
              href={
                platform.username
                  ? `${platform.baseUrl}${platform.username}`
                  : "#"
              }
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 p-4 bg-gradient-to-r ${platform.gradient} rounded-lg text-white font-medium transition-all duration-300 hover:shadow-lg`}
            >
              <div className="flex items-center justify-center bg-white bg-opacity-20 p-2 rounded-full">
                {platform.icon}
              </div>
              <div className="flex flex-col">
                <span className="font-bold">{platform.name}</span>
                {platform.username && (
                  <span className="text-sm opacity-90">
                    @{platform.username}
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="text-gray-500 text-center py-6 border border-dashed border-gray-300 rounded-lg">
          <p className="mb-2">No social media profiles available</p>
          <MessageCircle size={24} className="mx-auto text-gray-400" />
        </div>
      )}
    </div>
  );
};

export default UserDetailsCardContactSection;
