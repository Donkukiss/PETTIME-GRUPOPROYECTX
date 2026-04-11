import { Link } from "react-router-dom";

export function Login() {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-6 bg-[#EDF1F6] overflow-hidden">

      <div
        className="absolute top-0 left-0 w-full h-[30%] bg-[url(/fondo-mascotas.svg)] bg-cover bg-center"
      />

      <div
        className="absolute top-0 left-0 w-full h-[30%] bg-[#F29455] opacity-40 mix-blend-multiply"
      />

      <div className="relative z-10 bg-white w-full max-w-[400px] rounded-[30px] top-5 p-6 flex flex-col items-center shadow-2xl">

        <img src="Logo-PetTime.svg" alt="Logo" className="w-32 mb-0" />

        <h1 className="text-[#F29455] text-[32px] font-bold mb-2">Iniciar Sesión</h1>

        <form className="w-full flex flex-col gap-4">
          <input
            type="text"
            placeholder="✉️ Correo"
            className="border border-gray-300 rounded-[15px] py-3 px-6 w-full focus:outline-none focus:border-[#F29455]"
          />

          <input
            type="password"
            placeholder="🔒 Contraseña"
            className="border border-gray-300 rounded-[15px] py-3 px-6 w-full focus:outline-none focus:border-[#F29455]"
          />

          <span className="text-right text-gray-400 text-sm font-semibold">
            ¿Olvidaste tu contraseña?
          </span>

          <button type="submit" className="bg-[#32ACDC] text-white font-bold py-3 rounded-[100px] mt-4 text-lg">
            Iniciar Sesión
          </button>

          <button className="border border-gray-300 rounded-[100px] py-3 w-full flex items-center justify-center gap-2 font-semibold text-gray-600 mt-2">
            Continuar con Google
          </button>

          <button className="border border-gray-300 rounded-[100px] py-3 w-full flex items-center justify-center gap-2 font-semibold text-gray-600">
            Continuar con Apple
          </button>
        </form>

        <div className="mt-6">
          <p className="text-[#A8AFB9] font-semibold text-sm">
            ¿No tienes una cuenta? <Link to="/register" className="text-[#F29455]">Regístrate</Link>
          </p>
        </div>

      </div>
    </div>
  );
}