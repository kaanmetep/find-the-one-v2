import { useAuth } from "@hooks/useAuth";
import Loading from "../components/Loading";
import { useState, useEffect } from "react";
import { useGetUsers } from "../services/profileService";
import UserCards from "./UserCards";
const HomePageContent = () => {
  const { data, isPending: gettingUsers } = useGetUsers();
  const [users, setUsers] = useState(null);
  console.log(users);
  useEffect(() => {
    if (data) {
      setUsers(data.result);
    }
  }, [data]);
  return (
    <div>
      <h2 className="text-2xl">Discover your perfect match</h2>
      <p className="text-gray-400">Meet Like-Minded People</p>
      {users ? (
        <UserCards users={users} />
      ) : (
        <div className="fixed inset-0 flex items-center justify-center -z-10">
          <Loading />
        </div>
      )}
    </div>
  );
};

export default HomePageContent;
