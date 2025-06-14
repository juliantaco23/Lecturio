"use client"

import { Star, Quote } from "lucide-react"

const testimonials = [
	{
		name: "María Fernanda Gómez",
		role: "Rectora",
		school: "Colegio San José de La Salle",
		image: "/female-avatar.png",
		content:
			"LecturioApp ha transformado completamente cómo nuestros estudiantes abordan la lectura. Los resultados en comprensión lectora han mejorado un 45% en solo 8 meses.",
		rating: 5,
	},
	{
		name: "Carlos Andrés Restrepo",
		role: "Coordinador Académico",
		school: "Institución Educativa Fe y Alegría",
		image: "/male-avatar.png",
		content:
			"La personalización que ofrece la plataforma es increíble. Cada estudiante recibe exactamente lo que necesita para mejorar, y los dashboards me ayudan a identificar dificultades rápidamente.",
		rating: 5,
	},
	{
		name: "Ana Lucía Martínez",
		role: "Docente de Lengua Castellana",
		school: "Colegio Gimnasio Los Alcázares",
		image: "/female-avatar.png",
		content:
			"Implementamos LecturioApp el año pasado y los padres de familia están encantados con el progreso de sus hijos. La retroalimentación instantánea mantiene a los estudiantes motivados.",
		rating: 5,
	},
	{
		name: "Roberto Henao Silva",
		role: "Director de Núcleo",
		school: "Secretaría de Educación de Medellín",
		image: "/male-avatar.png",
		content:
			"Como director de núcleo, valoro enormemente los datos que proporciona LecturioApp. Nos permite tomar decisiones educativas basadas en evidencia real del progreso de nuestros estudiantes.",
		rating: 5,
	},
	{
		name: "Claudia Patricia Vélez",
		role: "Maestra de Primaria",
		school: "I.E. República de Honduras",
		image: "/female-avatar.png",
		content:
			"Mis estudiantes están más comprometidos que nunca con la lectura. La gamificación y los niveles adaptativos hacen que aprender sea divertido y efectivo.",
		rating: 5,
	},
	{
		name: "Jhon Jairo Ospina",
		role: "Coordinador de Calidad",
		school: "Colegio Marymount",
		image: "/male-avatar.png",
		content:
			"La facilidad de uso y la potencia de las herramientas analíticas de LecturioApp nos han permitido optimizar nuestros recursos educativos de manera significativa.",
		rating: 5,
	},
]

export default function Testimonials() {
	return (
		<section
			id="testimonios"
			className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50"
		>
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
						💬 Lo que dicen nuestros usuarios
					</div>
					<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
						Testimonios de{" "}
						<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
							educadores satisfechos
						</span>
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Descubre cómo LecturioApp está transformando la educación en escuelas
						de toda España
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200"
						>
							<div className="flex items-center mb-6">
								<Quote className="h-8 w-8 text-blue-500 opacity-50" />
							</div>

							<div className="flex items-center mb-4">
								{[...Array(testimonial.rating)].map((_, i) => (
									<Star
										key={i}
										className="h-5 w-5 text-yellow-400 fill-current"
									/>
								))}
							</div>

							<p className="text-gray-700 mb-6 leading-relaxed italic">
								"{testimonial.content}"
							</p>

							<div className="flex items-center">
								<img
									src={testimonial.image || "/placeholder.svg"}
									alt={testimonial.name}
									className="w-12 h-12 rounded-full mr-4 border-2 border-blue-100"
								/>
								<div>
									<h4 className="font-semibold text-gray-900">
										{testimonial.name}
									</h4>
									<p className="text-sm text-blue-600 font-medium">
										{testimonial.role}
									</p>
									<p className="text-sm text-gray-500">
										{testimonial.school}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Stats Section */}
				<div className="mt-20 bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
					<div className="grid md:grid-cols-4 gap-8 text-center">
						<div className="space-y-2">
							<div className="text-4xl font-bold text-blue-600">97%</div>
							<div className="text-gray-600">Satisfacción de docentes</div>
						</div>
						<div className="space-y-2">
							<div className="text-4xl font-bold text-purple-600">42%</div>
							<div className="text-gray-600">Mejora en comprensión</div>
						</div>
						<div className="space-y-2">
							<div className="text-4xl font-bold text-green-600">200+</div>
							<div className="text-gray-600">Colegios activos</div>
						</div>
						<div className="space-y-2">
							<div className="text-4xl font-bold text-orange-600">24/7</div>
							<div className="text-gray-600">Soporte técnico</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
