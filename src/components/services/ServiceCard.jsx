import { useNavigate } from "react-router-dom";

export function ServiceCard({ title, description, items, color, icon }) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (title === "Cuidado") navigate("/book-care");
        if (title === "Limpieza") navigate("/book-cleaning");
        if (title === "Paseos") navigate("/book-walk");
    };

    return (
        <div
            onClick={handleClick}
            className="bg-[#ffffff] rounded-[10px] p-3 shadow-2xl border border-white/50 flex flex-col gap-2 cursor-pointer active:scale-95 transition-transform"
        >
            <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-[15px] flex items-center justify-center shrink-0 shadow-sm" style={{ backgroundColor: color }}>
                    {icon}
                </div>
                <div className="flex flex-col">
                    <h3 className="text-black font-semibold text-[14px]">{title}</h3>
                    <p className="text-gray-600 text-[10px] leading-tight font-normal">{description}</p>
                </div>
            </div>
            <ul className="space-y-0 ml-1.5">
                {items.map((item, i) => (
                    <li key={i} className="text-[11px] text-black font-normal flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 bg-black rounded-full shrink-0" />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}