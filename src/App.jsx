
import './App.css'

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./pages/Home"
import Services from "./pages/Services"
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp"

import {Routes,Route} from "react-router-dom"
import Admin from './pages/Admin';
import ProtectedRoute from './components/ProtectedRoute';
import { useAuthContext } from './Context/AuthContext';

function App() {
  
const{loading}=useAuthContext()
if(loading){
  return <p className='text-center mt-10'>Loading userdata......</p>
}
  return (
    <>
    
      <div className="flex flex-col min-h-screen">
        <header className="w-full">
          <Navbar />
        </header>
        <main className="mt-[128px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/signIn" element={<SignIn />} />
            {/* Protected Route */}
            <Route path='/admin'
            element={
              <ProtectedRoute>
                <Admin/>
              </ProtectedRoute>
            }
            />
          </Routes>
        </main>
        <footer className="w-full">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App
