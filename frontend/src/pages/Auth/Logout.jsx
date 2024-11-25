
import { Link, useNavigate } from "react-router-dom";


export const Logout = () => {
  console.log('Holaa')
  const navigate = useNavigate();
  navigate('/');
};
