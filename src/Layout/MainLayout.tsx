import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}
