import axios from "axios";
import { useAuth } from "../../../hooks/useAuth";
import { endpoints } from "../../../../config";
import { useMutation, useQuery } from "react-query";

const getUser = async (userId) => {
  try {
    if (userId) {
      const response = await axios.get(`${endpoints.getUsers}/${userId}`);
      return response.data;
    }
  } catch (error) {
    console.error("Error getting user:", error.response?.data || error.message);
    throw error;
  }
};
const updateUser = async (userId, updatedData) => {
  try {
    if (userId) {
      const response = await axios.patch(
        `${endpoints.getUsers}/${userId}`,
        updatedData
      );
      return response.data;
    }
  } catch (error) {
    console.error("Error updating user:", error.message);
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
export const useUpdateUser = () => {
  const { userId } = useAuth();
  return useMutation({ mutationFn: (data) => updateUser(userId, data) });
};
