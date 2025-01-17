import { useMutation } from "react-query";
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
      registerEmail: email,
    });
    console.log(response);
  } catch (error) {
    throw error;
  }
};
export const useRegisterUser = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  return useMutation(registerUser, {
    onSuccess: (data) => {
      login(data);
      navigate("/dashboard");
    },
  });
};
export const useCheckEmail = () => {
  return useMutation(checkEmail);
};
