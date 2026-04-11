import { Link } from "react-router-dom";
// Importamos los iconos uno por uno
import { Home, LayoutGrid, ClipboardList, User } from "lucide-react";

export function Navbar() {
    return (
        <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-[#96C268] py-2 px-5 rounded-[10px] z-50 shadow-lg">
            <div className="flex justify-around items-center text-white">

                <Link to="/home" className="flex flex-col items-center gap-1">
                    <Home size={24} />
                    <span className="text-[10px] font-bold">Inicio</span>
                </Link>

                <Link to="/services" className="flex flex-col items-center gap-1 opacity-70">
                    <LayoutGrid size={24} />
                    <span className="text-[10px] font-bold">Servicios</span>
                </Link>

                <Link to="/history" className="flex flex-col items-center gap-1 opacity-70">
                    <ClipboardList size={24} />
                    <span className="text-[10px] font-bold">Historial</span>
                </Link>

                <Link to="/profile" className="flex flex-col items-center gap-1 opacity-70">
                    <User size={24} />
                    <span className="text-[10px] font-bold">Perfil</span>
                </Link>

            </div>
        </nav>
    );
}