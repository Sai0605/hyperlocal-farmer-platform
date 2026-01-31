const orders = [
  {
    id: 1,
    product: "Tomatoes",
    status: "Out for Delivery",
    eta: "30 mins",
  },
];

export default function OrdersPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-6 text-green-700">
        My Orders
      </h1>

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white p-4 rounded shadow"
          >
            <p className="font-semibold">{order.product}</p>
            <p>Status: {order.status}</p>
            <p>ETA: {order.eta}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
