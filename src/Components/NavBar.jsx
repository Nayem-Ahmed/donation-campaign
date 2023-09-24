import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between">
            <img className="w-56" src="https://i.ibb.co/kDxgB5n/Logo.png"></img>
            <nav>
            <NavLink 
              to="/"
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                }>Home</NavLink>
            <NavLink
              to="/donation"
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                }>Donation</NavLink>
            <NavLink
              to="/statistics"
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                }>Statistics</NavLink>
            </nav>
        </div>
    );
};

export default NavBar;