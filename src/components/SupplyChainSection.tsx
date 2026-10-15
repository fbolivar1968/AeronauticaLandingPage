import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Factory, 
  Layers, 
  Cog, 
  Package, 
  Wrench,
  ArrowDown,
  Building2
} from "lucide-react";

const SupplyChainSection = () => {
  const tierLevels = [
    {
      icon: Building2,
      title: "OEM",
      subtitle: "Original Equipment Manufacturer",
      description: "Fabricantes finales de aeronaves",
      examples: "Boeing, Airbus, Embraer",
      color: "bg-aerospace-blue text-white",
      position: "top"
    },
    {
      icon: Factory,
      title: "Tier 1",
      subtitle: "Integradores de Sistemas",
      description: "Sistemas completos y complejos",
      examples: "Motores, trenes de aterrizaje, cabinas",
      color: "bg-aerospace-orange text-white",
      position: "second"
    },
    {
      icon: Cog,
      title: "Tier 2",
      subtitle: "Fabricantes de Subconjuntos",
      description: "Componentes mecanizados y estructuras",
      examples: "Componentes mecanizados, cableados, estructuras metálicas",
      color: "bg-aerospace-blue-light text-white",
      position: "third",
      highlight: true
    },
    {
      icon: Package,
      title: "Tier 3",
      subtitle: "Piezas Básicas",
      description: "Piezas básicas y tratamientos",
      examples: "Mecanizado, tratamientos superficiales, recubrimientos",
      color: "bg-muted text-aerospace-blue",
      position: "fourth"
    },
    {
      icon: Layers,
      title: "Materia Prima",
      subtitle: "Proveedores Base",
      description: "Materiales base para manufactura",
      examples: "Aceros, titanio, compuestos, plásticos aeronáuticos",
      color: "bg-background border-2 border-aerospace-blue text-aerospace-blue",
      position: "bottom"
    }
  ];

  const concepts = [
    {
      term: "PMO",
      full: "Production Manufacturing Organization",
      description: "Autorización de fabricación de piezas aeronáuticas"
    },
    {
      term: "PMA", 
      full: "Parts Manufacturer Approval",
      description: "Aprobación de repuestos aeronáuticos por FAA/EASA"
    },
    {
      term: "OTD",
      full: "On Time Delivery", 
      description: "Entregas a tiempo - KPI crítico"
    },
    {
      term: "FAI",
      full: "First Article Inspection (AS9102)",
      description: "Validación del primer artículo de producción"
    },
    {
      term: "NCR",
      full: "Non-Conformance Report",
      description: "Reporte de no conformidad"
    },
    {
      term: "MRB",
      full: "Material Review Board",
      description: "Junta para decidir sobre material no conforme"
    },
    {
      term: "MRO",
      full: "Maintenance, Repair & Overhaul",
      description: "Mantenimiento, reparación y operaciones"
    },
    {
      term: "Traceability",
      full: "Trazabilidad",
      description: "Trazabilidad completa de cada pieza y material"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-aerospace-blue border-aerospace-blue">
            Cadena de Suministro
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-aerospace-blue mb-6">
            Cadena de Suministro Aeroespacial
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Se organiza en niveles jerárquicos (Tiers) desde fabricantes finales hasta materia prima
          </p>
        </div>

        {/* Supply Chain Pyramid */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto">
            {tierLevels.map((tier, index) => (
              <div key={index} className="mb-4">
                <Card className={`${tier.color} shadow-card hover:shadow-aerospace transition-smooth ${tier.highlight ? 'ring-4 ring-aerospace-orange ring-opacity-50' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <tier.icon className="w-10 h-10 mr-4" />
                        <div>
                          <h3 className="text-2xl font-bold">{tier.title}</h3>
                          <p className="text-sm opacity-90">{tier.subtitle}</p>
                        </div>
                      </div>
                      <div className="text-right flex-1 ml-6">
                        <p className="font-medium mb-1">{tier.description}</p>
                        <p className="text-sm opacity-90">{tier.examples}</p>
                      </div>
                    </div>
                    {tier.highlight && (
                      <div className="mt-4 p-4 bg-white/20 rounded-lg">
                        <p className="text-center font-semibold">
                          📌 Tu empresa aplica aquí - Certificarse en AS9100D posiciona como Tier 2 o Tier 3 confiable
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
                {index < tierLevels.length - 1 && (
                  <div className="flex justify-center my-2">
                    <ArrowDown className="w-6 h-6 text-aerospace-orange" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* MRO Section */}
        <Card className="mb-20 gradient-card shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl text-aerospace-blue flex items-center">
              <Wrench className="w-8 h-8 text-aerospace-orange mr-3" />
              MRO (Maintenance, Repair & Overhaul)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              Empresas de mantenimiento y reparación autorizadas que proporcionan servicios 
              especializados para mantener la flota operativa y segura. Estas organizaciones 
              también requieren certificación AS9100D para operar en el sector aeronáutico.
            </p>
          </CardContent>
        </Card>

        {/* Key Concepts */}
        <div>
          <h3 className="text-3xl font-bold text-aerospace-blue mb-8 text-center">
            Conceptos y Palabras Clave del Sector
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {concepts.map((concept, index) => (
              <Card key={index} className="gradient-card shadow-card hover:shadow-aerospace transition-smooth group">
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="bg-aerospace-orange text-white px-3 py-1 rounded-full text-sm font-bold mb-3 inline-block">
                      {concept.term}
                    </div>
                    <h4 className="text-sm font-semibold text-aerospace-blue mb-2">
                      {concept.full}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {concept.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupplyChainSection;