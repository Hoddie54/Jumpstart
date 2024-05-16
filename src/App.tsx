import { Route, Routes } from "react-router"
import "./App.css"
import SearchPage from "./pages/search-page/search-page"
import CheckoutPage from "./pages/checkout/checkout-page"

function App() {
  //  const location = useLocation()

  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  )
}

export default App
