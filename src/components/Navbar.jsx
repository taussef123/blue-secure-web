import { Link } from "react-router-dom";


import logo from "../assets/images/figma.png";
const Navbar = ()=>{
    return (
      <div className=" w-full bg-slate-950 text-xl flex justify-between items-center  px-6 py-5 ">
        <div className="logo text-blue-500 text-lg font-semibold">
          <img className="size-20" src={logo} alt="logo image" />
        </div>
        <nav className="">
          <ul className="flex gap-5 text-blue-300 font-medium">
            <li className="hover:text-blue-600 hover:underline">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-blue-600 cursor-pointer hover:underline">
              <Link to="/services">Services</Link>
            </li>
            <li className="hover:text-blue-600 cursor-pointer hover:underline">
              <Link to="/aboutus">AboutUs</Link>
            </li>
            <li className="hover:text-blue-600 cursor-pointer hover:underline">
              <Link to="/contactus">ContactUs</Link>
            </li>
            <li className="hover:text-blue-600 cursor-pointer hover:underline">
              <Link to="signIn">SignIn</Link>
            </li>
            <li className="hover:text-blue-600 cursor-pointer hover:underline">
              <Link to="signUp">SignUp</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
}
export default Navbar;