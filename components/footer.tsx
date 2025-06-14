"use client"

import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-xl">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                LecturioApp
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Revolucionamos la comprensión lectora con inteligencia artificial, ayudando a colegios y estudiantes en
              Colombia a alcanzar su máximo potencial educativo.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/juliantamara/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/juliantamara/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-400 p-3 rounded-full transition-colors duration-200"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/juliantamara/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-700 p-3 rounded-full transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/juliantamara/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-pink-600 p-3 rounded-full transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            {/* Developer Info */}
            <div className="mt-4">
              <span className="text-xs text-gray-500">
                Desarrollado por{" "}
                <a
                  href="https://www.linkedin.com/in/juliantamara/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-400 transition-colors"
                >
                  Julian Tamara
                </a>
              </span>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Producto</h3>
            <ul className="space-y-4">
              <li>
                <a href="#caracteristicas" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Características
                </a>
              </li>
              <li>
                <a href="#precios" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Precios
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Integraciones
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Seguridad
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Actualizaciones
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Empresa</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Equipo
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Carreras
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Prensa
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Inversionistas
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Soporte</h3>
            <ul className="space-y-4 mb-6">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Centro de Ayuda
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Documentación
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Tutoriales
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Estado del Sistema
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>

            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-3" />
                <span className="text-sm">hola@lecturioapp.co</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="h-4 w-4 mr-3" />
                <span className="text-sm">+57 (4) 444 5678</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="h-4 w-4 mr-3" />
                <span className="text-sm">Medellín, Colombia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">© 2024 LecturioApp. Todos los derechos reservados.</div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Cookies
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                GDPR
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
