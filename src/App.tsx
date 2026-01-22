import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainLayout } from "./Layout/MainLayout"
import Home from "./pages/Home/Home"
import WorkersFinder from "./pages/WorkersFinder/WorkersFinder"
import { VehicleReservation } from "./pages/VehicleReservation/VehicleReservation"
import PaintsMaker from "./pages/PaintsMaker/PaintsMaker"
import { Terms } from "./pages/Terms/Terms"
import { AboutUs } from "./pages/AboutUs/AboutUs"
import { ContactUs } from "./pages/ContactUs/ContactUs"
import { ServiceGuide } from "./pages/ServiceGuide/ServiceGuide"
import { ComingSoon } from "./pages/ShopTogether/ComingSoon"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="shop-together" element={<ComingSoon/>}/>
          <Route path="workers-finder" element={<WorkersFinder/>}/>
          <Route path="vehicle-reservation" element={<VehicleReservation/>}/>
          <Route path="paints-maker" element={<PaintsMaker />}/>
          <Route path="about" element={<AboutUs />}/>
          <Route path="contact" element={<ContactUs />}/>
          <Route path="service-guide" element={<ServiceGuide />}/>
          <Route path="terms" element={<Terms />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
