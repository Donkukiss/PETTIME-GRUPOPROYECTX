import { MoveRight } from "lucide-react";
import { useState } from "react";

export function RegisterSecondStep({ handlerFirstStep, handleThirdStep }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [dni, setDni] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleThirdStep(name, lastName, birthDate, dni, phone, gender);
  };

  const handleBack = (e) => {
    e.preventDefault();
    handlerFirstStep();
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Nombre"
          className="border border-gray-300 rounded-[15px] py-3 px-6 w-full focus:outline-none focus:border-[#F29455] text-gray-600 shadow-sm"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Apellido"
          className="border border-gray-300 rounded-[15px] py-3 px-6 w-full focus:outline-none focus:border-[#F29455] text-gray-600 shadow-sm"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="date"
          className="border border-gray-300 rounded-[15px] py-3 px-6 w-full focus:outline-none focus:border-[#F29455] text-gray-400 shadow-sm"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="DNI"
          className="border border-gray-300 rounded-[15px] py-3 px-6 w-full focus:outline-none focus:border-[#F29455] text-gray-600 shadow-sm"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
        />
        <input
          type="text"
          placeholder="Teléfono"
          className="border border-gray-300 rounded-[15px] py-3 px-6 w-full focus:outline-none focus:border-[#F29455] text-gray-600 shadow-sm"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div className="mt-4 px-2">
        <label className="text-sm text-gray-400 font-bold mb-2 block">Sexo</label>
        <div className="flex items-center gap-8">
          <label className="flex items-center gap-2 text-gray-600 text-sm cursor-pointer">
            <input
              type="radio"
              name="sexo"
              value="masculino"
              className="accent-[#32ACDC] w-4 h-4"
              onChange={(e) => setGender(e.target.value)}
            />
            Masculino
          </label>
          <label className="flex items-center gap-2 text-gray-600 text-sm cursor-pointer">
            <input
              type="radio"
              name="sexo"
              value="femenino"
              className="accent-[#32ACDC] w-4 h-4"
              onChange={(e) => setGender(e.target.value)}
            />
            Femenino
          </label>
        </div>
      </div>

      <div className="flex items-center justify-between mt-8 gap-4">
        <button
          className="rounded-[100px] border-2 border-[#F29455] text-[#F29455] font-bold bg-white w-1/2 py-3 transition-all active:scale-95"
          onClick={handleBack}
        >
          Atrás
        </button>
        <button
          className="rounded-[100px] bg-[#32ACDC] text-white font-bold w-1/2 py-3 flex justify-center items-center gap-2 shadow-md transition-all active:scale-95"
          onClick={handleSubmit}
        >
          Siguiente <MoveRight size={20} />
        </button>
      </div>
    </div>
  );
}