import { useState } from "react";
import { Dog, Calendar, PawPrint, Bone, Mars } from "lucide-react";

export function RegisterThirdStep({ handlerSecondStep, handleRegister }) {
  const [petName, setPetName] = useState("");
  const [petBirthDate, setPetBirthDate] = useState("");
  const [petType, setPetType] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [petGender, setPetGender] = useState("");

  // envía info final para el registro
  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(petName, petBirthDate, petType, petBreed, petGender);
  };

  // vuelve al form del dueño
  const handleBack = (e) => {
    e.preventDefault();
    handlerSecondStep();
  };

  return (
    <div className="flex flex-col w-full gap-3">

      {/* nombremascota */}
      <div className="relative w-full">
        <span className="absolute inset-y-0 left-0 flex items-center pl-4">
          <Dog size={20} className="text-gray-400" />
        </span>
        <input
          type="text"
          placeholder="Nombre de la Mascota"
          className="border border-gray-300 rounded-[15px] py-3 pl-12 pr-6 w-full focus:outline-none focus:border-[#F29455] text-gray-600 shadow-sm"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
        />
      </div>

      {/* fecha nacimiento mascota */}
      <div className="relative w-full">
        <span className="absolute inset-y-0 left-0 flex items-center pl-4">
          <Calendar size={20} className="text-gray-400" />
        </span>
        <input
          type="date"
          className="border border-gray-300 rounded-[15px] py-3 pl-12 pr-6 w-full focus:outline-none focus:border-[#F29455] text-gray-400 shadow-sm"
          value={petBirthDate}
          onChange={(e) => setPetBirthDate(e.target.value)}
        />
      </div>

      {/* selectorde animal*/}
      <div className="relative w-full">
        <span className="absolute inset-y-0 left-0 flex items-center pl-4">
          <PawPrint size={20} className="text-gray-400 pointer-events-none" />
        </span>
        <select
          className="border border-gray-300 rounded-[15px] py-3 pl-12 pr-6 w-full focus:outline-none focus:border-[#F29455] text-gray-400 shadow-sm bg-white cursor-pointer appearance-none"
          value={petType}
          onChange={(e) => setPetType(e.target.value)}
        >
          <option value="">Tipo de mascota</option>
          <option value="perro">Perro</option>
          <option value="gato">Gato</option>
          <option value="ave">Ave</option>
          <option value="roedor">Roedor</option>
        </select>
      </div>

      {/* raza */}
      <div className="relative w-full">
        <span className="absolute inset-y-0 left-0 flex items-center pl-4">
          <Bone size={20} className="text-gray-400" />
        </span>
        <input
          type="text"
          placeholder="Raza de la Mascota"
          className="border border-gray-300 rounded-[15px] py-3 pl-12 pr-6 w-full focus:outline-none focus:border-[#F29455] text-gray-600 shadow-sm"
          value={petBreed}
          onChange={(e) => setPetBreed(e.target.value)}
        />
      </div>

      {/*sexo mascota */}
      <div className="relative w-full">
        <span className="absolute inset-y-0 left-0 flex items-center pl-4">
          <Mars size={20} className="text-gray-400 pointer-events-none" />
        </span>
        <select
          className="border border-gray-300 rounded-[15px] py-3 pl-12 pr-6 w-full focus:outline-none focus:border-[#F29455] text-gray-400 shadow-sm bg-white cursor-pointer appearance-none"
          value={petGender}
          onChange={(e) => setPetGender(e.target.value)}
        >
          <option value="">Sexo</option>
          <option value="macho">Macho</option>
          <option value="hembra">Hembra</option>
        </select>
      </div>

      {/* botones navegacion */}
      <div className="flex items-center justify-between mt-6 gap-4">
        <button
          type="button"
          className="rounded-[100px] border-2 border-[#F29455] text-[#F29455] font-bold bg-white w-1/2 py-3 transition-all active:scale-95"
          onClick={handleBack}
        >
          Atrás
        </button>
        <button
          type="submit"
          className="rounded-[100px] bg-[#32ACDC] text-white font-bold w-1/2 py-3 shadow-md transition-all active:scale-95"
          onClick={handleSubmit}
        >
          Regístrate
        </button>
      </div>
    </div>
  );
}