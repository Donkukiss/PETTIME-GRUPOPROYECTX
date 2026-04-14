export function HomeRegisterPet() {
  return (
    <div className="bg-[#EAEFF5] rounded-[30px] p-8 flex flex-col items-center justify-center shadow-inner">
      <img src="/dog-icon.svg" alt="Mascota" className="w-25 mb-4 mt-[-20px]" />

      <p className="text-[#000000] font-bold text-[10px] mb-2 mt-[-10px]">
        Aún no hay mascotas registradas
      </p>

      <button className="bg-[#32ACDC] text-white px-10 py-3 rounded-[100px] font-bold text-[12px] shadow-lg active:scale-95 transition-all">
        Registra una mascota
      </button>
    </div>
  );
}