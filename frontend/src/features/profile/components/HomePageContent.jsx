import Loading from "../components/Loading";
import { useState, useEffect } from "react";
import { useGetUsers } from "../services/profileService";
import UserCards from "./UserCards";
import UserDetailsCard from "./UserDetailsCard";
import { Search } from "lucide-react";

const HomePageContent = ({ userData }) => {
  const [users, setUsers] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  // Only create filterParams if userData and preferences exist
  const filterParams = userData?.preferences
    ? {
        genderInterest: userData.preferences.genderInterest,
        minAge: userData.preferences.minAge,
        maxAge: userData.preferences.maxAge,
        relationshipType: userData.preferences.relationshipType,
      }
    : null;

  // Skip query if filterParams is not yet available
  const { data, isPending: gettingUsers } = useGetUsers(
    filterParams || { skip: true },
    userData?._id,
    userData?.personelQuestions,
    userData?.relationshipQuestions
  );

  useEffect(() => {
    if (data) {
      setUsers(data.result);
    }
  }, [data]);
  console.log("userssss", users);
  // True if we're loading OR filters aren't ready yet
  const isLoading = gettingUsers || !filterParams;

  return (
    <div className="container mx-auto px-4 py-4 ">
      {userDetails && (
        <UserDetailsCard
          userDetails={userDetails}
          setUserDetails={setUserDetails}
        />
      )}

      <div className="flex flex-col items-center ">
        <h2 className="text-4xl font-extrabold text-black mb-3 relative w-fit text-center">
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

      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center -z-10">
          <Loading />
        </div>
      ) : users ? (
        users.length > 0 ? (
          <UserCards users={users} setUserDetails={setUserDetails} />
        ) : (
          <div className="fixed inset-0 flex flex-col items-center justify-center -z-10">
            <Search className="w-16 h-16 text-gray-400 mb-4" />
            <h3 className="text-xl font-medium text-gray-200 mb-2">
              No Matches Found
            </h3>
            <p className="text-gray-400 mb-6">
              Change your preferences to see more matches (age, relationship
              type, or interested gender)
            </p>
            <a
              href="https://findtheoneai.vercel.app/dashboard/profile"
              className="px-4 py-2 bg-red-600 text-white rounded-lg"
            >
              Update Preferences
            </a>
          </div>
        )
      ) : (
        <div className="fixed inset-0 flex flex-col items-center justify-center -z-10">
          <h3 className="text-xl font-medium text-gray-200 mb-2">
            Error Loading Users
          </h3>
          <p className="text-gray-400 mb-6">
            We couldn't fetch user data. Please try refreshing the page.
          </p>
        </div>
      )}
    </div>
  );
};

export default HomePageContent;
