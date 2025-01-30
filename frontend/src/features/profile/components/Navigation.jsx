import { NavLink } from "react-router-dom";
import { useAuth } from "@hooks/useAuth";
const Navigation = () => {
  const { logout } = useAuth();
  return (
    <nav>
      <ul className="flex items-center gap-4 text-xs lg:text-base">
        <li>
          <NavLink to="/dashboard">Home</NavLink>
        </li>
        <li>
          <NavLink to="profile">Profile</NavLink>
        </li>
        <li>
          <button
            className="bg-red-300 px-5 py-1 rounded-lg"
            onClick={() => logout()}
          >
            Log out
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
