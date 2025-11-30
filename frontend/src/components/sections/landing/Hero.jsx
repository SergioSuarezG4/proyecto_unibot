import { NavLink } from "react-router";
import { MessageSquareMore } from 'lucide-react';

const Hero = () => {
  return (
     <section id="home" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 mb-20">
      <div className="max-w-6xl mx-auto mt-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 me-20">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight text-balance">
              Tu asistente universitario con IA
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Pregunta sobre salones, edificios, procesos académicos y recibe respuestas al instante. Disponible 24/7
              para ayudarte con toda la información que necesites.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <NavLink to="/chat">
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg transition-colors font-semibold shadow-sm hover:shadow-md w-full sm:w-auto">
                  Hablar con el Chatbot
                </button>
              </NavLink>
            </div>
          </div>

          <div
            className="w-[400px] h-[380px] bg-muted rounded-2xl shadow-md border border-gray-200 flex flex-col items-center justify-center text-center 
    hover:shadow-lg transition"
          >
            <div className="w-24 h-24 bg-teal-400 flex items-center justify-center rounded-full" />
            <MessageSquareMore/>
            <h3 className="mt-6 text-xl font-semibold text-gray-800">
              Asistencia Inteligente 24/7
            </h3>

            <p className="text-base text-gray-500 mt-1">
              Respuestas en segundos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
