import { NavLink } from "react-router";
import Logo from "../ui/Logo";

const NavBar = () => {
  const navItems = [
    { name: "Inicio", href: "#home" },
    { name: "Funciones", href: "#funciones" },
    { name: "Como Funciona", href: "#details" },
    { name: "Contacto", href: "#contacto" },
  ];
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* 1. Logo/Marca: Ahora también un NavLink para volver a Inicio */}
        <NavLink to="/" className="flex items-center space-x-3">
          <Logo></Logo>
        </NavLink>

        {/* 2. Enlaces de Navegación (visible en pantallas medianas/grandes) */}
        <div className="hidden md:flex items-center space-x-8 text-gray-400 font-medium">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="hover:text-teal-500">
              {item.name}
            </a>
          ))}
        </div> 

        {/* 3. Botón de Acción */}
        <div>
          <NavLink to="/chat">
            <button className="px-6 py-2 bg-teal-400 hover:bg-teal-500 text-white font-semibold rounded-lg shadow-md transition duration-200 ease-in-out">
              Probar Chatbot
            </button>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
