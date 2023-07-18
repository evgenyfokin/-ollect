import axios from "axios";

import process from "../../.eslintrc.cjs";

const API_URL = 'http://localhost:3004'

export const register = (userData) => axios.post(`${API_URL}/register`, userData)
export const login = (userData) => axios.post(`${API_URL}/login`, userData)