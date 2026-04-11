import { Heart, LayoutGrid, Users, LogOut } from "lucide-react";
import { Header } from "../components/Header";
import { HomeWellcome } from "../components/home/Wellcome";
import { HomeRegisterPet } from "../components/home/RegisterPet";
import { HomeService } from "../components/home/Service";

export function Home() {
  const services = [
    {
      icon: <Heart size={20} className="text-[#F16969]" />,
      color: "#F3B1B1",
      title: "Cuidado",
      description: "Deja tu mascota en las mejores manos",
    },
    {
      icon: <LayoutGrid size={20} className="text-[#5EF069]" />,
      color: "#B1F3B6",
      title: "Limpieza",
      description: "Baños, cepillados y más",
    },
    {
      icon: <Users size={20} className="text-[#43A3F1]" />,
      color: "#B1D5F3",
      title: "Paseos",
      description: "Actividades y diversión al aire libre",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#EDF1F6] pb-28">
      <div className="absolute top-0 left-0 w-full h-[300px] bg-[url(/fondo-mascotas.svg)] bg-cover bg-center" />
      <div className="absolute top-0 left-0 w-full h-[300px] bg-[#96C268] opacity-20 mix-blend-multiply" />

      <div className="relative z-20 flex flex-col items-center pt-5">
        <div className="w-full flex justify-end px-6">
          <LogOut className="text-white rotate-180 cursor-pointer" size={28} />
        </div>
        <img src="logo-fondo-blanco.svg" alt="Logo PetTime" className="w-32 h-32 mt-[-10px]" />
      </div>

      <div className="relative z-10 flex flex-col gap-8 mt-[30px]">
        <div className="px-6 mt-[-10px]">
          <HomeWellcome />
        </div>

        <section>
          <h2 className="text-[#F29455] font-bold text-[16px] mx-8 mb-0 mt-[-10px]">Mis Mascotas</h2>
          <div className="px-6">
            <HomeRegisterPet />
          </div>
        </section>

        <section>
          <h2 className="text-[#F29455] font-bold text-[16px] mx-8 mb-4 mt-[-50px]">Nuestros Servicios</h2>
          <div className="p-4 flex flex-col gap-2 mt-[-25px]">
            {services.map((service, index) => (
              <HomeService
                key={index}
                icon={service.icon}
                color={service.color}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </section>
      </div>
           
    </div>
  );
}