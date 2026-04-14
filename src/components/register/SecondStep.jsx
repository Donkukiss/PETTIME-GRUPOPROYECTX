import { MoveRight, User, Calendar, IdCard, Phone } from "lucide-react";
import { useState } from "react";

export function RegisterSecondStep({ handlerFirstStep, handleThirdStep }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [dni, setDni] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");

  // pasar datos a componente padre
  const handleSubmit = (e) => {
    e.preventDefault();
    handleThirdStep(name, lastName, birthDate, dni, phone, gender);
  };

  // regresa al paso 1
  const handleBack = (e) => {
    e.preventDefault();
    handlerFirstStep();
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col gap-3">

        {/* inputs nombre y apellido */}
        <div className="relative w-full">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4">
            <User size={20} className="text-gray-400" />
          </span>
          <input
            type="text"
            placeholder="Nombre"
            className="border border-gray-300 rounded-[15px] py-3 pl-12 pr-6 w-full focus:outline-none focus:border-[#F29455] text-gray-600 shadow-sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="relative w-full">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4">
            <User size={20} className="text-gray-400" />
          </span>
          <input
            type="text"
            placeholder="Apellido"
            className="border border-gray-300 rounded-[15px] py-3 pl-12 pr-6 w-full focus:outline-none focus:border-[#F29455] text-gray-600 shadow-sm"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        {/* fecha de nacimiento */}
        <div className="relative w-full">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4">
            <Calendar size={20} className="text-gray-400" />
          </span>
          <input
            type="date"
            className="border border-gray-300 rounded-[15px] py-3 pl-12 pr-6 w-full focus:outline-none focus:border-[#F29455] text-gray-400 shadow-sm"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </div>

        {/* dni */}
        <div className="relative w-full">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4">
            <IdCard size={20} className="text-gray-400" />
          </span>
          <input
            type="text"
            placeholder="DNI"
            className="border border-gray-300 rounded-[15px] py-3 pl-12 pr-6 w-full focus:outline-none focus:border-[#F29455] text-gray-600 shadow-sm"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
          />
        </div>

        {/* contacto */}
        <div className="relative w-full">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4">
            <Phone size={20} className="text-gray-400" />
          </span>
          <input
            type="text"
            placeholder="Teléfono"
            className="border border-gray-300 rounded-[15px] py-3 pl-12 pr-6 w-full focus:outline-none focus:border-[#F29455] text-gray-600 shadow-sm"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>

      {/*sexo */}
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

      {/* navegación*/}
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