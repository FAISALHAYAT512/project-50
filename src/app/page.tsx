"use client";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-4xl font-bold text-green-700 mb-4">
        Discover Pakistan 🇵🇰
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl">
        Pakistan is blessed with breathtaking mountains, lush green valleys,
        deserts, and historical landmarks. Explore the land of diverse cultures
        and natural beauty.
      </p>
      <div className="mt-6">
        <img
          src="https://images.unsplash.com/photo-1597848212624-a19eb35fcb54"
          alt="Pakistan Mountains"
          className="rounded-xl shadow-lg w-[600px] h-[400px] object-cover"
        />
      </div>
    </div>
  );
}
