import Loading from "../components/Loading";
import { useState, useEffect } from "react";
import { useGetUsers } from "../services/profileService";
import UserCards from "./UserCards";
import UserDetailsCard from "./UserDetailsCard";

const HomePageContent = () => {
  const { data, isPending: gettingUsers } = useGetUsers();
  const [users, setUsers] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    if (data) {
      setUsers(data.result);
    }
  }, [data]);

  return (
    <div className="container mx-auto px-4 py-4 ">
      {userDetails && (
        <UserDetailsCard
          userDetails={userDetails}
          setUserDetails={setUserDetails}
        />
      )}

      <div className="flex flex-col items-center ">
        <h2 className="text-4xl font-extrabold text-black mb-3 relative  w-fit text-center">
          <span
            className="absolute h-2 md:h-3 w-1/2 hidden md:block lg:w-full bg-red-300 bottom-1 left-0 -z-10 rounded-md"
            aria-hidden="true"
          ></span>
          Discover Your Perfect Match
        </h2>

        <p className="text-gray-500 text-lg max-w-2xl mx-auto text-center">
          Connect with like-minded people who share your interests and passions.
          Your perfect match could be just{" "}
          <span className="text-black font-semibold">one click away!</span>
        </p>
      </div>

      {users ? (
        <UserCards users={users} setUserDetails={setUserDetails} />
      ) : (
        <div className="fixed inset-0 flex items-center justify-center -z-10">
          <Loading />
        </div>
      )}
    </div>
  );
};

export default HomePageContent;
