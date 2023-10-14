import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Index = () => {
  const [category, setCategory] = useState([]);
  const { id } = useParams(); 
  console.log("id:", id);
  

  const fetchData = async () => {
    try {
      const res = await fetch(`http://localhost:8000/api/donation/viewById/${id}`);
      const json = await res.json();
      setCategory(json.data[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Call fetchData when the component loads or when _id changes
  useEffect(() => {
    fetchData();
  }, [id]);

  console.log("item : ", category.item);
  return (
    <div>
        <div>
            <br/><br/>
        <div className="flex p-4">
        <div style={{ flex: "4" }}>
        <img
  src={category.image}
  alt="item image"
  className='m-10 border-4 border-green-600 rounded-xl shadow-2xl'
/>
        </div>
        <div style={{ flex: "3" }} className="flex justify-center items-center">
            <div className='flex flex-col justify-center items-center'>
            <h1 className='text-black text-3xl'>{category.item}</h1><br/>
         <h1>Quantity : {category.quantity}</h1>
            </div>
         
        </div>
      </div>
        </div>

      
      <h2 className='text-black text-3xl px-20 font-semibold'>Description </h2><br/>

      <h2 className='px-25'>{category.description}</h2>
    </div>
  );
};

export default Index;
