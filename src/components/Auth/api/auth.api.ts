import axios from "axios";
import { AuthData, RegisterData } from "../types/authApi";

const api = axios.create({
  baseURL: "https://loft-taxi.glitch.me/",
});

export const fetchSignIn = async (data: AuthData) => {
  return await api.post(`/auth`, data);
};

export const fetchSignUp = async (data: RegisterData) => {
    return await api.post(`/register`, data)
}
