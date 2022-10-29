import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Blog from './assets/components/Blog';
import Navigation from './assets/partials/Navbar';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
