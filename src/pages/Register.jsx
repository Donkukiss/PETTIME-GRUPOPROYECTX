import { useState } from "react";
import { RegisterFirstStep } from "../components/register/FirstStep";
import { RegisterSecondStep } from "../components/register/SecondStep";
import { RegisterThirdStep } from "../components/register/ThirdStep";
import { useNavigate, Link } from "react-router-dom";

export function Register() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isCompleteStepOne, setIsCompleteStepOne] = useState(false);
  const [isCompleteStepTwo, setIsCompleteStepTwo] = useState(false);
  const [formRegister, setFormRegister] = useState({
    email: "", password: "", name: "", lastName: "", birthDate: "", dni: "", phone: "", gender: "",
  });

  const handleSecondStep = (email, password) => {
    setFormRegister({ ...formRegister, email, password });
    setIsCompleteStepOne(true);
    setStep(2);
  };

  const handleFirstStep = () => {
    setIsCompleteStepTwo(false);
    setStep(1);
  };

  const handleBackToSecondStep = () => {
    setIsCompleteStepTwo(false);
    setStep(2);
  };

  const handleThirdStep = (name, lastName, birthDate, dni, phone, gender) => {
    setFormRegister({ ...formRegister, name, lastName, birthDate, dni, phone, gender });
    setIsCompleteStepTwo(true);
    setStep(3);
  };

  const handleRegister = (petName, petBirthDate, petType, petBreed, petGender) => {
    const finalForm = { ...formRegister, petName, petBirthDate, petType, petBreed, petGender };
    console.log(finalForm);
    navigate("/home");
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 bg-[#EDF1F6] overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-[50%] bg-[url(/fondo-mascotas.svg)] bg-cover bg-center" />
      <div className="absolute top-0 left-0 w-full h-[50%] bg-[#FF8A65] opacity-40 mix-blend-multiply" />

      {/* 1. LOGO AFUERA (Se mantiene arriba de la tarjeta blanca) */}
      <div className="relative z-20 mb-[2px]"> 
        <img src="logo-fondo-blanco.svg" alt="Logo" className="w-40 h-40" />
      </div>

      {/* 2. CUADRO BLANCO (Tarjeta) */}
      <div className="relative z-10 bg-white w-full max-w-[420px] rounded-[30px] top-4 p-6 flex flex-col items-center shadow-2xl">
        
        <h1 className="text-[#F29455] text-[28px] font-bold mb-4 text-center">
          {step === 1 ? "Datos de la sesión" : step === 2 ? "Datos del dueño" : "Datos tu mascota"}
        </h1>

        <div className="flex items-center justify-center gap-4 mb-8">
          <div className={`rounded-full w-10 h-10 flex items-center justify-center font-bold ${step === 1 ? "bg-[#32ACDC] text-white" : isCompleteStepOne ? "bg-[#96C268] text-white" : "bg-gray-100 text-gray-400"}`}>1</div>
          <div className={`rounded-full w-10 h-10 flex items-center justify-center font-bold ${step === 2 ? "bg-[#32ACDC] text-white" : isCompleteStepTwo ? "bg-[#96C268] text-white" : "bg-gray-100 text-gray-400"}`}>2</div>
          <div className={`rounded-full w-10 h-10 flex items-center justify-center font-bold ${step === 3 ? "bg-[#32ACDC] text-white" : "bg-gray-100 text-gray-400"}`}>3</div>
        </div>

        <div className="w-full">
          {step === 1 ? (
            <RegisterFirstStep handleSecondStep={handleSecondStep} />
          ) : step === 2 ? (
            <RegisterSecondStep handlerFirstStep={handleFirstStep} handleThirdStep={handleThirdStep} />
          ) : (
            <RegisterThirdStep handlerSecondStep={handleBackToSecondStep} handleRegister={handleRegister} />
          )}
        </div>

        <div className="mt-8 text-center">
          <span className="text-[#A8AFB9] font-semibold text-sm">
            ¿Ya tienes una cuenta?{" "}
            <Link to="/login" className="text-[#F29455] hover:underline">
              Iniciar Sesión
            </Link>
          </span>
        </div>

      </div>
    </div>
  );
}