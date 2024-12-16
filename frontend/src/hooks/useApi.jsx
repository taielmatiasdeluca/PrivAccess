import { useState } from "react";
import axios from "axios";



const useApi = () => {
  
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [token, setToken] = useState(localStorage.getItem("jwt") || null);

  // Base api url
  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  });



  const setAuthHeader = ({token,user}) => {
    setToken(token);
    setUser(user);
    localStorage.setItem("jwt", token);
    localStorage.setItem("user", JSON.stringify(user));
  }

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("jwt");
    localStorage.removeItem("user"); 


  };

  // Función para verificar si el usuario está autenticado
  const isAuthenticated = () => !!token;



  return { user, token, setAuthHeader, logout, isAuthenticated, api };
};

export default useApi;
