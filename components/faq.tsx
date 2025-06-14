"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "¿Cómo funciona la personalización con IA de LecturioApp?",
    answer:
      "Nuestra inteligencia artificial analiza el rendimiento de cada estudiante en tiempo real, ajustando automáticamente la dificultad de los textos, el tipo de preguntas y el ritmo de aprendizaje. El sistema identifica fortalezas y debilidades específicas para crear una experiencia de aprendizaje única para cada estudiante.",
  },
  {
    question: "¿Qué tipo de soporte técnico ofrecen?",
    answer:
      "Ofrecemos soporte técnico completo que incluye: documentación detallada, tutoriales en video, soporte por WhatsApp (respuesta en 4h), chat en vivo durante horario laboral, y para planes institucionales, soporte telefónico dedicado 24/7 con un gestor de cuenta asignado.",
  },
  {
    question: "¿Se integra LecturioApp con otros sistemas educativos?",
    answer:
      "Sí, LecturioApp se integra fácilmente con los principales sistemas de gestión de aprendizaje (LMS) como Moodle, Canvas, Google Classroom y Microsoft Teams. También ofrecemos API personalizada para integraciones específicas con sistemas propietarios de las instituciones.",
  },
  {
    question: "¿Cómo garantizan la privacidad y seguridad de los datos?",
    answer:
      "La seguridad es nuestra prioridad. Cumplimos con la Ley de Protección de Datos Personales de Colombia (Ley 1581). Utilizamos encriptación de extremo a extremo, servidores seguros, auditorías de seguridad regulares y nunca compartimos datos de estudiantes con terceros.",
  },
  {
    question: "¿Puedo probar LecturioApp antes de comprometerme?",
    answer:
      "¡Por supuesto! Ofrecemos una prueba gratuita de 15 días sin necesidad de tarjeta de crédito. Durante este período tendrás acceso completo a todas las funcionalidades del plan Profesional, incluyendo soporte técnico completo.",
  },
  {
    question: "¿Qué grados y niveles educativos cubre la plataforma?",
    answer:
      "LecturioApp está diseñado para estudiantes desde transición (5 años) hasta grado 11 (17 años). Nuestro contenido abarca desde niveles de lectura básicos hasta textos académicos avanzados, adaptándose automáticamente al nivel de cada estudiante según los estándares del MEN.",
  },
  {
    question: "¿Cómo se realiza la capacitación del personal docente?",
    answer:
      "Incluimos capacitación completa con todos nuestros planes: webinars de introducción, sesiones de entrenamiento personalizadas, materiales de apoyo descargables, y acceso a nuestra academia online con cursos certificados para maximizar el uso de la plataforma.",
  },
  {
    question: "¿La plataforma está alineada con los estándares del MEN?",
    answer:
      "Sí, LecturioApp está completamente alineada con los Estándares Básicos de Competencias del Lenguaje del Ministerio de Educación Nacional. Nuestro contenido y evaluaciones siguen los Derechos Básicos de Aprendizaje (DBA) y están diseñados para apoyar las Pruebas Saber.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            ❓ Preguntas Frecuentes
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Resolvemos tus{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              dudas más comunes
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encuentra respuestas a las preguntas más frecuentes sobre LecturioApp y cómo puede transformar tu
            institución educativa
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 hover:border-blue-200 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <button
                  className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-2xl"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">{faq.question}</h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="h-6 w-6 text-blue-500" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-gray-400" />
                    )}
                  </div>
                </button>

                {openIndex === index && (
                  <div className="px-8 pb-6">
                    <div className="border-t border-gray-100 pt-6">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              ¿No encuentras la respuesta que buscas?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Nuestro equipo de expertos está aquí para ayudarte. Contáctanos y te responderemos en menos de 24 horas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                Contactar Soporte
              </button>
              <button className="border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200">
                Programar Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
