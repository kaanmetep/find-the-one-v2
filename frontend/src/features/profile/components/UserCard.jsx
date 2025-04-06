const UserCard = ({ user, setUserDetails }) => {
  return (
    <li
      key={user.email}
      className="relative w-[280px] h-[320px]  rounded-lg hover:scale-105 transition-all delay-75 cursor-pointer hover:opacity-80"
      onClick={() => setUserDetails(user)}
    >
      {user.photos.map((photo, index) => (
        <img
          src={photo}
          key={photo}
          className={`absolute top-1/2 transform -translate-y-1/2 w-[65%] h-[75%] object-cover rounded-lg  `}
          style={{ right: `${index * 40}px` }}
        />
      ))}
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2  flex gap-1 items-center">
        <p className="font-semibold text-lg">
          {user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1)},
        </p>
        <p>
          {new Date().getFullYear() - new Date(user.birthdayDate).getFullYear()}
        </p>
      </div>
    </li>
  );
};

export default UserCard;
