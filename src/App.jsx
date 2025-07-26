import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Navbar from "./components/Navbar/Navbar"
import { useEffect } from "react"
import ShopContextProvider from "./contexts/ShopContext";
import Footer from "./components/Footer/Footer";

function App() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  return (
    <>
<ShopContextProvider>
  <BrowserRouter>
<Navbar/>
<Routes>
  <Route path="/" element={<Homepage/>}/>
</Routes>
<Footer/>
</BrowserRouter>
</ShopContextProvider>
    </>
  )
}

export default App
