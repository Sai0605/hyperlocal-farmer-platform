const products = [
  { id: 1, name: "Tomatoes", price: "₹40/kg" },
  { id: 2, name: "Spinach", price: "₹30/bunch" },
];

export default function FarmerDashboard() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold text-green-700 mb-6">
        Farmer Dashboard
      </h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 rounded shadow">
          <p className="text-sm text-gray-500">Total Earnings</p>
          <p className="text-xl font-bold">₹12,500</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-sm text-gray-500">Active Products</p>
          <p className="text-xl font-bold">2</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-sm text-gray-500">Pending Orders</p>
          <p className="text-xl font-bold">3</p>
        </div>
      </div>

      {/* Products */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">My Products</h2>

        <ul className="space-y-3">
          {products.map((p) => (
            <li
              key={p.id}
              className="flex justify-between border-b pb-2"
            >
              <span>{p.name}</span>
              <span className="font-semibold">{p.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
