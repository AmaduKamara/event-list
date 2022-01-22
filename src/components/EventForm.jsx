import React from 'react';

export default function EventForm({eventTypes, handleCloseModal}) {
  return (
    <form className="px-6">
      <label className="mb-4 block">
        <span className="block mb-1 text-lg">Event title</span>
        <input
          type="text"
          placeholder="Event title"
          className="p-3 w-full focus:outline-none border focus:outline-sky-500 rounded-md"
          required
        />
      </label>
      <label className="mb-4 block">
        <span className="block mb-1 text-lg">Location</span>
        <input
          type="text"
          placeholder="Event location"
          className="p-3 w-full focus:outline-none border focus:outline-sky-500 rounded-md"
          required
        />
      </label>
      <div className="my-4 flex">
        <label className="mb-4 block w-1/2 mr-2">
          <span className="block mb-1 text-lg">Date</span>
          <input
            type="date"
            className="p-3 w-full focus:outline-none border focus:outline-sky-500 rounded-md"
            required
          />
        </label>
        <label className="mb-4 block w-1/2 ml-2">
          <span className="block mb-1 text-lg">Time</span>
          <input
            type="time"
            className="p-3 w-full focus:outline-none border focus:outline-sky-500 rounded-md"
            required
          />
        </label>
      </div>
      <label className="mb-4 block">
        <span className="block mb-1 text-lg">Category</span>
        <select className="p-3 w-full focus:outline-none border focus:outline-sky-500 rounded-md">
          {eventTypes.map((event) => (
            <option value={event.type} key={event.id}>
              {event.type}
            </option>
          ))}
        </select>
      </label>
      <div className="flex justify-end mt-5">
        <div>
          <button
            onClick={handleCloseModal}
            className="py-3 px-10 border border-sky-500 rounded-md mr-2 hover:bg-red-300 hover:border-red-300 hover:text-white"
          >
            Cancel
          </button>
          <button className="py-3 px-10 border border-sky-500 rounded-md ml-2 bg-sky-500 text-white hover:bg-sky-600">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
