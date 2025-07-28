import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignupBar from './components/SignupBar/SignupBar'
import Homepage from "./pages/Homepage"
import Navbar from "./components/Navbar/Navbar"
import { useEffect } from "react"
import ShopContextProvider from "./contexts/ShopContext";
import Footer from "./components/Footer/Footer";
import ProductDescriptionPage from "./pages/ProductDescriptionPage";
import Cart from "./pages/Cart"
import Shop from "./pages/Shop"
function App() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  return (
    <>
<ShopContextProvider>
  <BrowserRouter>
  <SignupBar/>
<Navbar/>
<Routes>
  <Route path="/" element={<Homepage/>}/>
  <Route path="/product/:id" element={ <ProductDescriptionPage/> }/>
  <Route path="/shop" element={ <Shop/> }/>
  <Route path="/cart" element ={ <Cart/> }/>
</Routes>
<Footer/>
</BrowserRouter>
</ShopContextProvider>
    </>
  )
}

export default App
