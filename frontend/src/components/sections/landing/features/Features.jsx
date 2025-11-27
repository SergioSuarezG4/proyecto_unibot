import { MapPin, Clock, Building2, Zap } from "lucide-react"
import CardFeatures from "./CardFeatures";

const features = [
  {icon: MapPin,title: "Ubicacion de Espacios", description: "Encuentra rapidamente la ubicacion de edificios, salones y dependencias del campus.",},
  {
    icon: Clock,
    title: "Horarios y Procesos",
    description: "Accede a informacion sobre horarios, calendarios academicos y procedimientos.",
  },
  {
    icon: Building2,
    title: "Informacion Institucional",
    description: "Conoce los servicios, dependencias y recursos disponibles en la universidad.",
  },
  {
    icon: Zap,
    title: "Respuestas Instantaneas",
    description: "Obten respuestas claras y precisas basadas en inteligencia artificial avanzada.",
  },
]
const Features = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 mt-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Funcionalidades Principales
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Disenado para simplificar tu experiencia academica con herramientas
            inteligentes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
                return (
                    <CardFeatures
                    key={index}
                    title={feature.title}
                    description={feature.description}
                    icon={feature.icon}
                    />
                )
            })}
        </div>
      </div>
    </section>
  );
};
export default Features;