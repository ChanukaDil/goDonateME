import React from 'react';
import Back_02 from "../../assests/images/Back_02.svg";
import NavBar from "../../components/navbar/Navbar";
import FormInput from '../../components/FormInput';
import Button from "../../components/Button";
import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import Card from './Card';

const Index = () => {
  return (
    <div>
        <br/>

        <div className='flex justify-end m-8'>
        <Button
                as={NavLink}
                to="/add-donation"
                className={twMerge(
                  "  !bg-green-800   border-green-400 border-2 border-solid  px-[30px] py-[20px]  lg:px-[15px] lg:py-[15px] hover:scale-125"
                )}
              >
                <span
                  className={twMerge(
                    "!text-green-200 text-[15px] font-[900] uppercase tracking-[2px] hover:scale-110"
                  )}
                >
                  Add donation
                </span>
              </Button>
        </div>
        <div className='flex justify-center'>
        <hr className='w-full m-4 mt-0'/>
        </div>
        <div className='grid grid-cols-4'>
        <div className='m-4'>
        <Card
        title="Card Title"
        description="This is a sample card description. You can customize it as needed."
        imageUrl="https://example.com/sample-image.jpg"
      />
        </div>
        <div>

        </div>
        </div>
        
        
      
    </div>
  );
}

export default Index;
