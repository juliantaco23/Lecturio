"use client"

import { ArrowRight, Play, BookOpen, Users, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section id="inicio" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                🚀 Revoluciona la comprensión lectora
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Mejora la{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  comprensión lectora
                </span>{" "}
                con IA
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Plataforma educativa que utiliza inteligencia artificial para crear evaluaciones personalizadas y
                dashboards analíticos que ayudan a escuelas y estudiantes a mejorar sus habilidades de lectura.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Comenzar Prueba Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-4 text-lg font-semibold border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200"
              >
                <Play className="mr-2 h-5 w-5" />
                Ver Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-blue-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">200+</div>
                <div className="text-sm text-gray-600">Colegios</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">25K+</div>
                <div className="text-sm text-gray-600">Estudiantes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">96%</div>
                <div className="text-sm text-gray-600">Satisfacción</div>
              </div>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
                  <BookOpen className="h-12 w-12 text-blue-500 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Lectura Adaptativa</h3>
                  <p className="text-sm text-gray-600">Contenido personalizado según el nivel</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 mt-8">
                  <BarChart3 className="h-12 w-12 text-purple-500 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Analytics</h3>
                  <p className="text-sm text-gray-600">Dashboards detallados</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 -mt-4">
                  <Users className="h-12 w-12 text-green-500 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Colaborativo</h3>
                  <p className="text-sm text-gray-600">Para toda la escuela</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 mt-4">
                  <div className="h-12 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold">IA</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">IA Avanzada</h3>
                  <p className="text-sm text-gray-600">Evaluación automática</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
