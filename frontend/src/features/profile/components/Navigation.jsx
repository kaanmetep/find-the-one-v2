import { NavLink } from "react-router-dom";
import { useAuth } from "@hooks/useAuth";

const Navigation = () => {
  const { logout } = useAuth();

  return (
    <nav className="bg-white shadow-sm rounded-lg px-4 py-2">
      <ul className="flex items-center gap-6">
        <li>
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-200 ${
                isActive
                  ? "bg-red-50 text-red-500"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="profile"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-200 ${
                isActive
                  ? "bg-red-50 text-red-500"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`
            }
          >
            Profile
          </NavLink>
        </li>
        <li className="ml-auto">
          <button
            onClick={() => logout()}
            className="px-4 py-2 rounded-md text-sm font-medium text-white bg-red-500 hover:bg-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Log out
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
