import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between">
            <img className="w-56" src="https://i.ibb.co/kDxgB5n/Logo.png"></img>
            <nav>
          <ul className="flex">
          <li className="mr-2">
         <NavLink 
              to="/"
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                }>Home</NavLink>
           </li>
         <li className="mr-2">
         <NavLink
              to="/donation"
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                }>Donation</NavLink>
         </li>
           <li className="mr-2">
           <NavLink
              to="/statistics"
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                }>Statistics</NavLink>
           </li>
     </ul>
            </nav>
        </div>
    );
};

export default NavBar;