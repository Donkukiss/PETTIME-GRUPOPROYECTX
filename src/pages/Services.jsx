import { LogOut, Heart, LayoutGrid, Users } from "lucide-react"; // Importamos los mismos iconos
import { Navbar } from "../components/Navbar";
import { ServiceCard } from "../components/services/ServiceCard";

export function Services() {
    const detailedServices = [
        {
            title: "Cuidado",
            description: "Cuidamos a tu mascota mientras no estás. Con atención personalizada",
            items: ["Alimentación de acorde a horarios", "Supervisión constante", "Espacios seguros, cómodos y limpios"],
            color: "#F3B1B1",
            // Usamos el mismo icono que en Home
            icon: <Heart size={20} className="text-[#F16969]" />
        },
        {
            title: "Limpieza",
            description: "Mantenemos a tu mascota limpia y saludable en todo momento",
            items: ["Baños completos", "Baños secos", "Cepillados"],
            color: "#B1F3B6",
            // Usamos el mismo icono que en Home
            icon: <LayoutGrid size={20} className="text-[#5EF069]" />
        },
        {
            title: "Paseos",
            description: "Sacamos a pasear a tu mascota con cuidado y diversión",
            items: ["Rutas seguras y divertidas", "Ejercicios al aire libre", "Horarios Flexibles"],
            color: "#B1D5F3",
            // Usamos el mismo icono que en Home (Users)
            icon: <Users size={20} className="text-[#43A3F1]" />
        }
    ];

    return (
        <div className="relative min-h-screen bg-[#EDF1F6] pb-32">
            {/* Fondo Superior */}
            <div className="absolute top-0 left-0 w-full h-[300px] z-0 overflow-hidden">
                <img
                    src="/public/fondo-mascotas.svg"
                    className="w-full h-full object-cover shadow-2xl"
                    alt="fondo mascotas"
                />
                <div className="absolute top-0 left-0 w-full h-[300px] bg-[#96C268] opacity-20 mix-blend-multiply" />
            </div>

            {/* Header con Logo idéntico al Home */}
            <div className="relative z-20 pt-5 px-6 flex flex-col items-center">
                <div className="w-full flex justify-end">
                    <LogOut className="text-white rotate-180 cursor-pointer" size={28} />
                </div>

                {/* Contenedor circular del logo */}
                <div className="w-32 h-32 mt-[-10px]">
                    <img src="/public/logo-fondo-blanco.svg" alt="PetTime Logo" className="w-full h-auto" />
                </div>
            </div>

            {/* Contenedor Blanco Central */}
            <main className="relative z-30 mx-6 mt-6 bg-white rounded-[20px] p-6 shadow-2xl border border-white/20 min-h-[500px]">
                <h1 className="text-[#F29455] text-[24px] semi-bold font-bold text-center mb-2 mt-[-10px]">Servicios</h1>
                <p className="text-[#8A8A8A] text-center text-[14px] mb-8 font-semibold leading-tight px-4">
                    Elige el servicio que necesitas hoy
                </p>

                <div className="flex flex-col gap-5">
                    {detailedServices.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </main>

            <Navbar />
        </div>
    );
}