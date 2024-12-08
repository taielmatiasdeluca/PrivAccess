
import { Link, useNavigate } from "react-router-dom";
import useApi from "../../hooks/useApi";

export const Logout = () => {
  const navigate = useNavigate();
  const { logout } = useApi();
  logout();
  window.location.href = '/login';
};
