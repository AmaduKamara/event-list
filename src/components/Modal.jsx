import ReactDOM from "react-dom";
import EventForm from "./EventForm";

export default function Modal({ handleCloseModal, addEvent }) {
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
    { id: 12, type: "Education" },
    { id: 13, type: "Entertainment" },
    { id: 14, type: "Sport" },
  ];

  return ReactDOM.createPortal(
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
      <div className="py-6 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle md:w-1/3">
        <div className="border-b-2 pb-4 px-6">
          <h2 className="text-xl font-semibold">New Event</h2>
          <button
            className="absolute top-5 right-6 text-xl hover:text-red-300"
            onClick={handleCloseModal}
          >
            X
          </button>
        </div>
        <div className="my-6">
          <EventForm
            eventTypes={eventTypes}
            handleCloseModal={handleCloseModal}
            addEvent={addEvent}
          />
        </div>
      </div>
    </div>,
    document.body
  );
}
