import React, { useState } from "react";

const sliderData = [
  {
    url: "https://images.unsplash.com/photo-1694984121999-36d30b67f391?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1682685797140-c17807f8f217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1663258626183-4250bc9e95e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
];

const Carousel = () => {
 
  return (
    <div className="max-w-[1240px]  mx-auto px-4 py-16 relative flex justify-center items-center gap-2  ">
      {sliderData.map((item, index) => (
        <div>
          <img className=" w-full max-h-[1200px] rounded-md h-full object-cover " src={item.url} alt="/" />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
