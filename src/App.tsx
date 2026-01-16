// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainLayout } from "./Layout/MainLayout"
import Home from "./pages/Home/Home"
import ShopTogether from "./pages/ShopTogether/ShopTogether"
import WorkersFinder from "./pages/WorkersFinder/WorkersFinder"
import { VehicleReservation } from "./pages/VehicleReservation/VehicleReservation"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="shop-together" element={<ShopTogether/>}/>
          <Route path="workers-finder" element={<WorkersFinder/>}/>
          <Route path="vehicle-reservation" element={<VehicleReservation/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
