import React from 'react';
import Back_02 from "../../assests/images/Back_02.svg";
import NavBar from "../../components/navbar/Navbar";
import FormInput from '../../components/FormInput';

const Index = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${Back_02})`,
          backgroundSize: "cover",
        //   backgroundPosition: "center", // Center the image
        //   backgroundRepeat: "no-repeat",
        //   height: "100vh", // Set the height to 100% of the viewport height
        //   display: "flex",
        //   justifyContent: "center", // Center the content horizontally
        //   alignItems: "center", // Center the content vertically
        //   color: "white", // Set text color to be visible on the background
        }}
        className="w-m flex h-full flex-col bg-repeat p-5 pt-[80px] text-slate-900 dark:text-slate-50 sm:h-full md:h-screen"
      >
      <NavBar/>
        
      </div> 

      <div>
      <FormInput className="bg-slate-500"     placeholder="email"   name=""   value=""   label =" email" />
     
      </div>

    </div>
  );
}

export default Index;
