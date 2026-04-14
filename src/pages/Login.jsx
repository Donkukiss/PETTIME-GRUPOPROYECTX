import { Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";

export function Login() {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-6 bg-[#EDF1F6] overflow-hidden">

      {/* Imagen de fondo*/}
      <div className="absolute top-0 left-0 w-full h-[30%] bg-[url(/fondo-mascotas.svg)] bg-cover bg-center" />

      {/* capa naranja superior */}
      <div className="absolute top-0 left-0 w-full h-[30%] bg-[#F29455] opacity-40 mix-blend-multiply" />

      {/* margen blanco fondo */}
      <div className="relative z-10 bg-white w-full max-w-[400px] rounded-[30px] top-5 p-8 flex flex-col items-center shadow-2xl">

        {/* Logo PetTime */}
        <img src="/Logo-PetTime.svg" alt="Logo" className="w-45 mb-0 mt-[-35px]" />

        <h1 className="text-[#F29455] text-[32px] font-bold mb-6">Iniciar Sesión</h1>

        <form className="w-full flex flex-col gap-4">

          {/*Email */}
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4">
              <Mail size={20} className="text-gray-400" />
            </span>
            <input
              type="email"
              placeholder="Correo"
              className="border border-gray-300 rounded-[15px] py-3 pl-12 pr-6 w-full focus:outline-none focus:border-[#F29455] text-gray-600 shadow-sm"
            />
          </div>

          {/*contraseña */}
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4">
              <Lock size={20} className="text-gray-400" />
            </span>
            <input
              type="password"
              placeholder="Contraseña"
              className="border border-gray-300 rounded-[15px] py-3 pl-12 pr-6 w-full focus:outline-none focus:border-[#F29455] text-gray-600 shadow-sm"
            />
          </div>

          <span className="text-right text-gray-400 text-[13px] font-semibold cursor-pointer hover:text-gray-500">
            ¿Olvidaste tu contraseña?
          </span>

          <button
            type="submit"
            className="bg-[#32ACDC] text-white font-bold py-3 rounded-[100px] mt-2 text-lg shadow-md active:scale-95 transition-transform"
          >
            Iniciar Sesión
          </button>

          {/* boton redes */}
          <button
            type="button"
            className="border border-gray-300 rounded-[100px] py-3 w-full flex items-center justify-center gap-3 font-semibold text-gray-600 hover:bg-gray-50 active:scale-95 transition-all shadow-sm"
          >
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
            Continuar con Google
          </button>

          <button
            type="button"
            className="border border-gray-300 rounded-[100px] py-3 w-full flex items-center justify-center gap-3 font-semibold text-gray-600 hover:bg-gray-50 active:scale-95 transition-all shadow-sm"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Apple_logo_grey.svg" alt="Apple" className="w-5 h-5 mb-1" />
            Continuar con ICloud
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-[#A8AFB9] font-semibold text-sm">
            ¿No tienes una cuenta?{" "}
            <Link to="/register" className="text-[#F29455] font-semibold hover:underline">
              Regístrate
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}