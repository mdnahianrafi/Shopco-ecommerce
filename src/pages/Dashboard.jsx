import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile, logout } from "../redux/userSlice";
import { cancelOrder } from "../redux/orderSlice";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((s) => s.user.loggedInUser);
  const orders = useSelector((s) => s.orders.byUser[user?.username] || []);

  const [tab, setTab] = useState("profile");
  const [editing, setEditing] = useState(false);
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (!user) return navigate("/login");
    setPhone(user.phone);
    setAddress(user.address);
  }, [user, navigate]);

  const saveProfile = () => {
    dispatch(updateProfile({ phone, address }));
    setEditing(false);
  };

  // Helper to calculate total price of one order
  const getOrderTotal = (order) => {
    return order.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="container mx-auto py-12 flex gap-8 min-h-screen">
      {/* Sidebar */}
      <aside className="w-1/4 border-r pr-6 space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold integral-font">{user.name}</h2>
        </div>
        <nav className="space-y-2">
          <button
            onClick={() => {
              setTab("profile");
              setEditing(false);
            }}
            className={`block w-full text-left py-2 satoshi-font ${
              tab === "profile" ? "font-semibold text-black" : "text-gray-600"
            }`}
          >
            Profile
          </button>
          <button
            onClick={() => setTab("orders")}
            className={`block w-full text-left py-2 satoshi-font ${
              tab === "orders" ? "font-semibold text-black" : "text-gray-600"
            }`}
          >
            My Orders
          </button>
        </nav>
        <button
          onClick={() => dispatch(logout())}
          className="mt-6 w-full py-2 bg-red-500 text-white rounded-full satoshi-font hover:bg-red-600 transition"
        >
          Log Out
        </button>
      </aside>

      {/* Main Content */}
      <section className="flex-1">
        {tab === "profile" ? (
          <div className="max-w-md space-y-6">
            {editing ? (
              <>
                <label className="block satoshi-font">
                  Phone
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full mt-1 p-3 border border-gray-300 rounded-xl satoshi-font"
                  />
                </label>
                <label className="block satoshi-font">
                  Address
                  <textarea
                    rows={3}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full mt-1 p-3 border border-gray-300 rounded-2xl satoshi-font"
                  />
                </label>

                <div className="flex gap-4">
                  <button
                    onClick={saveProfile}
                    className="py-2 px-5 bg-black text-white rounded-full satoshi-font hover:bg-gray-800 transition"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditing(false)}
                    className="py-2 px-5 border rounded-full satoshi-font hover:bg-gray-100 transition"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-2">
                  <p className="text-gray-600 satoshi-font">
                    <strong>Phone:</strong> {user.phone || "—"}
                  </p>
                  <p className="text-gray-600 satoshi-font">
                    <strong>Address:</strong> {user.address || "—"}
                  </p>
                </div>
                <button
                  onClick={() => setEditing(true)}
                  className="mt-4 py-2 px-5 bg-blue-600 text-white rounded-full satoshi-font hover:bg-blue-700 transition"
                >
                  Edit Profile
                </button>
              </>
            )}
          </div>
        ) : (
          <div className="max-w-3xl space-y-6">
            <h3 className="text-2xl font-semibold integral-font mb-4">
              My Orders
            </h3>
            {orders.length === 0 ? (
              <p className="satoshi-font text-gray-600">
                You have no orders yet.
              </p>
            ) : (
              orders.map((o) => (
                <div
                  key={o.id}
                  className="border rounded-2xl p-6 space-y-4 shadow-md"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium satoshi-font">Order #{o.id}</p>
                      <p className="text-gray-500 text-sm satoshi-font">
                        {o.date}
                      </p>
                      <p className="text-gray-700 text-sm satoshi-font">
                        {o.items.length} item{o.items.length > 1 ? "s" : ""}
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        dispatch(
                          cancelOrder({
                            username: user.username,
                            orderId: o.id,
                          })
                        )
                      }
                      className="py-2 px-5 bg-red-500 text-white rounded-full satoshi-font hover:bg-red-600 transition"
                    >
                      Cancel
                    </button>
                  </div>

                  {/* Items list */}
                  <div className="space-y-4">
                    {o.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-4 border rounded-xl p-3"
                      >
                        {/* Assuming your order items have image url, if not you can extend the order data */}

                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />

                        <div className="flex-1">
                          <p className="font-semibold satoshi-font">
                            {item.name}
                          </p>
                          <p className="text-sm text-gray-600 satoshi-font">
                            Color: {item.selectedColor} | Size: {item.size}
                          </p>
                          <p className="text-sm text-gray-600 satoshi-font">
                            Quantity: {item.quantity}
                          </p>
                        </div>
                        <p className="font-semibold satoshi-font">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Total */}
                  <div className="text-right font-semibold text-lg satoshi-font">
                    Total: ${getOrderTotal(o).toFixed(2)}
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </section>
    </div>
  );
}
