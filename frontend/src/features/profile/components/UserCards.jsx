import UserCard from "./UserCard";
const UserCards = ({ users, setUserDetails }) => {
  return (
    <div className="mt-6">
      <ul className="flex gap-8 lg:gap-18 flex-wrap">
        {users?.map((user) => (
          <UserCard user={user} setUserDetails={setUserDetails} key={user.id} />
        ))}
      </ul>
    </div>
  );
};

export default UserCards;
