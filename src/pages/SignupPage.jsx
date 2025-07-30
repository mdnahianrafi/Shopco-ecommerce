import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../redux/userSlice";
import { useNavigate, Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";  // add these

export default function SignupPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.user.users);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);  // new
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (users.find((u) => u.username === username)) {
      setError("Username already taken");
      return;
    }
    dispatch(
      signup({
        name,
        username,
        passwordHash: btoa(password),
      })
    );
    navigate("/login");
  };

  return (
    <div className="py-20">
      <div className="container mx-auto max-w-md py-20 px-8 mb-20 border-2 border-gray-300 rounded-3xl">
        <h1 className="text-center text-3xl font-bold integral-font mb-10">
          Create Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {error && <p className="text-red-500">{error}</p>}

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border border-gray-300 rounded-xl satoshi-font"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 border border-gray-300 rounded-xl satoshi-font"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          {/* Password field with toggle */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-xl satoshi-font pr-12"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-600"
            >
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded-full satoshi-font hover:bg-gray-800 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center satoshi-font">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
