import React from "react";
import Back_02 from "../../assests/images/Back_02.svg";
import NavBar from "../../components/navbar/Navbar";
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";
import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import TextField from "../../components/Text_Field";
import donation from "../../assests/images/don.png";
import ImageUpload from "../../components/Image_Upload";

const Index = () => {
  const handleDonation = () =>{

   
  }
  return (
    <div>
      <br />

      <div className="grid bg-gray-100 m-10 rounded-2xl md:h-screen p-10 md:grid-cols-6 shadow-2xl ">
        <div className="grid col-span-2 justify-center items-center">
        <h1 className="block text-gray-950 text-3xl font-semibold mb-4 tracking-wider">Add new Donation</h1>
  
          <img src={donation} alt="donation" className="w-3/4" />
        </div>
        <div className="col-span-4">
          
          <TextField name="lname" type="text" label="Item" placeholder="Item" />
          <br />
          <TextField
            name="quantity"
            type="number"
            label="Quantity"
            placeholder="Quantity"
          />
          <br />
          <TextField
            name="description"
            type="text"
            label="Description"
            placeholder="Description"
          />
          <br/>
          <TextField
            name="number"
            type="number"
            label="Mobile Number"
            placeholder="Mobile Number"
          />
          <div className="grid md:grid-cols-3">
            <div className="col-span-2">
              <ImageUpload />
            </div>
            <div className="flex justify-center items-center">
              <div className="flex justify-end items-center">
               
                  <Button
                  as={NavLink}
                  onClick = {handleDonation}
                  className={twMerge(
                    "  !bg-blue-700   border-green-400 border-2 border-solid  px-[30px] py-[20px]  lg:px-[15px] lg:py-[15px] hover:scale-125"
                  )}
                >
                  <span
                    className={twMerge(
                      "!text-green-200 text-[15px] font-[900] uppercase tracking-[2px] hover:scale-110"
                    )}
                  >
                    Add Donation
                  </span>
                </Button>

  
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
