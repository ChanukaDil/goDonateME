import React from "react";

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      {imageUrl && (
        <img src={imageUrl} alt={title} className="w-full h-32 object-cover rounded-t-lg" />
      )}
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;