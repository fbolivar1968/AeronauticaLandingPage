import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  AlertTriangle, 
  Shield, 
  Settings, 
  Target, 
  FileText, 
  Clock, 
  UserCheck, 
  Layers,
  CheckCircle,
  Users
} from "lucide-react";

const RequirementsSection = () => {
  const requirements = [
    {
      icon: AlertTriangle,
      title: "Gestión del Riesgo Operativo",
      description: "Identificación, evaluación y mitigación constante de riesgos operacionales"
    },
    {
      icon: Shield,
      title: "Seguridad del Producto",
      description: "Aseguramiento en diseño, producción y entrega de productos seguros"
    },
    {
      icon: Target,
      title: "Requisitos Especiales",
      description: "Gestión de requisitos críticos o complejos del cliente"
    },
    {
      icon: Settings,
      title: "Elementos Críticos",
      description: "Control de piezas/procesos cuya falla afectaría la seguridad del vuelo"
    },
    {
      icon: FileText,
      title: "Gestión de la Configuración",
      description: "Trazabilidad completa de planos, versiones, procesos y materiales"
    },
    {
      icon: Clock,
      title: "Entrega a Tiempo (OTD)",
      description: "Cumplimiento sin retrasos con reporte de desempeño continuo"
    },
    {
      icon: CheckCircle,
      title: "Prevención de Piezas Falsificadas",
      description: "Aseguramiento de autenticidad de proveedores y materiales"
    },
    {
      icon: Layers,
      title: "Requisitos de Producción",
      description: "Inspección del primer artículo (FAI – AS9102) y controles ampliados"
    },
    {
      icon: Users,
      title: "Gestión de Proveedores",
      description: "Homologación, seguimiento y auditorías periódicas de proveedores"
    },
    {
      icon: UserCheck,
      title: "Acciones Correctivas",
      description: "Acciones correctivas y preventivas reforzadas y sistemáticas"
    }
  ];

  const structure = [
    "1. Alcance",
    "2. Referencias normativas", 
    "3. Términos y definiciones",
    "4. Contexto de la organización",
    "5. Liderazgo",
    "6. Planificación",
    "7. Apoyo (recursos, competencia, comunicación)",
    "8. Operación (núcleo reforzado)",
    "9. Evaluación del desempeño",
    "10. Mejora continua"
  ];

  const standards = [
    { code: "AS9100", description: "Diseño y manufactura", color: "text-aerospace-blue" },
    { code: "AS9110", description: "Mantenimiento", color: "text-aerospace-orange" },
    { code: "AS9120", description: "Distribuidores de partes", color: "text-aerospace-blue" }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-aerospace-blue border-aerospace-blue">
            Requisitos Técnicos
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-aerospace-blue mb-6">
            Requisitos Reforzados en AS9100D
          </h2>
          <div className="bg-aerospace-orange text-white px-6 py-3 rounded-lg inline-block">
            <p className="text-xl font-semibold">
              La norma AS9100D tiene 134 requisitos adicionales a la ISO 9001
            </p>
          </div>
        </div>

        {/* Requirements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {requirements.map((req, index) => (
            <Card key={index} className="gradient-card shadow-card hover:shadow-aerospace transition-smooth group">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <req.icon className="w-8 h-8 text-aerospace-orange mr-3 mt-1 group-hover:scale-110 transition-smooth" />
                  <div>
                    <h4 className="text-lg font-semibold text-aerospace-blue mb-2">{req.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{req.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Structure */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <Card className="gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-aerospace-blue flex items-center">
                <FileText className="w-8 h-8 text-aerospace-orange mr-3" />
                Estructura de la Norma
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                La norma sigue la estructura de alto nivel (HLS) con 10 capítulos principales:
              </p>
              <div className="space-y-3">
                {structure.map((item, index) => (
                  <div key={index} className="flex items-center p-3 bg-background rounded-lg">
                    <div className="w-8 h-8 bg-aerospace-orange text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                      {index + 1}
                    </div>
                    <span className="text-aerospace-blue font-medium">{item.split('. ')[1]}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-aerospace-blue flex items-center">
                <Settings className="w-8 h-8 text-aerospace-orange mr-3" />
                Normas del Sector
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                La familia de normas AS se divide según la actividad específica:
              </p>
              <div className="space-y-6">
                {standards.map((standard, index) => (
                  <div key={index} className="p-6 bg-background rounded-lg border-l-4 border-aerospace-orange">
                    <h4 className={`text-2xl font-bold ${standard.color} mb-2`}>
                      {standard.code}
                    </h4>
                    <p className="text-muted-foreground">{standard.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Global Data - Map Style */}
        <Card className="bg-muted/20 shadow-aerospace overflow-hidden">
          <CardHeader className="text-center bg-aerospace-blue text-white">
            <CardTitle className="text-3xl font-bold mb-4">
              Datos de Certificación Mundial
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Map Section */}
              <div className="bg-gray-100 p-8 relative min-h-[500px] flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="bg-white rounded-lg p-6 shadow-lg mb-6">
                    <h3 className="text-2xl font-bold text-aerospace-blue mb-4">América Latina</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-left">
                        <div className="font-semibold text-aerospace-blue mb-2">México</div>
                        <div className="text-xs text-muted-foreground">AS9100: 287</div>
                        <div className="text-xs text-muted-foreground">AS9110: 5</div>
                        <div className="text-xs text-muted-foreground">AS9120: 29</div>
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-aerospace-blue mb-2">Brasil</div>
                        <div className="text-xs text-muted-foreground">AS9100: 107</div>
                        <div className="text-xs text-muted-foreground">AS9120: 1</div>
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-aerospace-blue mb-2">Colombia</div>
                        <div className="text-xs text-muted-foreground">AS9100: 11</div>
                        <div className="text-xs text-muted-foreground">AS9110: 2</div>
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-aerospace-blue mb-2">Chile</div>
                        <div className="text-xs text-muted-foreground">AS9100: 4</div>
                        <div className="text-xs text-muted-foreground">AS9110: 1</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-lg">
                    <div className="text-4xl font-bold text-aerospace-orange mb-2">20,000+</div>
                    <p className="text-sm text-muted-foreground">Empresas certificadas globalmente</p>
                    <div className="text-sm text-muted-foreground mt-2">70% en EE.UU. y Europa</div>
                  </div>
                </div>
              </div>

              {/* Colombia Details */}
              <div className="bg-white p-8 space-y-6">
                <div className="border-l-4 border-aerospace-orange pl-6">
                  <h3 className="text-2xl font-bold text-aerospace-blue mb-2">En Colombia:</h3>
                  <p className="text-muted-foreground mb-4">
                    Actualmente en Colombia hay 11 empresas certificadas en AS9100
                  </p>
                  
                  <div className="bg-aerospace-blue/10 rounded-lg p-6 mb-6">
                    <div className="text-4xl font-bold text-aerospace-blue mb-2">AS9100</div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="bg-white p-2 rounded text-center">ANTARES</div>
                      <div className="bg-white p-2 rounded text-center">CIAC</div>
                      <div className="bg-white p-2 rounded text-center">DIMARCO</div>
                      <div className="bg-white p-2 rounded text-center">PCT LOGISTIC</div>
                      <div className="bg-white p-2 rounded text-center">Indaer</div>
                      <div className="bg-white p-2 rounded text-center">Induinil</div>
                      <div className="bg-white p-2 rounded text-center">NEDAR</div>
                      <div className="bg-white p-2 rounded text-center">PALCOST TECH</div>
                      <div className="bg-white p-2 rounded text-center">RUTECH</div>
                      <div className="bg-white p-2 rounded text-center">TRIMCO</div>
                      <div className="bg-white p-2 rounded text-center text-aerospace-orange font-semibold">+1 más</div>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-aerospace-orange pl-6">
                  <div className="text-2xl font-bold text-aerospace-blue mb-2">AS9110</div>
                  <p className="text-muted-foreground mb-4">
                    Actualmente en Colombia hay 2 empresas certificadas en AS9110
                  </p>
                  
                  <div className="bg-aerospace-blue/10 rounded-lg p-6">
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-white p-2 rounded text-center">CIAC</div>
                      <div className="bg-white p-2 rounded text-center">Fuerza Aérea Col.</div>
                    </div>
                  </div>
                </div>

                <div className="bg-aerospace-orange text-white p-4 rounded-lg text-center">
                  <div className="font-semibold">¡Oportunidad Estratégica!</div>
                  <div className="text-sm mt-1">Colombia tiene menos certificaciones que México y Brasil</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RequirementsSection;