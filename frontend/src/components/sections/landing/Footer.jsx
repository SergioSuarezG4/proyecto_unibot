import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "../../ui/Logo";

export function Footer() {
  return (
    <footer id="contacto"className="bg-[#1a2a29] text-[#a8c8c5] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Información y Logo */}
          <div>
            <Logo textColor="text-white" showText={true} />
            <p className="text-sm leading-relaxed mt-4">
              Plataforma académica creada por{" "}
              <span className="font-bold">
                Sergio Suárez y Sebastian Suárez, Juan Jose Arias
              </span>
              . Asistencia inteligente para estudiantes universitarios.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-bold text-white mb-4">Sergio Suarez</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <span>chechonieto235@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <span>+57 314 838 7013</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <span>Manizales, Colombia</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Sebastian Suarez</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <span>sebasual2006@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <span>+57 315 567 9452</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <span>Manizales, Colombia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8 text-sm text-center md:text-left">
          <p>
            &copy; 2025 UniBot • Creado por Sergio Suárez Y Sebastian Suárez
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
