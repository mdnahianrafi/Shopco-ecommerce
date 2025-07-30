import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import SignupBar from './components/SignupBar/SignupBar';
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar/Navbar";
import { useEffect } from "react";
import ShopContextProvider from "./contexts/ShopContext";
import Footer from "./components/Footer/Footer";
import ProductDescriptionPage from "./pages/ProductDescriptionPage";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import NewArrivals from "./pages/NewArrivals";
import OnSale from "./pages/OnSale";
import Brands from "./pages/Brands";
import ScrollToTop from "./components/utils/ScroolToTop";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
 import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  return (
    <ShopContextProvider>
      <BrowserRouter>
        <ScrollToTop />
        <SignupBar />
        <Navbar />

        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Homepage />} />
          <Route path="/product/:id" element={<ProductDescriptionPage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/newarrivals" element={<NewArrivals />} />
          <Route path="/onsale" element={<OnSale />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Protected routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            {/* You can add more protected routes here */}
          </Route>

          {/* Fallback: redirect unknown URLs to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;
