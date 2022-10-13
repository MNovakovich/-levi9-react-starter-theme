import { Routes, Route } from 'react-router-dom';
import Home from 'pages/home/Home';
import AboutUs from 'pages/about-us/AboutUs';
import NotFoundPage from 'pages/404';
import  { TodoProvider } from './context/cart/CartProvider';

function App() {
  return (
    <TodoProvider>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<AboutUs />} /> 
         <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </TodoProvider>
  );
}

export default App;
