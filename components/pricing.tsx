"use client"

import { Check, Star, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Básico",
    price: "149.000",
    period: "mes",
    description: "Perfecto para docentes individuales",
    features: [
      "Hasta 30 estudiantes",
      "Evaluaciones básicas",
      "Dashboard simple",
      "Soporte por WhatsApp",
      "Biblioteca básica de textos",
    ],
    popular: false,
    color: "from-gray-500 to-gray-600",
  },
  {
    name: "Profesional",
    price: "389.000",
    period: "mes",
    description: "Ideal para aulas y coordinaciones",
    features: [
      "Hasta 150 estudiantes",
      "Evaluaciones avanzadas con IA",
      "Analytics completos",
      "Soporte prioritario",
      "Biblioteca completa",
      "Informes personalizados",
      "Integración con plataformas LMS",
    ],
    popular: true,
    color: "from-blue-500 to-purple-500",
  },
  {
    name: "Institucional",
    price: "989.000",
    period: "mes",
    description: "Para colegios y secretarías completas",
    features: [
      "Estudiantes ilimitados",
      "IA avanzada personalizada",
      "Dashboard ejecutivo",
      "Soporte dedicado 24/7",
      "Biblioteca premium",
      "API personalizada",
      "Capacitación incluida",
      "Consultoría pedagógica",
    ],
    popular: false,
    color: "from-purple-500 to-pink-500",
  },
]

export default function Pricing() {
  return (
    <section id="precios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            💰 Planes y Precios
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Elige el plan{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              perfecto para ti
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Planes flexibles diseñados para adaptarse a las necesidades de cualquier institución educativa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl border-2 p-8 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl ${
                plan.popular ? "border-blue-200 shadow-xl scale-105" : "border-gray-200 hover:border-blue-200 shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Más Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-5xl font-bold text-gray-900">$COP {plan.price}</span>
                  <span className="text-gray-600 ml-2">/{plan.period}</span>
                </div>
                <p className="text-sm text-gray-500">por institución</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-200 ${
                  plan.popular
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white transform hover:scale-105 shadow-lg hover:shadow-xl"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-900 hover:shadow-lg"
                }`}
              >
                {plan.popular ? (
                  <>
                    <Zap className="mr-2 h-5 w-5" />
                    Comenzar Ahora
                  </>
                ) : (
                  "Seleccionar Plan"
                )}
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">¿Necesitas un plan personalizado?</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Para secretarías de educación o instituciones con necesidades específicas, ofrecemos planes empresariales
              personalizados
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="rounded-full px-8 py-4 text-lg font-semibold border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50"
              >
                Contactar Ventas
              </Button>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full px-8 py-4 text-lg font-semibold">
                Solicitar Cotización
              </Button>
            </div>
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-green-100 text-green-700 px-6 py-3 rounded-full">
            <Check className="h-5 w-5 mr-2" />
            Garantía de devolución de 30 días • Sin compromiso • Cancela cuando quieras
          </div>
        </div>
      </div>
    </section>
  )
}
