import React from 'react';

const Card = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      {image && (
        <img src={image} alt={title} className="w-70 h-[92%] object-cover rounded-t-lg flex items-center justify-center mx-auto" />
      )}
      <div className="flex-grow">
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Card;
