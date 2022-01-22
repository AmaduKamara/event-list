import { useState } from "react";
import EventList from "./components/EventList";
import Hero from "./components/Hero";
import Modal from "./components/Modal";

function App() {
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Amkam's Birthday",
      description:
        "Event description text that talks about the event to be taken place",
      date: "27/06/2022",
      location: "Aberdeen Beach",
      category: "Joyful",
      time: "18:00 pm",
    },
    {
      id: 2,
      title: "Bootcamp Launching",
      description:
        "Event description text that talks about the event to be taken place",
      date: "27/06/2022",
      location: "Ferry Junction",
      category: "Education",
      time: "12:00 pm",
    },
    {
      id: 3,
      title: "Bootcamp Launching",
      description:
        "Event description text that talks about the event to be taken place",
      date: "27/06/2022",
      location: "Ferry Junction",
      category: "Education",
      time: "12:00 pm",
    },
    {
      id: 4,
      title: "Bootcamp Launching",
      description:
        "Event description text that talks about the event to be taken place",
      date: "27/06/2022",
      location: "Ferry Junction",
      category: "Education",
      time: "12:00 pm",
    },
  ]);

  const handleDelete = (id) => {
    setEvents((prevEvent) => {
      return prevEvent.filter((e) => e.id !== id);
    });
    console.log(id);
  };

  return (
    <div>
      <Hero />
      {!showEvents && (
        <div className="text-center mt-10">
          <button
            type="button"
            className="text-gray-800 focus:outline-none mx-10 hover:text-sky-500 animate-bounce"
            onClick={() => setShowEvents(true)}
          >
            Show Event
          </button>
        </div>
      )}
      {showEvents && (
        <div className="text-center mt-10">
          <button
            type="button"
            className="text-gray-800 focus:outline-none mx-10 hover:text-sky-500 animate-bounce"
            onClick={() => setShowEvents(false)}
          >
            Hide Event
          </button>
        </div>
      )}
      {showEvents && events ? (
        <EventList events={events} handleDelete={handleDelete} />
      ) : (
        <div className="mt-16">
          <h3 className="text-center text-4xl text-gray-400">
            No event available
          </h3>
        </div>
      )}
      <Modal />
    </div>
  );
}

export default App;
