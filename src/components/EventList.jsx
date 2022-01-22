import React from "react";
import Event from "./Event";

export default function EventList({ events, handleDelete }) {
  return (
    <div className="container mx-auto bg-white p-8 my-10 shadow-lg rounded">
      <div>
        <div className="flex justify-center mb-6">
          <button className="py-3 px-8 bg-sky-500 hover:bg-sky-600 rounded shadow-lg text-sky-100 text-xl">Add Event</button>
        </div>
        <hr />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-6">
        {events ? (
          events.map((event) => (
            <Event handleDelete={handleDelete} event={event} key={event.id} />
          ))
        ) : (
          <div>
            <h3 className="text-center text-4xl">No Event available</h3>
          </div>
        )}
      </div>
    </div>
  );
}