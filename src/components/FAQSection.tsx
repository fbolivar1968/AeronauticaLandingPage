import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "¿Cuánto tiempo toma implementar AS9100D?",
      answer: "El tiempo de implementación varía según el tamaño y madurez de la organización. Típicamente: empresas pequeñas (6-12 meses), empresas medianas (12-18 meses), empresas grandes (18-24 meses). Factores clave: experiencia previa con ISO 9001, complejidad de procesos, recursos dedicados y nivel de madurez del sistema de calidad existente."
    },
    {
      question: "¿Cuál es la diferencia entre AS9100D e ISO 9001?",
      answer: "AS9100D se basa en ISO 9001:2015 pero incluye 134 requisitos adicionales específicos para la industria aeroespacial: gestión de riesgos operativos, configuración de productos, prevención de partes falsificadas, requisitos especiales del cliente, elementos críticos, entrega a tiempo (OTD), y trazabilidad completa de materiales y procesos."
    },
    {
      question: "¿Se necesitan auditores externos para la certificación?",
      answer: "Sí, la certificación AS9100D requiere auditores externos acreditados por organismos como ANAB, ONAC, o equivalentes internacionales. El proceso incluye: auditoría de certificación inicial (etapa 1 y 2), auditorías de seguimiento anuales, y auditoría de recertificación cada 3 años. Los auditores deben estar calificados específicamente en AS9100."
    },
    {
      question: "¿Qué es la base de datos OASIS y por qué es importante?",
      answer: "OASIS (Online Aerospace Supplier Information System) es la base de datos global de la IAQG donde se registran todos los proveedores certificados en AS9100. Estar listado en OASIS es fundamental para: acceder a contratos con OEMs, demostrar credibilidad ante clientes Tier 1, participar en licitaciones internacionales, y ser reconocido como proveedor confiable en la cadena de suministro aeroespacial."
    },
    {
      question: "¿Cuáles son los costos asociados con la certificación AS9100D?",
      answer: "Los costos incluyen: consultoría para implementación (opcional), auditoría de certificación inicial, auditorías de seguimiento anuales, capacitación del personal, posibles mejoras en infraestructura y sistemas, y tiempo del personal interno. El ROI se obtiene mediante acceso a nuevos mercados, contratos de mayor valor, y posicionamiento competitivo superior."
    },
    {
      question: "¿Qué pasa si ya tenemos ISO 9001? ¿Es más fácil implementar AS9100D?",
      answer: "Definitivamente sí. Tener ISO 9001 es una gran ventaja porque AS9100D se basa en la misma estructura. Los beneficios incluyen: sistema de gestión ya establecido, personal familiarizado con auditorías, procesos documentados existentes, y cultura de calidad implementada. Solo necesitarás agregar los 134 requisitos específicos aeroespaciales."
    },
    {
      question: "¿Cuáles son los requisitos más desafiantes de AS9100D?",
      answer: "Los requisitos más complejos suelen ser: gestión de configuración (control de versiones y cambios), prevención de partes falsificadas (trazabilidad de proveedores), requisitos especiales del cliente (identificación y cumplimiento), gestión de riesgos operativos (evaluación continua), y entrega a tiempo con métricas de desempeño (OTD)."
    },
    {
      question: "¿Necesitamos cambiar nuestros procesos de producción actuales?",
      answer: "No necesariamente cambiar, pero sí optimizar y documentar mejor. AS9100D requiere: mayor control de procesos especiales, validación de equipos críticos, trazabilidad completa de materiales, control más estricto de cambios de ingeniería, y registro detallado de parámetros de proceso. Muchas veces son mejoras que aumentan la eficiencia."
    },
    {
      question: "¿Qué capacitación necesita nuestro personal?",
      answer: "El personal necesita capacitación en: fundamentos de AS9100D y diferencias con ISO 9001, gestión de riesgos específicos aeroespaciales, requisitos especiales del cliente, auditorías internas específicas AS9100, prevención de partes falsificadas, y uso de herramientas de calidad aeroespacial (AS9102, AS9103, AS9104)."
    },
    {
      question: "¿Cómo mantener la certificación una vez obtenida?",
      answer: "Para mantener AS9100D se requiere: auditorías de seguimiento anuales, auditoría de recertificación cada 3 años, mejora continua demostrable, actualización ante cambios normativos, gestión efectiva de no conformidades, y mantener el desempeño en métricas clave como OTD, calidad y satisfacción del cliente."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <HelpCircle className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold text-foreground">
              Preguntas Frecuentes
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Resolvemos las dudas más comunes sobre la implementación y certificación AS9100D
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border/50 rounded-lg bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:text-primary transition-colors">
                  <span className="font-semibold text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            ¿Tienes más preguntas? Contacta al equipo de implementación AS9100D
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;