import UserCard from "./UserCard";
const UserCards = ({ users, setUserDetails }) => {
  return (
    <div className="mt-6 ">
      <ul className="flex gap-12 lg:gap-24  flex-wrap items-center justify-center ">
        {users?.map((user) => (
          <UserCard user={user} setUserDetails={setUserDetails} key={user.id} />
        ))}
      </ul>
    </div>
  );
};

export default UserCards;
