"use client"

import type React from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  MessageCircle,
  Phone,
  TrendingDown,
  Shield,
  Eye,
  MapPin,
  Star,
  Users,
  Package,
  Truck,
  FileCheck,
  Globe,
} from "lucide-react"
import { useState } from "react"

export default function ZohanLanding() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    contacto: "",
    producto: "",
    volumen: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Redirect to WhatsApp with form data
    const message = `Hola! Quiero cotizar: ${formData.producto} - Volumen: ${formData.volumen} - Empresa: ${formData.empresa} - Contacto: ${formData.nombre}`
    window.open(`https://wa.me/543815711293?text=${encodeURIComponent(message)}`, "_blank")
  }

  const whatsappCTA = () => {
    window.open("https://wa.me/543815711293?text=Hola! Quiero cotizar importación de insumos", "_blank")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Logo */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src="/images/zohan-logo.png"
                alt="ZOHAN - Importación de Insumos"
                width={180}
                height={90}
                className="h-16 w-auto md:h-20"
                priority
              />
            </div>
            <div className="hidden md:flex items-center gap-4">
              <Button onClick={whatsappCTA} className="bg-green-600 hover:bg-green-700 text-white">
                <MessageCircle className="w-4 h-4 mr-2" />
                Cotizar Ahora
              </Button>
              <a href="tel:+5493814XXXXXX" className="inline-flex items-center justify-center rounded-md border border-orange-500 text-orange-600 hover:bg-orange-50 bg-transparent px-4 py-2 text-sm font-medium transition-colors">
  <Phone className="w-4 h-4 mr-2" />
  Llamar
</a>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky WhatsApp CTA for Mobile */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <Button
          onClick={() =>
            window.open("https://wa.me/543815711293?text=Hola! Quiero cotizar importación de insumos", "_blank")
          }
          className="bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg animate-pulse"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-orange-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Importá Insumos Clave, <span className="text-green-600">Bajá Tus Costos Ya</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Soluciones integrales para exportadores argentinos que quieren ahorrar y operar sin estrés.
              <strong className="text-orange-600"> COTIZÁ AHORA</strong> y descubrí cuánto podés ganar en tu próxima
              exportación.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                onClick={whatsappCTA}
                className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4 rounded-lg shadow-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />📲 COTIZAR por WHATSAPP YA
              </Button>
              <Button
                variant="outline"
                className="border-orange-500 text-orange-600 hover:bg-orange-50 text-lg px-8 py-4 bg-transparent"
              >
                <Phone className="w-5 h-5 mr-2" />
                Llamar Ahora
              </Button>
            </div>

            <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>+10 años de experiencia</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-green-600" />
                <span>
                  Oficinas en{" "}
                  <a
                    href="https://maps.app.goo.gl/xr4sAcGDimK4P9RN6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                     Yerba Buena,Tucumán
                  </a>{" "}
              
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why ZOHAN Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">¿Por qué elegirnos?</h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      La única empresa argentina liderada por alguien que recorre fábricas en China
                    </h3>
                    <p className="text-gray-600">Gestión directa y personal de todo el proceso</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Package className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Especialistas en importación de insumos para exportación
                    </h3>
                    <p className="text-gray-600">Bolsas, BIG BAGS, cajas y más</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <FileCheck className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Certificados temporarios (CTIT)</h3>
                    <p className="text-gray-600">Para ahorrar impuestos y acelerar la operación</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Globe className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Incoterms DAP, CIF, FOB y más</h3>
                    <p className="text-gray-600">Nos adaptamos a tu flujo y necesidades</p>
                  </div>
                </div>
              </div>

              {/* Express Form */}
              <Card className="p-6 shadow-lg border-2 border-green-200">
                <h3 className="text-xl font-bold mb-4 text-center">¿Querés saber cuánto podés ahorrar?</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Nombre"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    required
                  />
                  <Input
                    placeholder="Empresa"
                    value={formData.empresa}
                    onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                    required
                  />
                  <Input
                    placeholder="WhatsApp / Email"
                    value={formData.contacto}
                    onChange={(e) => setFormData({ ...formData, contacto: e.target.value })}
                    required
                  />
                  <select
                    className="w-full p-3 border rounded-lg"
                    value={formData.producto}
                    onChange={(e) => setFormData({ ...formData, producto: e.target.value })}
                    required
                  >
                    <option value="">Producto a importar</option>
                    <option value="bolsas">Bolsas</option>
                    <option value="big-bags">Big Bags</option>
                    <option value="cajas">Cajas</option>
                    <option value="otro">Otro</option>
                  </select>
                  <Input
                    placeholder="Volumen estimado"
                    value={formData.volumen}
                    onChange={(e) => setFormData({ ...formData, volumen: e.target.value })}
                    required
                  />
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
                    ENVIAR / Quiero Cotizar Ya
                  </Button>
                  <div className="text-center">
                    <span className="text-gray-500">o</span>
                  </div>
                  <Button
                    type="button"
                    onClick={whatsappCTA}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />📲 Cotizar por WHATSAPP al instante
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Beneficios Comprobados</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingDown className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Ahorro comprobado</h3>
                <p className="text-gray-600 text-sm">Negociamos directo, sin intermediarios</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-2">Cero complicaciones legales</h3>
                <p className="text-gray-600 text-sm">Te guiamos con el certificado CTIT y todas las regulaciones</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Seguimiento total</h3>
                <p className="text-gray-600 text-sm">De la fábrica a tu depósito, informes en tiempo real</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-2">Oficina local en Tucumán</h3>
                <p className="text-gray-600 text-sm">Nos ves la cara y respondemos siempre</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Proceso Transparente en 5 Pasos</h2>

            <div className="space-y-8">
              {[
                { step: 1, title: "Nos contás qué insumo necesitás", icon: MessageCircle },
                {
                  step: 2,
                  title: "Cotizás por WhatsApp y recibís opciones concretas con precios y tiempos claros",
                  icon: Phone,
                },
                {
                  step: 3,
                  title: "Hacemos todo el trámite (compra, aduana, certificado, logística internacional)",
                  icon: FileCheck,
                },
                { step: 4, title: "Te informamos en cada etapa", icon: Eye },
                { step: 5, title: "Recibís el insumo en tu planta listo para exportar", icon: Truck },
              ].map(({ step, title, icon: Icon }) => (
                <div key={step} className="flex items-start gap-4">
                  <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="w-5 h-5 text-green-600" />
                      <h3 className="font-semibold text-lg">{title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button onClick={whatsappCTA} className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
                Solicitar proceso detallado por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Clientes que Confían en Nosotros</h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Con Zohan importé mis big bags más baratos y en fecha. Se ocupan de todo."
                </p>
                <div className="font-semibold">— Gustavo P., Exportador en Salta</div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Marcos viajó a China para seleccionar proveedores. Es confianza pura."
                </p>
                <div className="font-semibold">— Lucía T., Emprendedora Agro</div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"Ahorramos 30% en costos de packaging. Recomiendo totalmente."</p>
                <div className="font-semibold">— Carlos M., Exportador de Frutas</div>
              </div>
            </div>

            <div className="flex justify-center gap-8 mb-8">
              <Badge variant="outline" className="px-4 py-2">
                Experiencia CTIT
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                Atención personalizada
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                Operador seguro
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">¿Solo bolsas y cajas?</AccordionTrigger>
                <AccordionContent>
                  No, importamos cualquier insumo para exportación que pueda aplicar a régimen temporario.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">¿Desde qué volumen puedo operar?</AccordionTrigger>
                <AccordionContent>Desde USD 2.000 en adelante.</AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">¿Cubro todo el país?</AccordionTrigger>
                <AccordionContent>Sí, entregamos en cualquier provincia.</AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">¿Qué pasa si algo sale mal?</AccordionTrigger>
                <AccordionContent>Seguimiento total, seguro y solución directa: nunca estás solo.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¡Atención exportadores 2024/2025!</h2>
            <p className="text-xl mb-8 opacity-90">
              Los cupos para gestión personalizada están limitados por logística al mes. Si querés ahorrar y estar listo
              para la próxima temporada, solicitá tu cotización ahora.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={whatsappCTA}
                className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-lg shadow-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />📲 COTIZÁ YA POR WHATSAPP
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-600 text-lg px-8 py-4 bg-transparent"
              >
                <Phone className="w-5 h-5 mr-2" />
                Llamar ahora
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="flex items-center mb-4">
                  <Image
                    src="/images/zohan-logo.png"
                    alt="ZOHAN"
                    width={140}
                    height={70}
                    className="h-14 w-auto brightness-0 invert"
                  />
                </div>
                <p className="text-gray-300 mb-4">
                  Zohan Venture S.A.S. –{" "}
                  <a
                    href="https://maps.app.goo.gl/xr4sAcGDimK4P9RN6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-400 underline"
                  >
                    Oficinas en Yerba Buena, Tucumán
                  </a>
                </p>
                <p className="text-gray-300 text-sm">
                  Importación de insumos para exportadores con CTIT. INCOTERMS: DAP, CIF, FOB, y más.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Contacto</h4>
                <div className="space-y-2 text-gray-300">
                  <p>📧 info@zohan.com.ar</p>
                  <p>📱 WhatsApp: +54 381 571-1293</p>
                  <p>
                    📍{" "}
                    <a
                      href="https://maps.app.goo.gl/xr4sAcGDimK4P9RN6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-400 underline"
                    >
                      Ver ubicación en Google Maps
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Servicios</h4>
                <div className="space-y-2 text-gray-300 text-sm">
                  <p>• Importación con CTIT</p>
                  <p>• Gestión de INCOTERMS</p>
                  <p>• Logística internacional</p>
                  <p>• Asesoramiento aduanero</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8 text-center">
              <p className="text-gray-400 mb-4">Respaldados por la confianza de los top exporters argentinos.</p>
              <div className="flex justify-center gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white">
                  Política de privacidad
                </a>
                <a href="#" className="hover:text-white">
                  Términos de uso
                </a>
                <a href="#" className="hover:text-white">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
