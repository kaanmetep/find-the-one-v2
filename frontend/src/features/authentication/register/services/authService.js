import { useMutation } from "react-query";
import axios from "axios";
import { endpoints } from "../../../../../config";
const registerUser = async (userData) => {
  try {
    const response = await axios.post(endpoints.register, userData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Registration Error:", error.response?.data || error.message);
    throw error;
  }
};
export const useRegisterUser = () => {
  return useMutation(registerUser);
};
