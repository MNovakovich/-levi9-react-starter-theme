import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/cart/CartProvider";
// this is example provider
import { CounterProvider } from "./context/counter/CounterProvider";
import { HomePage, AboutUsPage, NotFoundPage, CartPage } from "pages";

function App() {
  return (
    <CounterProvider>  
      <CartProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </CartProvider>
    </CounterProvider>
  );
}

export default App;
