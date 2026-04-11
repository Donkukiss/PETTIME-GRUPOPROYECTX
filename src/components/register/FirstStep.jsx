import { MoveRight } from "lucide-react";
import { useState } from "react";

export function RegisterFirstStep({ handleSecondStep }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSecondStep(email, password);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <input
        type="text"
        placeholder="✉️ Correo"
        className="border border-gray-300 rounded-[15px] py-3 px-6 w-full focus:outline-none focus:border-[#F29455] text-gray-600 shadow-sm"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="🔒 Contraseña"
        className="border border-gray-300 rounded-[15px] py-3 px-6 w-full focus:outline-none focus:border-[#F29455] text-gray-600 shadow-sm"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="submit"
        className="bg-[#32ACDC] rounded-[100px] py-4 px-6 w-full mt-6 font-bold text-white flex items-center justify-center gap-2 shadow-md active:scale-95 transition-transform"
        onClick={handleSubmit}
      >
        Siguiente
        <MoveRight size={22} strokeWidth={2.5} />
      </button>
    </div>
  );
}