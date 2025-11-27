import { MessageCircle, Brain, CheckCircle } from "lucide-react"
import DetailsItem from "./DetailsItem";

const steps = [
  {
    icon: MessageCircle,
    title: "Escribe tu pregunta",
    description: "Formula cualquier pregunta sobre la universidad, espacios o procesos academicos",
  },
  {
    icon: Brain,
    title: "La IA analiza",
    description: "Nuestro modelo procesa tu pregunta e identifica la informacion relevante",
  },
  {
    icon: CheckCircle,
    title: "Obten respuesta clara",
    description: "Recibe una respuesta precisa y util al instante",
  },
]
const Details = () => {
    return (
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-card to-muted">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">Como Funciona</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Tres simples pasos para obtener la informacion que necesitas
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) =>{
                      return (
                        <DetailsItem
                          key={index}
                          title={step.title}
                          description={step.description}
                          icon={step.icon}
                        />
                      )
                    })}
                </div>
            </div>
        </section>
    )
};
export default Details;