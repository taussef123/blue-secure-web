import { Link } from "react-router-dom";


import logo from "../assets/images/newb.jpg";
const Navbar = ()=>{
    return (
     <div className=" w-full bg-slate-950 text-xl  px-6 py-5 ">
        <div className="flex items-center flex-col sm:flex-row gap-60"> 
          <div className="logo text-blue-500 text-lg font-semibold">
            <img className="size-20" src={logo} alt="logo image" />
          </div>
          <nav className="">
            <ul className="flex   flex-col sm:flex-row gap-10 text-blue-300 font-medium text-sm sm:text-lg">
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
                <Link to="signin">SignIn</Link>
              </li>
              <li className="hover:text-blue-600 cursor-pointer hover:underline">
                <Link to="signup">SignUp</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
}
export default Navbar;