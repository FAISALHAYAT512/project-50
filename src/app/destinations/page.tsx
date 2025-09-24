"use client";

export default function Destinations() {
  const places = [
    { name: "Hunza Valley", desc: "Famous for snow-capped peaks & culture." },
    { name: "Skardu", desc: "Gateway to K2 & breathtaking lakes." },
    { name: "Mohenjo-Daro", desc: "Ancient Indus Valley Civilization site." },
    { name: "Lahore Fort", desc: "Historic Mughal-era fort in Lahore." },
    { name: "Fairy Meadows", desc: "One of the world’s most beautiful places." },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-green-700 mb-6">
        Famous Destinations
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {places.map((place, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold text-gray-800">{place.name}</h2>
            <p className="text-gray-600">{place.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
