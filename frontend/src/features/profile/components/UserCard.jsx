import { getMatchColor } from "../../../lib/utils";
const UserCard = ({ user, setUserDetails }) => {
  const matchPercentage = Math.floor(Math.random() * (100 - 21) + 20);

  const matchColors = getMatchColor(matchPercentage);

  return (
    <li
      key={user.email}
      className="relative hover:scale-105 transition-all duration-300 cursor-pointer group flex flex-col items-center"
      onClick={() => setUserDetails({ userInfo: user, matchPercentage })}
    >
      <div className="relative w-64 h-96">
        <div
          className={`absolute top-4 -left-6 ${matchColors.bg} rounded-lg shadow-lg px-3 py-1 z-40 flex items-center border ${matchColors.border}`}
        >
          <div className="flex flex-col items-center">
            <span className="font-bold text-white text-xl tracking-wide">
              {matchPercentage}%
            </span>
            <span
              className={`text-xs ${matchColors.text} uppercase tracking-wider font-medium`}
            >
              match
            </span>
          </div>
        </div>

        {[...user.photos].reverse().map((photo, index) => (
          <img
            src={photo}
            key={photo}
            className={`absolute top-1/2 transform -translate-y-1/2 w-4/5 h-4/5 object-cover rounded-lg shadow-md border-2 border-white group-hover:brightness-105 transition-all`}
            style={{
              left: `${index * 40}px`,
              zIndex: user.photos.length - index,
            }}
          />
        ))}
      </div>
      <div className="w-fit bg-white px-4 py-2 rounded-full shadow-lg flex gap-2 items-center border -mt-5">
        <p className="font-bold text-lg text-gray-800">
          {user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1)},
        </p>
        <p className="text-gray-600">
          {new Date().getFullYear() - new Date(user.birthdayDate).getFullYear()}
        </p>
      </div>
    </li>
  );
};

export default UserCard;
