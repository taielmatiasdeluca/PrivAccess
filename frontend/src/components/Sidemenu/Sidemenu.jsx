
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { HiHome } from "react-icons/hi";
import { FaUserShield } from "react-icons/fa";
import { FaHouseChimneyUser } from "react-icons/fa6";
import { PiTextAlignCenterFill } from "react-icons/pi";
import { IoIosSettings } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
export function Sidemenu() {
    const navigate = useNavigate();

    const clickMenu = (where) => {
        navigate(where)
    }

  return (
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
            <Sidebar.Item onClick={()=>{clickMenu("/dashboard")}} icon={HiHome}>
                Inicio
            </Sidebar.Item>
            <Sidebar.Item onClick={()=>{clickMenu("owners")}} icon={FaHouseChimneyUser} >
                Propietarios
            </Sidebar.Item>
            <Sidebar.Item onClick={() =>{clickMenu("guards")}} icon={FaUserShield} >
                Guardias
            </Sidebar.Item>
            <Sidebar.Item onClick={ ()=>{clickMenu("admins")}} icon={HiUser}>
                Administradores
            </Sidebar.Item>
            <Sidebar.Item onClick={ ()=>{clickMenu("movements")}} icon={PiTextAlignCenterFill}>
                Movimientos
            </Sidebar.Item>
            <Sidebar.Item onClick={ ()  =>{clickMenu("settings")}} icon={IoIosSettings}>
                Ajustes
            </Sidebar.Item>
            <div>
            <Sidebar.Item onClick={ ()=>{clickMenu("/logout")}} icon={MdLogout} color="danger">
                Cerrar Sesion
            </Sidebar.Item>
            </div>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
