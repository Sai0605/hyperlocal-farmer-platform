export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-gray-50">
      {/* Navbar */}
      <header className="bg-white shadow-sm px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-green-700">
          FarmDirect
        </h1>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Get Started
        </button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-24 px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Fresh from local farms
        </h2>
        <p className="max-w-xl text-gray-600 mb-8">
          Buy fresh produce directly from nearby farmers.
          No middlemen. Fair prices. Fast delivery.
        </p>

        <div className="flex gap-4">
          <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
            I’m a Consumer
          </button>
          <button className="border border-green-600 text-green-700 px-6 py-3 rounded hover:bg-green-50">
            I’m a Farmer
          </button>
        </div>
      </section>
    </main>
  );
}
