import React from 'react';
import Back_02 from "../../assests/images/Back_02.svg";
import NavBar from "../../components/navbar/Navbar";
import FormInput from '../../components/FormInput';
import Button from "../../components/Button";
import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import TextField from '../../components/Text_Field';
import donation from "../../assests/images/don.png";
import ImageUpload from '../../components/Image_Upload';

const Index = () => {
  return (
    <div>
        <br/>

        
        <div className='grid bg-gray-100 m-10 rounded-2xl h-screen p-10 grid-cols-6 shadow-2xl'>
            <div className='flex col-span-2 justify-center items-center'>
                <img src={donation} alt="donation" className='w-3/4'/>
            </div>
            <div className='col-span-4'>
            <h1 className='text-xl font-bold tracking-wider'>Need Donation</h1>
        <br/>
        <TextField
              name="lname"
              type="text"
              label="Item"
              placeholder="Item"
        />
        <br/>
         <TextField
              name="quantity"
              type="number"
              label="Quantity"
              placeholder="Quantity"
        />
        <br/>
         <TextField
              name="description"
              type="text"
              label="Description"
              placeholder="Description"
        />
        <ImageUpload/>
        <div className='flex justify-end'>
        <Button
              as={NavLink}
              to="/"
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
  );
}

export default Index;
