"use client";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Contact Us</h1>
      <form className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <label className="block mb-4">
          <span className="text-gray-700">Your Name</span>
          <input
            type="text"
            className="mt-1 block w-full border rounded-md p-2"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Your Email</span>
          <input
            type="email"
            className="mt-1 block w-full border rounded-md p-2"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Message</span>
          <textarea
            className="mt-1 block w-full border rounded-md p-2"
            rows={4}
          ></textarea>
        </label>
        <button
          type="submit"
          className="w-full bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-900 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
}
