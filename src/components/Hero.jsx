import React from "react";

export default function Hero() {
  return (
    <div className="w-full h-48 bg-sky-500 flex justify-center items-center sticky top-0 shadow-md">
      <div className="text-center">
        <h1 className="text-7xl font-thin text-gray-100">Event Listing</h1>
        <p className="my-3 text-xl text-gray-200">
          Add or view events in your location
        </p>
      </div>
    </div>
  );
}
