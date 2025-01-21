import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { endpoints } from "../../../../../config";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../hooks/useAuth";

const loginUser = async (userData) => {
  try {
    const response = await axios.post(endpoints.login, userData);
    return response.data;
  } catch (error) {
    console.error("Registration Error:", error.response?.data || error.message);
    throw error;
  }
};
export const useLoginUser = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      login(data);
      navigate("/dashboard");
    },
  });
};
