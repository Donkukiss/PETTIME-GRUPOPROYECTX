import { useState, useEffect } from "react";
import { RegisterFirstStep } from "../components/register/FirstStep";
import { RegisterSecondStep } from "../components/register/SecondStep";
import { RegisterThirdStep } from "../components/register/ThirdStep";
import { useNavigate, Link } from "react-router-dom";

export function Register() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formRegister, setFormRegister] = useState({
    email: "",
    password: "",
    name: "",
    lastName: "",
    birthDate: "",
    dni: "",
    phone: "",
    gender: "",
  });
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);
 
  const handleSecondStep = (email, password) => {
    setFormRegister({ ...formRegister, email, password });
    setStep(2);
  };

  const handleFirstStep = () => {
    setStep(1);
  };

  const handleBackToSecondStep = () => {
    setStep(2);
  };

  const handleThirdStep = (name, lastName, birthDate, dni, phone, gender) => {
    setFormRegister({ ...formRegister, name, lastName, birthDate, dni, phone, gender });
    setStep(3);
  };

  const handleRegister = (petName, petBirthDate, petType, petBreed, petGender) => {
    const finalForm = { ...formRegister, petName, petBirthDate, petType, petBreed, petGender };
    console.log("Formulario enviado:", finalForm);
    navigate("/home");
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 bg-[#EDF1F6] overflow-hidden">

      {/* fondo mascotas */}
      <div className="absolute top-0 left-0 w-full h-[50%] bg-[url(/fondo-mascotas.svg)] bg-cover bg-center" />
      <div className="absolute top-0 left-0 w-full h-[50%] bg-[#FF8A65] opacity-40 mix-blend-multiply" />

      {/* logo principal */}
      <div className="relative z-20 mb-[-10px]">
        <img src="/logo-fondo-blanco.svg" alt="Logo" className="w-44 h-44 object-contain" />
      </div>

      {/* margen blanco fondo */}
      <div className="relative z-10 bg-white w-full max-w-[420px] rounded-[35px] p-8 flex flex-col items-center shadow-2xl mt-5">

        <h1 className="text-[#F29455] text-[24px] font-bold mb-8 text-center uppercase tracking-tight">
          {step === 1 ? "Datos de la sesión" : step === 2 ? "Datos del dueño" : "Datos de tu mascota"}
        </h1>

        {/* huellas */}
        <div className="flex items-center justify-center w-full mb-10 px-4">
         
          <div className="relative flex flex-col items-center">
            <div className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-50">
              <img
                src={step === 1 ? "/huella-activa.svg" : "/huella-culminada.svg"}
                className="w-10 h-10 object-contain"
                alt="Paso 1"
              />
              <span className="absolute inset-0 flex items-center justify-center text-white font-semibold text-lg mt-4.5">
                1
              </span>
            </div>
          </div>

          <div className={`flex-1 h-[2px] mx-1 mt-0 ${step >= 2 ? "bg-[#32ACDC]" : "bg-gray-200"}`} />
        
          <div className="relative flex flex-col items-center">
            <div className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-50">
              <img
                src={step === 2 ? "/huella-activa.svg" : step > 2 ? "/huella-culminada.svg" : "/huella-pendiente.svg"}
                className="w-10 h-10 object-contain"
                alt="Paso 2"
              />
              <span className={`font-semibold text-lg mt-4.5 absolute inset-0 flex items-center justify-center font-black text-lg mt-1 ${step >= 2 ? "text-white" : "text-gray-400"}`}>
                2
              </span>
            </div>
          </div>

          <div className={`flex-1 h-[2px] mx-1 mt-0 ${step >= 3 ? "bg-[#32ACDC]" : "bg-gray-200"}`} />
         
          <div className="relative flex flex-col items-center">
            <div className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-50">
              <img
                src={step === 3 ? "/huella-activa.svg" : "/huella-pendiente.svg"}
                className="w-10 h-10 object-contain"
                alt="Paso 3"
              />
              <span className={`font-semibold text-lg mt-4.5 absolute inset-0 flex items-center justify-center font-black text-lg mt-1 ${step === 3 ? "text-white" : "text-gray-400"}`}>
                3
              </span>
            </div>
          </div>
        </div>

        {/* cambio de formularios */}
        <div className="w-full">
          {step === 1 && <RegisterFirstStep handleSecondStep={handleSecondStep} />}
          {step === 2 && <RegisterSecondStep handlerFirstStep={handleFirstStep} handleThirdStep={handleThirdStep} />}
          {step === 3 && <RegisterThirdStep handlerSecondStep={handleBackToSecondStep} handleRegister={handleRegister} />}
        </div>

        {/* footer*/}
        <div className="mt-10 text-center">
          <p className="text-[#A8AFB9] font-semibold text-sm">
            ¿Ya tienes una cuenta?{" "}
            <Link to="/login" className="text-[#F29455] font-semibold hover:underline ml-1">
              Iniciar Sesión
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}