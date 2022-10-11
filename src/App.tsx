import { Routes, Route } from 'react-router-dom';
import Home from 'pages/home/Home';
import AboutUs from 'pages/about-us/AboutUs';
import NotFoundPage from 'pages/404';

function App() {
  return (
    <div className="App">
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<AboutUs />} /> 
         <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
