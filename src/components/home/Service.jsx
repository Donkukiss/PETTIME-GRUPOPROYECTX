export function HomeService({ icon, color, title, description }) {
  return (
    <div className="bg-[#e6f1ff] p-3 rounded-[10px] flex items-center gap-4 shadow-2xl border border-white/50">
      {/* Contenedor del icono: más pequeño y estilizado */}
      <div 
        className="w-14 h-14 rounded-[15px] flex items-center justify-center shrink-0 shadow-sm"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>

      {/* Textos: Ajustados para que el cuadro sea más delgado */}
      <div className="flex flex-col justify-center">
        <h3 className="text-black font-extrabold text-[15px] leading-tight">
          {title}
        </h3>
        <p className="text-[#8A8A8A] text-[12px] font-medium leading-tight mt-0.5">
          {description}
        </p>
      </div>
    </div>
  );
}