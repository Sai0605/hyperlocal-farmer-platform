export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-green-700">
          Register
        </h1>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border px-4 py-2 rounded"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border px-4 py-2 rounded"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border px-4 py-2 rounded"
          />

          <select className="w-full border px-4 py-2 rounded">
            <option>Consumer</option>
            <option>Farmer</option>
          </select>

          <button
            type="button"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Create Account
          </button>
        </form>
      </div>
    </main>
  );
}
