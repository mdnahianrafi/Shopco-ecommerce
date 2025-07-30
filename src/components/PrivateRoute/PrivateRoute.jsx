// src/components/PrivateRoute.jsx
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const user = useSelector((s) => s.user.loggedInUser);
  return user ? <Outlet /> : <Navigate to="/login" replace />;
}
