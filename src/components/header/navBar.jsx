import { NavLink } from "react-router-dom"


export const NavBar = () => {
    return (
        <nav className="sapce-x-5">
<NavLink to={"/"} className={" text-black hover:bg-blue-600 rounded-full px-5 py-2 text-xl"} >Home</NavLink>
<NavLink to={"/Login"} className={" text-black hover:bg-blue-600 rounded-full px-5 py-2 text-xl"}>Login</NavLink>
<NavLink to={"/SignUp"} className={" text-black hover:bg-blue-600 rounded-full px-5 py-2 text-xl"}>SignUp</NavLink>

        </nav>
    )
}