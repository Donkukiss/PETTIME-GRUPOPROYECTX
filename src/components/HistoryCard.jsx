export function HistoryCard({ title, petName, date, details, color, icon }) {
    return (
        <div className="bg-white rounded-[15px] p-4 shadow-md border border-gray-200 flex flex-col gap-2 mb-4">
            <div className="flex items-center gap-4">
                {/* Cuadro del Icono con fondo suave */}
                <div
                    className="w-12 h-12 rounded-[10px] flex items-center justify-center shrink-0 shadow-sm"
                    style={{ backgroundColor: color }}
                >
                    {icon}
                </div>

                <div className="flex flex-col">
                    <h3 className="text-black font-bold text-[12px] leading-tight mt-[-13px]">
                        {title} - {petName}
                    </h3>
                    <p className="text-gray-400 text-[8px] font-bold mt-[2px]">{date}</p>
                </div>
            </div>

            {/* Detalles del servicio (Fecha Inicio/Recojo o Tipo) */}
            <div className="mt-1 space-y-0.5 ml-16 mt-[-20px]">
                {details.map((detail, index) => (
                    <p key={index} className="text-[8px] text-black font-bold">
                        <span className="text-gray-400 font-semibold">{detail.label}: </span>
                        {detail.value}
                    </p>
                ))}
            </div>
        </div>
    );
}