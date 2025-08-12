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


// const Navbar = ()=>{
//   return (
//     <nav className="bg-slate-950">
//       <div className=" mx-auto  w-[1080px] flex flex-col sm:flex-row items-center sm:justify-between px-4 py-4">
//         <div className="flex justify-center sm:justify-start w-full mb-4 sm:mb-0">
//           <a href="/">
//             <img className="size-15 object-contain" src={logo} alt="logo image" />
//           </a>
//         </div>

//         <ul className="flex  flex-wrap gap-x-6 gap-y-2 items-center  justify-center sm:justify-end w-full sm:w-auto">
//           <li className="text-white py-2 hover:text-blue-600 cursor-pointer transition-all duration-200 relative group">
//             <Link to="/">Home</Link>
//             <div className="absolute w-full h-1 bg-blue-600 bottom-[-10px] hidden group-hover:block transition-all duration-200"></div>
//           </li>
//           <li className="text-white py-7 hover:text-blue-600 cursor-pointer transition-all duration-200 relative group">
//             <Link to="/services">Services</Link>

//             <div className="absolute w-full h-1 bg-blue-600 bottom-[-10px] hidden group-hover:block transition-all duration-200"></div>
//           </li>
//           <li className="text-white py-7 hover:text-blue-600 cursor-pointer transition-all duration-200 relative group">
//             <Link to="/aboutus">AboutUs</Link>
//             <div className="absolute w-full h-1 bg-blue-600 bottom-[-10px] hidden group-hover:block transition-all duration-200"></div>
//           </li>
//           <li className="text-white py-7 hover:text-blue-600 cursor-pointer transition-all duration-200 relative group">
//             <Link to="/contactus">ContactUs</Link>
//             <div className="absolute w-full h-1 bg-blue-600 bottom-[-10px] hidden group-hover:block transition-all duration-200"></div>
//           </li>
//           <li className="text-white py-7 hover:text-blue-600 cursor-pointer transition-all duration-200 relative group">
//             <Link to="signin">SignIn</Link>
//             <div className="absolute w-full h-1 bg-blue-600 bottom-[-10px] hidden group-hover:block transition-all duration-200"></div>
//           </li>
//           <li className="text-white py-7 hover:text-blue-600 cursor-pointer transition-all duration-200 relative group">
//             <Link to="signup">SignUp</Link>
//             <div className="absolute w-full h-1 bg-blue-600 bottom-[-10px] hidden group-hover:block transition-all duration-200"></div>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;