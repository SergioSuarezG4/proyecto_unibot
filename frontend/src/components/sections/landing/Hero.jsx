const Hero = () => {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center h-full -translate-y-6 ">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight text-balance">
              Tu asistente universitario con IA
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mt-3">
              Pregunta sobre salones, edificios, procesos academicos y recibe respuestas al instante. Disponible 24/7 para ayudarte con toda la informacion 
              que necesites
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-7">
              <button className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-teal-300 text-white rounded-lg font-medium shadow-md">
                Hablar con el ChatBOT
              </button>
            </div>
          </div>

          <div
            className="w-[400px] h-[380px] bg-white rounded-2xl shadow-md border border-gray-200 flex flex-col items-center justify-center text-center 
    hover:shadow-lg transition"
          >
            <div className="w-24 h-24 bg-teal-400 flex items-center justify-center rounded-full" />

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
