const products = [
  {
    id: 1,
    name: "Fresh Tomatoes",
    price: "₹40 / kg",
    farmer: "Ramesh Farms",
    distance: "3.2 km away",
  },
  {
    id: 2,
    name: "Organic Spinach",
    price: "₹30 / bunch",
    farmer: "Green Leaf Farm",
    distance: "2.1 km away",
  },
  {
    id: 3,
    name: "Potatoes",
    price: "₹25 / kg",
    farmer: "Suresh Farms",
    distance: "5.4 km away",
  },
];

export default function MarketplacePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-2">Marketplace</h1>
        <p className="text-gray-600 mb-8">
          Fresh produce available near your location
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold mb-2">
                {product.name}
              </h3>

              <p className="text-sm text-gray-600">
                Farmer: {product.farmer}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                {product.distance}
              </p>

              <div className="flex justify-between items-center">
                <span className="font-bold text-green-700">
                  {product.price}
                </span>
                <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
