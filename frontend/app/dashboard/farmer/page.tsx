"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function FarmerDashboard() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [unit, setUnit] = useState("kg");
  const [quantity, setQuantity] = useState("");
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    const { data } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addProduct = async () => {
    setLoading(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("Not logged in");
      setLoading(false);
      return;
    }

    const { error } = await supabase.from("products").insert({
      farmer_id: user.id,
      name,
      price: Number(price),
      unit,
      quantity: Number(quantity),
    });

    if (error) {
      alert(error.message);
    } else {
      setName("");
      setPrice("");
      setQuantity("");
      fetchProducts();
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-green-700 mb-6">
        Farmer Dashboard
      </h1>

      {/* Add Product */}
      <div className="bg-white p-6 rounded shadow mb-8">
        <h2 className="text-lg font-semibold mb-4">
          Add New Product
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            placeholder="Product name"
            className="border px-3 py-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Price"
            className="border px-3 py-2 rounded"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <input
            placeholder="Quantity"
            className="border px-3 py-2 rounded"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />

          <button
            onClick={addProduct}
            disabled={loading}
            className="bg-green-600 text-white rounded px-4 py-2 hover:bg-green-700"
          >
            {loading ? "Adding..." : "Add"}
          </button>
        </div>
      </div>

      {/* Product List */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">
          My Products
        </h2>

        <ul className="space-y-3">
          {products.map((p) => (
            <li
              key={p.id}
              className="flex justify-between border-b pb-2"
            >
              <span>
                {p.name} ({p.quantity} {p.unit})
              </span>
              <span className="font-semibold">
                ₹{p.price}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
