import React, { useState } from "react";
import { v4 as uuid } from "uuid";

export default function EventForm({ eventTypes, handleCloseModal, addEvent }) {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      id: uuid(),
      title: title,
      location: location,
      date: date,
      time: time,
      type: type,
      description: description,
    };
    console.log(newEvent);
    addEvent(newEvent);
    setTitle("");
    setLocation("");
    setDate("");
    setTime("");
    setType("");
    handleCloseModal();
    setDescription("");
  };

  return (
    <form className="px-6" onSubmit={handleSubmit}>
      <label className="mb-4 block">
        <span className="block mb-1 text-lg">Event title</span>
        <input
          type="text"
          placeholder="Event title"
          className="p-3 w-full focus:outline-none border focus:outline-sky-500 rounded-md"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label className="mb-4 block">
        <span className="block mb-1 text-lg">Location</span>
        <input
          type="text"
          placeholder="Event location"
          className="p-3 w-full focus:outline-none border focus:outline-sky-500 rounded-md"
          required
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>
      <div className="my-4 flex">
        <label className="mb-4 block w-1/2 mr-2">
          <span className="block mb-1 text-lg">Date</span>
          <input
            type="date"
            className="p-3 w-full focus:outline-none border focus:outline-sky-500 rounded-md"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <label className="mb-4 block w-1/2 ml-2">
          <span className="block mb-1 text-lg">Time</span>
          <input
            type="time"
            className="p-3 w-full focus:outline-none border focus:outline-sky-500 rounded-md"
            required
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </label>
      </div>
      <label className="mb-4 block">
        <span className="block mb-1 text-lg">Event Type</span>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="p-3 w-full focus:outline-none border focus:outline-sky-500 rounded-md"
        >
          {eventTypes.map((event) => (
            <option value={event.type} key={event.id}>
              {event.type}
            </option>
          ))}
        </select>
      </label>
      <label className="mb-4 block">
        <span className="block mb-1 text-lg">Description</span>
        <textarea
          cols="30"
          rows="2"
          maxLength={150}
          placeholder="The event is mainly to ......."
          className="p-3 w-full focus:outline-none border focus:outline-sky-500 rounded-md"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
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
