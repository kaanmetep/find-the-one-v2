import axios from "axios";
import { useAuth } from "../../../hooks/useAuth";
import { endpoints } from "../../../../config";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const getUser = async (userId) => {
  try {
    if (userId) {
      const response = await axios.get(`${endpoints.getUsers}/${userId}`);
      return response.data;
    }
    throw new Error("No user Id provided.");
  } catch (error) {
    console.error("Error getting user:", error.response?.data || error.message);
    throw error;
  }
};
const getUsers = async (filterParams = {}) => {
  try {
    const response = await axios.get(`${endpoints.getUsers}`, {
      params: filterParams,
    });
    return response.data;
  } catch (err) {
    console.log(err.message);
    throw err;
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
    throw new Error("No user Id provided.");
  } catch (error) {
    console.error("Error updating user:", error.message);
    throw error;
  }
};
const deleteUser = async (userId, password) => {
  try {
    if (userId) {
      const response = await axios.delete(`${endpoints.getUsers}/${userId}`, {
        data: { password },
      });
      return response.data;
    }
    throw new Error("No user Id provided.");
  } catch (error) {
    console.error("Error deleting user:", error.message);
    throw error;
  }
};
export const useGetUser = () => {
  const { userId } = useAuth();
  return useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(userId),
    staleTime: Infinity,
  });
};
export const useGetUsers = (filterParams = {}) => {
  const hasFilters = Object.keys(filterParams).length > 0 && !filterParams.skip;

  return useQuery({
    queryKey: ["users", filterParams],
    queryFn: () => getUsers(filterParams),
    enabled: hasFilters, // Only run query when filters are available
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  const { userId } = useAuth();
  return useMutation({
    mutationFn: (data) => updateUser(userId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};
export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  const { userId, logout } = useAuth();
  return useMutation({
    mutationFn: (data) => deleteUser(userId, data),
    onSuccess: () => {
      logout();
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};
