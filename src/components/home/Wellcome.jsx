export function HomeWellcome() {
  return (
    <div className="bg-white rounded-[20px] p-4 flex flex-col items-center text-center shadow-2xl border-gray-50">
      <h1 className="text-[#F29455] text-[24px] font-bold flex items-center gap-2">
        Hola 👋
      </h1>
      <h2 className="text-[#F29455] text-[24px] font-extrabold leading-tight">
        !Bienvenido...!
      </h2>
      <p className="text-[#F29455] opacity-80 text-[14px] mt-1 font-medium">
        ¿Qué necesita tu mascota hoy?
      </p>
    </div>
  );
}