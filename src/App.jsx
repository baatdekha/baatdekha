import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';

import Home from './pages/Home/Home';
import ContactUs from './pages/ContactUs/ContactUs';
import AboutUs from './pages/AboutUs/AboutUs';
import ServiceGuide from './pages/ServiceGuide/ServiceGuide';
import WorkersFinder from './pages/WorkersFinder/WorkersFinder';
import TilesCalculator from './pages/TilesCalculator/TilesCalculator';
import PaintsMaker from './pages/PaintsMaker/PaintsMaker';
import Tnc from './pages/Tnc/Tnc';
import ShopTogether from './pages/ShopTogether/ShopTogether';

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="service-guide" element={<ServiceGuide />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="terms" element={<Tnc />} />
          <Route path="workers-finder" element={<WorkersFinder />} />
          <Route path="shop-together" element={<ShopTogether />} />
        </Route>
        <Route path="tiles-calculator" element={<TilesCalculator />} />
        <Route path="paints-maker" element={<PaintsMaker />} />
        
      </Routes>
    </Router>
  );
}

export default App;