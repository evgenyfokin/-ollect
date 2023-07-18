import axios from "axios";

const API_URL = import.meta.env.VITE_APP_API_URL
console.log(import.meta.env.VITE_APP_API_URL)

export const register = (userData) => axios.post(`${API_URL}/register`, userData)
export const login = (userData) => axios.post(`${API_URL}/login`, userData)