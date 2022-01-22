import { useState } from "react";
import EventList from "./components/EventList";
import Hero from "./components/Hero";

function App() {
  const [showEvent, setShowEvent] = useState(true);
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
      {events ? (
        <EventList events={events} handleDelete={handleDelete} />
      ) : (
        <div>
          <h3 className="text-center text-4xl">No Event available</h3>
        </div>
      )}
    </div>
  );
}

export default App;
