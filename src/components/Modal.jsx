import React from "react";

export default function Modal({ handleCloseModal }) {
  const eventTypes = [
    { id: 1, type: "Birthday" },
    { id: 2, type: "Wedding" },
    { id: 3, type: "Birthday" },
    { id: 4, type: "Graduation" },
    { id: 5, type: "Workshop" },
    { id: 6, type: "Festival" },
    { id: 7, type: "Fieldtrip" },
    { id: 8, type: "Fiesta" },
    { id: 9, type: "Outing" },
    { id: 10, type: "Hiking" },
    { id: 11, type: "Swimming" },
  ];
  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto w-screen flex justify-center items-center"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-900 bg-opacity-80 transition-opacity"
        aria-hidden="true"
      ></div>
      <div className="py-6 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-1/3">
        <div className="border-b-2 pb-4 px-6">
          <h2 className="text-xl font-semibold">Modal Title</h2>
          <button
            className="absolute top-5 right-6 text-xl hover:text-red-300"
            onClick={handleCloseModal}
          >
            X
          </button>
        </div>
        <div className="my-6">
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
        </div>
      </div>
    </div>
  );
}
