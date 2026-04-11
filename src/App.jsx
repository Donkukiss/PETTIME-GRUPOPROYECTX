import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import "./App.css";

// Importación de Páginas
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { CareBooking } from "./pages/CareBooking";
import { CleaningBooking } from "./pages/CleaningBooking";
import { WalkBooking } from "./pages/WalkBooking";
import { History } from "./pages/History";
import { Profile } from "./pages/Profile";

// Importación de Componentes
import { Navbar } from "./components/Navbar";

function AppContent() {
  const location = useLocation();

  // Definimos qué rutas NO deben mostrar el Navbar (Login, Registro y Raíz)
  const noNavbarRoutes = ["/login", "/register", "/"];

  return (
    <div className="min-h-screen bg-[#EDF1F6] relative">
      <Routes>
        {/* Redirección inicial */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Autenticación */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Pantallas Principales */}
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<Profile />} />

        {/* Pantallas de Reserva de Servicios */}
        <Route path="/book-care" element={<CareBooking />} />
        <Route path="/book-cleaning" element={<CleaningBooking />} />
        <Route path="/book-walk" element={<WalkBooking />} />
      </Routes>

      {/* Solo renderiza el Navbar si no estamos en login/registro */}
      {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
    </div>
  );
}

function App() {
  return <AppContent />;
}

export default App;