import { useState } from "react";

export function RegisterThirdStep({ handlerSecondStep, handleRegister }) {
  const [petName, setPetName] = useState("");
  const [petBirthDate, setPetBirthDate] = useState("");
  const [petType, setPetType] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [petGender, setPetGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(petName, petBirthDate, petType, petBreed, petGender);
  };

  const handleBack = (e) => {
    e.preventDefault();
    handlerSecondStep();
  };

  return (
    <div className="flex flex-col w-full gap-3">
      <input
        type="text"
        placeholder="🐶 Nombre de la Mascota"
        className="border border-gray-300 rounded-[15px] py-3 px-6 w-full focus:outline-none focus:border-[#F29455] text-gray-600 shadow-sm"
        value={petName}
        onChange={(e) => setPetName(e.target.value)}
      />
      
      <input
        type="date"
        className="border border-gray-300 rounded-[15px] py-3 px-6 w-full focus:outline-none focus:border-[#F29455] text-gray-400 shadow-sm"
        value={petBirthDate}
        onChange={(e) => setPetBirthDate(e.target.value)}
      />

      <select
        className="border border-gray-300 rounded-[15px] py-3 px-6 w-full focus:outline-none focus:border-[#F29455] text-gray-400 shadow-sm bg-white cursor-pointer"
        value={petType}
        onChange={(e) => setPetType(e.target.value)}
      >
        <option value="">Tipo de mascota</option>
        <option value="perro">Perro</option>
        <option value="gato">Gato</option>
        <option value="ave">Ave</option>
        <option value="roedor">Roedor</option>
      </select>

      <input
        type="text"
        placeholder="🦴 Raza de la Mascota"
        className="border border-gray-300 rounded-[15px] py-3 px-6 w-full focus:outline-none focus:border-[#F29455] text-gray-600 shadow-sm"
        value={petBreed}
        onChange={(e) => setPetBreed(e.target.value)}
      />

      <select
        className="border border-gray-300 rounded-[15px] py-3 px-6 w-full focus:outline-none focus:border-[#F29455] text-gray-400 shadow-sm bg-white cursor-pointer"
        value={petGender}
        onChange={(e) => setPetGender(e.target.value)}
      >
        <option value="">Sexo</option>
        <option value="macho">Macho</option>
        <option value="hembra">Hembra</option>
      </select>

      <div className="flex items-center justify-between mt-6 gap-4">
        <button
          className="rounded-[100px] border-2 border-[#F29455] text-[#F29455] font-bold bg-white w-1/2 py-3 transition-all active:scale-95"
          onClick={handleBack}
        >
          Atrás
        </button>
        <button
          className="rounded-[100px] bg-[#32ACDC] text-white font-bold w-1/2 py-3 shadow-md transition-all active:scale-95"
          onClick={handleSubmit}
        >
          Regístrate
        </button>
      </div>
    </div>
  );
}