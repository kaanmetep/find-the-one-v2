import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { endpoints } from "../../../../../config";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../hooks/useAuth";
const registerUser = async (userData) => {
  try {
    const response = await axios.post(endpoints.register, userData);
    return response.data;
  } catch (error) {
    console.error("Registration Error:", error.response?.data || error.message);
    throw error;
  }
};
export const checkEmail = async (email) => {
  try {
    const response = await axios.post(endpoints.checkEmail, {
      email,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const useRegisterUser = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  return useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      login(data);
      navigate("/dashboard");
    },
  });
};
export const useCheckEmail = () => {
  return useMutation({ mutationFn: checkEmail });
};
