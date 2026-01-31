export default function CheckoutPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Order Summary
        </h1>

        <div className="space-y-2 mb-6">
          <p>Tomatoes – ₹40</p>
          <p>Spinach – ₹30</p>
          <hr />
          <p className="font-bold">Total: ₹70</p>
        </div>

        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Proceed to Pay
        </button>
      </div>
    </main>
  );
}
