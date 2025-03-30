import { NavLink } from "react-router-dom";

const NavButton = ({ name, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `w-fit h-fit bg-transparent py-1 mx-1 rounded-lg transition-all cursor-pointer duration-500 font-medium 
        hover:bg-transparent hover:text-white hover:font-semibold hover:scale-120 
        ${isActive ? "text-white font-semibold scale-110" : "text-white/70"}`
      }
    >
      {name}
    </NavLink>
  );
};

export default NavButton;
