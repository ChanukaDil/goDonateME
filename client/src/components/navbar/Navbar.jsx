import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assests/images/Logo.png";
import Button from "../Button";
import { NavLink , useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const Navbar = () => {
  const email = sessionStorage.uEmail;
  const navigate = useNavigate();
  const handleLogout = () => {
    // Show a confirmation dialog
    const confirmed = window.confirm("Are you sure you want to log out?");
  
    if (confirmed) {
      // User confirmed the logout, remove the email from session storage
      sessionStorage.removeItem("uEmail");
      window.location.href = '/'; 
      // Add any other logout actions here, e.g., redirect to the login page
    }
  };
  

  useEffect(() => {
    
  });

  return (
    <nav className="bg-transpaerent p-4 fixed top-0 left-0 right-0 z-10 bg-white ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-semibold">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="space-x-4">
          <Link
            to="/"
            className="text-black font-bold hover:scale-125 hover:text-green-500 p-6"
          >
            Home
          </Link>
          <Link
            to="/donation"
            className="text-black font-bold hover:scale-125 hover:text-green-500 p-6"
          >
            Donations
          </Link>

          <Link
            to="/how-it-works"
            className="text-black font-bold hover:scale-125 hover:text-green-500 p-6"
          >
            How it works
          </Link>

          <Link
            to="/blog"
            className="text-black font-bold hover:scale-125 hover:text-green-500 p-6"
          >
            Need donations
          </Link>
          <Link
            to="/account"
            className="text-black font-bold hover:scale-125 hover:text-green-500 p-6"
          >
            My account
          </Link>
        </div>
        <div className="space-x-4">
          {email ? (
            <Button
              as={NavLink}
              onClick = {handleLogout}
              className={twMerge(
                "  !bg-green-500   border-green-400 border-2 border-solid  px-[30px] py-[20px]  lg:px-[15px] lg:py-[10px] hover:scale-125"
              )}
            >
              <span
                className={twMerge(
                  "!text-green-200 text-[10px] font-[900] uppercase tracking-[2px] hover:scale-110"
                )}
              >
                Log Out
              </span>
            </Button>
          ) : (
            <div>
              <Link
                to="/sign-in"
                className="text-green-500 font-bold hover:scale-125 hover:text-green-500"
              >
                Login
              </Link>
              &nbsp;
              <Button
                as={NavLink}
                to="/sign-up"
                className={twMerge(
                  "  !bg-green-500   border-green-400 border-2 border-solid  px-[30px] py-[20px]  lg:px-[15px] lg:py-[10px] hover:scale-125"
                )}
              >
                <span
                  className={twMerge(
                    "!text-green-200 text-[10px] font-[900] uppercase tracking-[2px] hover:scale-110"
                  )}
                >
                  Sign Up
                </span>
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
