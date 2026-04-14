import { LogOut, Mail, Phone, Camera, ChevronRight, Settings, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Profile() {
    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen bg-[#EDF1F6] pb-32">

            {/* fondo mascotas*/}
            <div className="absolute top-0 left-0 w-full h-[300px] z-0 overflow-hidden">
                <img src="/fondo-mascotas.svg" className="w-full h-full object-cover" alt="fondo" />
                <div className="absolute top-0 left-0 w-full h-[300px] bg-[#32ACDC] opacity-20 mix-blend-multiply" />
            </div>

            {/* boton de salir */}
            <div className="relative z-20 pt-5 px-6 flex flex-col items-center">
                <div className="w-full flex justify-end">
                    <button
                        onClick={() => navigate("/login")}
                        className="text-white bg-black/20 p-2 rounded-lg backdrop-blur-sm active:scale-90 transition-all"
                    >
                        <LogOut className="text-white rotate-180 cursor-pointer mt-[-8px]" size={28} />
                    </button>
                </div>

                {/* foto de perfil y nombre de usuario */}
                <div className="relative mt-2">
                    <div className="w-28 h-28 bg-white rounded-full p-1 shadow-2xl border-4 border-white overflow-hidden">
                        <img
                            src="/gino.jpg"
                            alt="Foto de perfil"
                            className="w-full h-full rounded-full object-cover"
                        />
                    </div>
                    <button className="absolute bottom-0 right-0 bg-[#43A3F1] p-2 rounded-full text-white shadow-lg border-2 border-white active:scale-90 transition-all">
                        <Camera size={16} />
                    </button>
                </div>
                <h2 className="text-white font-bold mt-3 text-xl drop-shadow-md text-center shadow-2xl">
                    Gino Llanes Calero
                </h2>
                <p className="text-white text-[12px] font-bold uppercase tracking-widest mt-1 shadow-2xl">
                    Perfil
                </p>
            </div>

            {/* info de la cuenta */}
            <main className="relative z-30 mx-6 mt-8 bg-white rounded-[30px] p-8 shadow-2xl border border-white mt-[15px]">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-[#F29455] text-[24px] font-bold text-center mb-6 mt-[-10px]">Mi Cuenta</h1>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors active:scale-90">
                        <Settings size={22} className="text-gray-400 mt-[-28px]" />
                    </button>
                </div>

                <div className="space-y-7">
                    {/* datos personales */}
                    <div className="flex items-center gap-5 px-2 mt-[-35px]">
                        <Mail className="text-[#43A3F1] shrink-0" size={20} />
                        <div className="flex flex-col">
                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Email</span>
                            <span className="text-[14px] font-bold text-gray-700">gino.llanes@email.com</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 px-2">
                        <Phone className="text-[#43A3F1] shrink-0" size={20} />
                        <div className="flex flex-col">
                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Teléfono</span>
                            <span className="text-[14px] font-bold text-gray-700">+51 999 666 333</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 px-2 pb-2">
                        <MapPin className="text-[#43A3F1] shrink-0" size={20} />
                        <div className="flex flex-col">
                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Ubicación</span>
                            <span className="text-[14px] font-bold text-gray-700">Lima, Perú</span>
                        </div>
                    </div>

                    {/* acceso a mascotas */}
                    <div className="bg-[#F8FAFC] p-2 rounded-[20px] border border-gray-200 shadow-2xl">
                        <button className="w-full flex items-center justify-between group active:scale-[0.98] transition-all">
                            <div className="flex items-center gap-4">
                                <div className="text-2xl bg-white w-12 h-12 rounded-[15px] flex items-center justify-center shadow-sm">
                                    🐾
                                </div>
                                <div className="flex flex-col items-start">
                                    <span className="text-[15px] font-bold text-gray-800">Mis Mascotas</span>
                                    <span className="text-[11px] text-[#96C268] font-bold">2 registradas</span>
                                </div>
                            </div>
                            <div className="bg-white p-2 rounded-full shadow-sm">
                                <ChevronRight size={18} className="text-gray-400 group-hover:text-[#43A3F1] transition-colors" />
                            </div>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}