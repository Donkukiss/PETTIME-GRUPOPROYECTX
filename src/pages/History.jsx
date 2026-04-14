import { LogOut, Heart, LayoutGrid, Users } from "lucide-react";
import { HistoryCard } from "../components/HistoryCard";
import { useNavigate } from "react-router-dom";

export function History() {
    const navigate = useNavigate();

    // datos de prueba historial
    const historyData = [
        {
            title: "Paseos",
            petName: "Tobby",
            date: "28 feb. 2026",
            color: "#B1D5F3",
            icon: <Users size={20} className="text-[#43A3F1]" />,
            details: [
                { label: "Fecha de Inicio", value: "28 feb. 2026 - 10:00" },
                { label: "Fecha de Recojo", value: "28 feb. 2026 - 12:00" }
            ]
        },
        {
            title: "Limpieza",
            petName: "Tobby",
            date: "26 feb. 2026",
            color: "#B1F3B6",
            icon: <LayoutGrid size={20} className="text-[#5EF069]" />,
            details: [
                { label: "Tipo de Limpieza", value: "Baño Completo" }
            ]
        },
        {
            title: "Cuidado",
            petName: "Tobby",
            date: "23 feb. 2026",
            color: "#F3B1B1",
            icon: <Heart size={20} className="text-[#F16969]" />,
            details: [
                { label: "Fecha de Inicio", value: "23 feb. 2026 - 13:50" },
                { label: "Fecha de Recojo", value: "25 feb. 2026 - 10:00" }
            ]
        }
    ];

    return (
        <div className="relative min-h-screen bg-[#EDF1F6] pb-32">

            {/* fondo mascotas*/}
            <div className="absolute top-0 left-0 w-full h-[300px] z-0 overflow-hidden">
                <img src="/public/fondo-mascotas.svg" className="w-full h-full object-cover" alt="fondo" />
                <div className="absolute top-0 left-0 w-full h-[300px] bg-[#96C268] opacity-20 mix-blend-multiply" />
            </div>

            {/* logo y logout */}
            <div className="relative z-20 pt-5 px-6 flex flex-col items-center">
                <div className="w-full flex justify-end">
                    <LogOut className="text-white rotate-180 cursor-pointer" size={28} />
                </div>
                <div className="w-32 h-32 mt-[-10px]">
                    <img src="/public/logo-fondo-blanco.svg" alt="PetTime Logo" />
                </div>
            </div>

            {/* lista de tarjetas del historial */}
            <main className="relative z-30 mx-6 mt-6 bg-white rounded-[20px] p-6 shadow-2xl min-h-[500px]">
                <h1 className="text-[#F29455] text-[24px] font-bold text-center mb-6 mt-[-10px]">Historial</h1>

                <div className="flex flex-col mt-[-20px]">
                    {historyData.map((item, index) => (
                        <HistoryCard key={index} {...item} />
                    ))}
                </div>

                {/* boton nuevoservicio */}
                <button
                    onClick={() => navigate("/services")}
                    className="w-full mt-4 bg-[#43A3F1] text-white font-bold py-4 rounded-[100px] shadow-lg active:scale-95 transition-all text-sm tracking-wide mt-[60px]"
                >
                    Nuevo servicio
                </button>
            </main>
        </div>
    );
}