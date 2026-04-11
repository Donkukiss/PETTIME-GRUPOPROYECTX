import { LogOut, ChevronLeft, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function CleaningBooking() {
    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen bg-[#EDF1F6]">
            {/* Reutilizamos la misma cabecera */}
            <div className="absolute top-0 left-0 w-full h-[300px] z-0 overflow-hidden">
                <img src="/public/fondo-mascotas.svg" className="w-full h-full object-cover" alt="fondo" />
                <div className="absolute top-0 left-0 w-full h-[300px] bg-[#96C268] opacity-20 mix-blend-multiply" />
            </div>

            <div className="relative z-20 pt-5 px-6 flex flex-col items-center">
                <div className="w-full flex justify-between items-center text-white">
                    <button onClick={() => navigate(-1)}><ChevronLeft size={38} /></button>
                    <LogOut className="rotate-180 cursor-pointer mt-[-10px]" size={28} />
                </div>
                <div className="w-32 h-32 mt-[-20px]">
                    <img src="/public/logo-fondo-blanco.svg" alt="PetTime Logo" />
                </div>
            </div>

            <main className="relative z-30 mx-6 mt-6 bg-white rounded-[20px] p-8 shadow-2xl">
                <h1 className="text-[#F29455] text-[22px] font-bold text-center mb-2 mt-[-15px]">Reserva de Limpieza</h1>
                <div className="flex flex-col gap-4">
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A8A8A]" size={20} />
                        <select className="w-full bg-white border border-gray-400 rounded-[10px] py-3 pl-12 pr-4 text-[#8A8A8A] outline-none">
                            <option>Selecciona tu mascota</option>
                        </select>
                    </div>
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A8A8A]" size={20} />
                        <select className="w-full bg-white border border-gray-400 rounded-[10px] py-3 pl-12 pr-4 text-[#8A8A8A] outline-none">
                            <option>Tipo de limpieza</option>
                        </select>
                    </div>
                    <button className="mt-4 bg-[#43A3F1] text-white font-bold py-4 rounded-[100px] shadow-lg mt-[116px]">Registrar Servicio</button>
                </div>
            </main>
        </div>
    );
}