"use client"

import { useState } from "react"
import { Menu, X, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-xl">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              LecturioApp
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Inicio
            </a>
            <a href="#caracteristicas" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Características
            </a>
            <a href="#testimonios" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Testimonios
            </a>
            <a href="#precios" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Precios
            </a>
            <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              FAQ
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700 hover:text-blue-600">
              Iniciar Sesión
            </Button>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full px-6 py-2 transform hover:scale-105 transition-all duration-200">
              Prueba Gratuita
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-blue-100">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Inicio
              </a>
              <a href="#caracteristicas" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Características
              </a>
              <a href="#testimonios" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Testimonios
              </a>
              <a href="#precios" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Precios
              </a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                FAQ
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="text-gray-700 hover:text-blue-600 justify-start">
                  Iniciar Sesión
                </Button>
                <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full">
                  Prueba Gratuita
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
