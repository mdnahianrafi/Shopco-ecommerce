// src/pages/LoginPage.jsx
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/userSlice";
import { useNavigate, Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // If already logged in, redirect immediately
  useEffect(() => {
    if (loggedInUser) {
      navigate("/dashboard");
    }
  }, [loggedInUser, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({
        username,
        passwordHash: btoa(password),
      })
    );
    // Delay slightly to allow redux-persist to rehydrate
    setTimeout(() => {
      const persisted = localStorage.getItem("persist:root");
      if (persisted) {
        const { loggedInUser } = JSON.parse(JSON.parse(persisted).user);
        if (loggedInUser) {
          navigate("/dashboard");
          return;
        }
      }
      setError("Invalid username or password");
    }, 100);
  };

  return (
    <div className="py-20">
      <div className="container mx-auto max-w-md py-20 px-8 mb-20 border-2 border-gray-300 rounded-3xl">
        <h1 className="text-center text-3xl font-bold integral-font mb-10">
          Log In
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <p className="text-red-500">{error}</p>}

          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 border border-gray-300 rounded-xl satoshi-font"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          {/* Password with toggle */}
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
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center satoshi-font">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
