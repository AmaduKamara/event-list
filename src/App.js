import { useState } from "react";
import EventList from "./components/EventList";
import Hero from "./components/Hero";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents((prevEnent) => {
      return [...prevEnent, event];
    });
  };

  const handleDelete = (id) => {
    setEvents((prevEvent) => {
      return prevEvent.filter((e) => e.id !== id);
    });
    console.log(id);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <div>
      <Hero />
      {showModal && (
        <Modal addEvent={addEvent} handleCloseModal={handleCloseModal} />
      )}
      {!showEvents && (
        <div className="text-center mt-10">
          <button
            type="button"
            className="text-gray-800 focus:outline-none mx-10 hover:text-sky-500 animate-bounce"
            onClick={() => setShowEvents(true)}
          >
            Show Events
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
            Hide Events
          </button>
        </div>
      )}
      {showEvents && events ? (
        <EventList
          handleShowModal={handleShowModal}
          events={events}
          handleDelete={handleDelete}
        />
      ) : (
        <div className="mt-16">
          <h3 className="text-center text-lg md:text-4xl text-gray-400">
            No event available
          </h3>
        </div>
      )}
    </div>
  );
}

export default App;
