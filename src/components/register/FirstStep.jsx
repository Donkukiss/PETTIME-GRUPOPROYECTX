import { MoveRight, Mail, Lock } from "lucide-react";
import { useState } from "react";

export function RegisterFirstStep({ handleSecondStep }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // pasar datos a componente padre
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSecondStep(email, password);
  };

  return (
    <div className="flex flex-col gap-4 w-full">

      {/* input de correo */}
      <div className="relative w-full">
        <span className="absolute inset-y-0 left-0 flex items-center pl-4">
          <Mail size={20} className="text-gray-400" />
        </span>
        <input
          type="email"
          placeholder="Correo"
          className="border border-gray-300 rounded-[15px] py-3 pl-12 pr-6 w-full focus:outline-none focus:border-[#F29455] text-gray-600 shadow-sm"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* input de contraseña */}
      <div className="relative w-full">
        <span className="absolute inset-y-0 left-0 flex items-center pl-4">
          <Lock size={20} className="text-gray-400" />
        </span>
        <input
          type="password"
          placeholder="Contraseña"
          className="border border-gray-300 rounded-[15px] py-3 pl-12 pr-6 w-full focus:outline-none focus:border-[#F29455] text-gray-600 shadow-sm"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {/* boton de avance */}
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