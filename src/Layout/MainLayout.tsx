import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { ScrollToTop } from "./ScrollToTop";

export function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}
