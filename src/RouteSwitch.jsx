import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Blog from './assets/components/Blog';
import Navigation from './assets/partials/Navbar';
import BlogView from './assets/components/BlogView';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogs/:id" element={<BlogView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
