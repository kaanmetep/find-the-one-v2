import axios from "axios";
import { useAuth } from "../../../hooks/useAuth";
import { endpoints } from "../../../../config";
import { useQuery } from "react-query";

const getUser = async (userId) => {
  try {
    if (userId) {
      const response = await axios.get(`${endpoints.getUsers}/${userId}`);
      return response.data;
    }
  } catch (err) {
    console.error("Error getting user:", error.response?.data || error.message);
    throw error;
  }
};

export const useGetUser = () => {
  const { userId, setUserData } = useAuth();
  return useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(userId),
    onSuccess: (data) => {
      setUserData(data);
    },
  });
};
