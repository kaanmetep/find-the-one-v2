import { useGetUser } from "../services/profileService";
import { useAuth } from "../../../hooks/useAuth";
function Header() {
  const { isLoading, data } = useGetUser();
  const { logout } = useAuth();
  return (
    <div>
      {isLoading ? <p>Loading...</p> : <p>Welcome {data?.registerName}!</p>}
      <button className="bg-red-300 px-5 py-1" onClick={() => logout()}>
        Log out
      </button>
    </div>
  );
}

export default Header;
