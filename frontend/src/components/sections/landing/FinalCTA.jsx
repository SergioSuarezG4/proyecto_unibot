const FinalCTA = () => {
    return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-card to-muted">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">Haz tu pregunta ahora</h2>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
          Obtén información en segundos. UniBot está disponible 24/7 para ayudarte con todas tus dudas académicas y
          necesidades universitarias.
        </p>
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-lg transition-colors font-bold text-lg inline-block shadow-md hover:shadow-lg">
            Usar Chatbot
          </button>
        <p className="text-muted-foreground text-sm mt-6">Acceso seguro y rápido.</p>
      </div>
    </section>
    )
}

export default FinalCTA;