import React from "react";
import Back_02 from "../../assests/images/Back_02.svg";
import NavBar from "../../components/navbar/Navbar";
import logo from "../../assests/images/Logo.png";
import TextField from "../../components/Text_Field";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const Index = () => {
  return (
    <div>
      <div className="grid grid-cols-5 bg-slate-200">
        <div className="col-span-2 flex  justify-center items-center">
          <div className="p-20 flex  flex-col justify-center items-center text-center">
            <img src={logo} alt="logo" className="w-3/4" />
            <br />
            <br />
            <br />
            <h1 className="text-2xl font-semibold">Sign In to goDonateMe</h1>
          </div>
        </div>

        <div className="flex justify-center items-center h-screen col-span-3">
          <div className="bg-white rounded-2xl p-4 h-4/5 w-4/5 m-4">
            <div className="m-4 flex justify-end mr-10">
              <p className="text-lg tracking-wide font-normal ">
                Don't have an Account?{" "}
                <Link
                  to="/sign-up"
                  className="text-green-700 font-bold hover:text-blue-600"
                >
                  Sign Up
                </Link>
              </p>
            </div>
            <div className="m-10">
              <br />
              <p className="text-xl font-medium tracking-wide font-sans">
                Enter Your Login credentials
              </p>
            </div>

            <div className="p-10">
              <TextField
                name="email"
                type="text"
                label=""
                placeholder="Enter your email address"
              />
            </div>
            <div className="p-10">
              <TextField
                name="password"
                type="password"
                label=""
                placeholder="Enter your password"
              />
            </div>

            <div className="pt-5">
              <hr className="w-5-6 h-4 m-10 " />
            </div>

            <div className="flex justify-end mr-10">
              <Button
                as={NavLink}
                to="/"
                className={twMerge(
                  "  !bg-green-800   border-green-400 border-2 border-solid  px-[30px] py-[20px]  lg:px-[15px] lg:py-[15px] hover:scale-125"
                )}
              >
                <span
                  className={twMerge(
                    "!text-green-200 text-[15px] font-[900] uppercase tracking-[2px] hover:scale-110"
                  )}
                >
                  Sign In
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
