import React from "react";

export default function Event({ event, handleDelete }) {
  const deleteEvent = (id) => {
    handleDelete(id);
  };
  return (
    <div className="p-4 shadow-xl mb-8 border border-t-4 rounded-lg border-t-sky-700 mx-4 h-64">
      <div className="flex justify-between">
        <p className="text-gray-400 uppercase text-xs">{event.type}</p>
        <p className="text-sky-400 uppercase">{event.date}</p>
      </div>
      <h3 className="font-semibold text-xl my-1 text-sky-500">{event.title}</h3>
      <p>{event.description}</p>
      <div className="mt-4 flex justify-between items-end">
        <div>
          <h4 className="text-lg">
            Location:{" "}
            <span className="font-semibold text-gray-500">
              {event.location}
            </span>
          </h4>
          <p className="my-1 text-gray-500">Time: {event.time}</p>
        </div>
        <button
          onClick={() => deleteEvent(event.id)}
          className="py-2 px-4 border border-red-300 rounded hover:bg-red-500 hover:text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
