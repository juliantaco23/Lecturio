"use client"

import { BookOpen, Brain, BarChart3, Users, Target, Zap } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Niveles de Lectura Adaptativos",
    description:
      "Nuestra IA ajusta automáticamente la dificultad del contenido según el progreso individual de cada estudiante, asegurando un aprendizaje óptimo.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Target,
    title: "Evaluaciones Automatizadas",
    description:
      "Sistema de evaluación inteligente que genera preguntas personalizadas y proporciona retroalimentación instantánea para mejorar la comprensión.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: BarChart3,
    title: "Dashboards para Escuelas",
    description:
      "Paneles analíticos completos que permiten a los educadores monitorear el progreso, identificar áreas de mejora y tomar decisiones basadas en datos.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Users,
    title: "Gestión de Aulas",
    description:
      "Herramientas colaborativas que facilitan la administración de múltiples aulas, asignación de tareas y seguimiento del rendimiento grupal.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: BookOpen,
    title: "Biblioteca Digital",
    description:
      "Acceso a miles de textos educativos organizados por nivel, tema y dificultad, con contenido actualizado constantemente.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Zap,
    title: "Retroalimentación Instantánea",
    description:
      "Los estudiantes reciben comentarios inmediatos sobre su desempeño, con sugerencias específicas para mejorar sus habilidades de lectura.",
    color: "from-yellow-500 to-orange-500",
  },
]

export default function Features() {
  return (
    <section id="caracteristicas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            ✨ Características Principales
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Todo lo que necesitas para{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              transformar la educación
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            LecturioApp combina inteligencia artificial avanzada con pedagogía moderna para crear una experiencia de
            aprendizaje personalizada y efectiva.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div
                className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-200`}
              >
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              ¿Listo para revolucionar la comprensión lectora?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Únete a cientos de escuelas que ya están transformando la educación con LecturioApp
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              Solicitar Demo Personalizada
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
