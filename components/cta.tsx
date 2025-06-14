"use client"

import { ArrowRight, BookOpen, Users, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-white rounded-full"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 border border-white rounded-full"></div>
        <div className="absolute bottom-32 right-10 w-24 h-24 border border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Transforma la educación{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              hoy mismo
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Únete a más de 200 colegios en Medellín y Antioquia que ya están revolucionando la comprensión lectora con
            inteligencia artificial y metodologías pedagógicas avanzadas
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4 group-hover:bg-white/20 transition-all duration-200 transform group-hover:scale-105">
              <BookOpen className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Lectura Personalizada</h3>
              <p className="text-blue-100">IA que adapta el contenido al nivel de cada estudiante</p>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4 group-hover:bg-white/20 transition-all duration-200 transform group-hover:scale-105">
              <BarChart3 className="h-12 w-12 text-green-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Analytics Avanzados</h3>
              <p className="text-blue-100">Dashboards completos para tomar decisiones basadas en datos</p>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4 group-hover:bg-white/20 transition-all duration-200 transform group-hover:scale-105">
              <Users className="h-12 w-12 text-pink-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Gestión Integral</h3>
              <p className="text-blue-100">Herramientas colaborativas para toda la institución</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-10 py-6 text-xl font-bold transform hover:scale-105 transition-all duration-200 shadow-2xl hover:shadow-3xl"
            >
              Comenzar Prueba Gratuita
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 rounded-full px-10 py-6 text-xl font-bold transition-all duration-200"
            >
              Solicitar Demo
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-blue-100">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <span>14 días gratis</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <span>Sin tarjeta de crédito</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <span>Soporte incluido</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <span>Cancela cuando quieras</span>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">200+</div>
              <div className="text-blue-200">Colegios Activos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">25K+</div>
              <div className="text-blue-200">Estudiantes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">97%</div>
              <div className="text-blue-200">Satisfacción</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">42%</div>
              <div className="text-blue-200">Mejora Promedio</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
