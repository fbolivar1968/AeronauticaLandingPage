import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Plane, 
  Rocket, 
  Shield, 
  Radar,
  Users,
  Wrench,
  GraduationCap,
  Building
} from "lucide-react";

const IndustrySection = () => {
  const civilSegments = [
    { icon: Plane, title: "Aviación Comercial", description: "Aerolíneas de transporte de pasajeros y carga internacional (Boeing 737/787, Airbus A320/A350)" },
    { icon: Plane, title: "Aviación Regional", description: "Aviones pequeños para distancias cortas (ATR-72, Bombardier CRJ, Embraer E2)" },
    { icon: Users, title: "Aviación General", description: "Uso privado, taxis aéreos, escuelas de vuelo (Cessna 172, Cirrus SR22)" },
    { icon: Wrench, title: "MRO", description: "Mantenimiento, reparación y overhaul (Lufthansa Technik, Aeroman)" },
    { icon: GraduationCap, title: "Simuladores", description: "Entrenamiento de pilotos y tripulaciones (CAE, FlightSafety International)" },
    { icon: Building, title: "Infraestructura", description: "Aeropuertos, sistemas de navegación, ATC (SITA, Thales Group)" }
  ];

  const defenseSegments = [
    { icon: Shield, title: "Defensa", description: "Aeronaves militares convencionales (F-35 Lightning II, C-130 Hercules)" },
    { icon: Radar, title: "ISR", description: "Inteligencia, vigilancia y reconocimiento (RQ-4 Global Hawk, P-8 Poseidon)" },
    { icon: Shield, title: "Combate", description: "Aviones de combate y entrenamiento militar (F-16, Eurofighter Typhoon)" },
    { icon: Plane, title: "Ala Rotatoria", description: "Helicópteros de transporte, ataque y rescate (UH-60 Black Hawk, AH-64 Apache)" },
    { icon: Radar, title: "UAS", description: "Sistemas aéreos no tripulados militares (MQ-9 Reaper, Bayraktar TB2)" },
    { icon: Shield, title: "Uso Dual", description: "Aeronaves con aplicaciones civiles y militares (Boeing C-17)" }
  ];

  const spaceSegments = [
    { icon: Rocket, title: "Lanzadores", description: "Vehículos de lanzamiento de satélites (Falcon 9, Ariane 5)" },
    { icon: Radar, title: "Satélites", description: "Comunicaciones, meteorología, defensa (Starlink, Hubble, ISS)" },
    { icon: Users, title: "Vehículos Tripulados", description: "Cápsulas para transporte humano (Crew Dragon, Orion)" },
    { icon: Building, title: "Infraestructura", description: "Segmento terrestre: estaciones de control, antenas, radares" }
  ];

  const SegmentCard = ({ segment, color }: { segment: typeof civilSegments[0], color: string }) => (
    <Card className="gradient-card shadow-card hover:shadow-aerospace transition-smooth group h-full">
      <CardContent className="p-6">
        <div className="flex items-start mb-4">
          <segment.icon className={`w-8 h-8 ${color} mr-3 mt-1 group-hover:scale-110 transition-smooth`} />
          <div>
            <h4 className="text-lg font-semibold text-aerospace-blue mb-2">{segment.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{segment.description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-aerospace-blue border-aerospace-blue">
            Contexto Industrial
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-aerospace-blue mb-6">
            Industria Aeronáutica, Espacial y Defensa
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            La norma AS9100D es reconocida y requerida por organizaciones globales como 
            FAA (Federal Aviation Administration) y EASA (European Aviation Safety Agency)
          </p>
        </div>

        {/* Civil Sector */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Plane className="w-10 h-10 text-aerospace-blue mr-4" />
            <h3 className="text-3xl font-bold text-aerospace-blue">Sector Civil / Comercial</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {civilSegments.map((segment, index) => (
              <SegmentCard key={index} segment={segment} color="text-aerospace-blue" />
            ))}
          </div>
        </div>

        {/* Defense Sector */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Shield className="w-10 h-10 text-aerospace-orange mr-4" />
            <h3 className="text-3xl font-bold text-aerospace-blue">Sector Defensa / Militar</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {defenseSegments.map((segment, index) => (
              <SegmentCard key={index} segment={segment} color="text-aerospace-orange" />
            ))}
          </div>
        </div>

        {/* Space Sector */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Rocket className="w-10 h-10 text-aerospace-blue mr-4" />
            <h3 className="text-3xl font-bold text-aerospace-blue">Sector Espacial</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {spaceSegments.map((segment, index) => (
              <SegmentCard key={index} segment={segment} color="text-aerospace-blue" />
            ))}
          </div>
        </div>

        {/* Certification Bodies */}
        <Card className="bg-aerospace-orange text-white shadow-aerospace">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl md:text-3xl font-bold">
              Entidades que Certifican AS9100
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-2">NQA</h4>
                <p className="text-sm opacity-90">Organismo certificador reconocido</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">TUVNORD</h4>
                <p className="text-sm opacity-90">Certificación internacional</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">AMTIVO</h4>
                <p className="text-sm opacity-90">Entidad acreditada</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default IndustrySection;