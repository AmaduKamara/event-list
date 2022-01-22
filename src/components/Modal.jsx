import React from "react";

export default function Modal() {
  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto w-screen flex justify-center items-center"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="fixed inset-0 bg-gray-900 bg-opacity-80 transition-opacity"
        aria-hidden="true"
      ></div>
      <div className="p-6 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-2/4">
        Modal Content
        <p>
          Majajhashjdhj MajajhashjdhjMajajhashjdhjMajajhashjdhjMajajhashjdhj
        </p>
      </div>
    </div>
  );
}
