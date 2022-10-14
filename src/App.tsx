import { Routes, Route } from 'react-router-dom';
import  { TodoProvider } from './context/cart/CartProvider';
import { 
  HomePage,
  AboutUsPage,
  NotFoundPage,
  CartPage
 } from 'pages'

function App() {
  return (
    <TodoProvider>
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/about" element={<AboutUsPage />} /> 
         <Route path="/cart" element={<CartPage />} />
         <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </TodoProvider>
  );
}

export default App;
