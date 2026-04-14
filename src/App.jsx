import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";

// páginas
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { CareBooking } from "./pages/CareBooking";
import { CleaningBooking } from "./pages/CleaningBooking";
import { WalkBooking } from "./pages/WalkBooking";
import { History } from "./pages/History";
import { Profile } from "./pages/Profile";

// navbar
import { Navbar } from "./components/Navbar";

// scroll para que las pantallas inician desde arriba
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const location = useLocation();

  // pantallas que no llevan navbar
  const noNavbarRoutes = ["/login", "/register", "/"];

  return (
    <div className="min-h-screen bg-[#EDF1F6] relative">
      <ScrollToTop />

      <Routes>
        {/* login y registro */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* pantallas principales*/}
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<Profile />} />

        {/* pantallas de reserva */}
        <Route path="/book-care" element={<CareBooking />} />
        <Route path="/book-cleaning" element={<CleaningBooking />} />
        <Route path="/book-walk" element={<WalkBooking />} />
      </Routes>

      {/* donde se puede ver el navbar */}
      {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
    </div>
  );
}

function App() {
  return <AppContent />;
}

export default App;