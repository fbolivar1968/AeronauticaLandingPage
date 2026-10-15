import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plane, Rocket, Shield, Radar, Users, Wrench, GraduationCap, Building, Globe, Award } from "lucide-react";
import civilAviationImage from "@/assets/civil-aviation.jpg";

import defenseAviationImage from "@/assets/defense-aviation.jpg";
import spaceAerospaceImage from "@/assets/space-aerospace.jpg";
const IndustrySection = () => {
  const civilSegments = [{
    icon: Plane,
    title: "Aviación Comercial",
    description: "Aerolíneas de transporte de pasajeros y carga internacional (Boeing 737/787, Airbus A320/A350)"
  }, {
    icon: Plane,
    title: "Aviación Regional",
    description: "Aviones pequeños para distancias cortas (ATR-72, Bombardier CRJ, Embraer E2)"
  }, {
    icon: Users,
    title: "Aviación General",
    description: "Uso privado, taxis aéreos, escuelas de vuelo (Cessna 172, Cirrus SR22)"
  }, {
    icon: Wrench,
    title: "MRO",
    description: "Mantenimiento, reparación y overhaul (Lufthansa Technik, Aeroman)"
  }, {
    icon: GraduationCap,
    title: "Simuladores",
    description: "Entrenamiento de pilotos y tripulaciones (CAE, FlightSafety International)"
  }, {
    icon: Building,
    title: "Infraestructura",
    description: "Aeropuertos, sistemas de navegación, ATC (SITA, Thales Group)"
  }];
  const defenseSegments = [{
    icon: Shield,
    title: "Defensa",
    description: "Aeronaves militares convencionales (F-35 Lightning II, C-130 Hercules)"
  }, {
    icon: Radar,
    title: "ISR",
    description: "Inteligencia, vigilancia y reconocimiento (RQ-4 Global Hawk, P-8 Poseidon)"
  }, {
    icon: Shield,
    title: "Combate",
    description: "Aviones de combate y entrenamiento militar (F-16, Eurofighter Typhoon)"
  }, {
    icon: Plane,
    title: "Ala Rotatoria",
    description: "Helicópteros de transporte, ataque y rescate (UH-60 Black Hawk, AH-64 Apache)"
  }, {
    icon: Radar,
    title: "UAS",
    description: "Sistemas aéreos no tripulados militares (MQ-9 Reaper, Bayraktar TB2)"
  }, {
    icon: Shield,
    title: "Uso Dual",
    description: "Aeronaves con aplicaciones civiles y militares (Boeing C-17)"
  }];
  const spaceSegments = [{
    icon: Rocket,
    title: "Lanzadores",
    description: "Vehículos de lanzamiento de satélites (Falcon 9, Ariane 5)"
  }, {
    icon: Radar,
    title: "Satélites",
    description: "Comunicaciones, meteorología, defensa (Starlink, Hubble, ISS)"
  }, {
    icon: Users,
    title: "Vehículos Tripulados",
    description: "Cápsulas para transporte humano (Crew Dragon, Orion)"
  }, {
    icon: Building,
    title: "Infraestructura",
    description: "Segmento terrestre: estaciones de control, antenas, radares"
  }];
  const SegmentCard = ({
    segment,
    color
  }: {
    segment: typeof civilSegments[0];
    color: string;
  }) => <Card className="gradient-card shadow-card hover:shadow-aerospace transition-smooth group h-full">
      <CardContent className="p-6">
        <div className="flex items-start mb-4">
          <segment.icon className={`w-8 h-8 ${color} mr-3 mt-1 group-hover:scale-110 transition-smooth`} />
          <div>
            <h4 className="text-lg font-semibold text-aerospace-blue mb-2">{segment.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{segment.description}</p>
          </div>
        </div>
      </CardContent>
    </Card>;
  return <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-aerospace-blue border-aerospace-blue">
            Contexto Industrial
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-aerospace-blue mb-6">
            Industria Aeronáutica, Espacial y Defensa
          </h2>
          
        </div>

        {/* Civil Sector */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 mb-8">
            <div className="lg:w-1/2">
              <div className="flex items-center mb-4">
                <Plane className="w-10 h-10 text-aerospace-blue mr-4" />
                <h3 className="text-3xl font-bold text-aerospace-blue">Sector Civil / Comercial</h3>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src={civilAviationImage} 
                alt="Airbus A320 - Aviación Civil y Comercial" 
                className="rounded-lg shadow-aerospace w-full h-48 object-cover"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {civilSegments.map((segment, index) => <SegmentCard key={index} segment={segment} color="text-aerospace-blue" />)}
          </div>
        </div>

        {/* Defense Sector */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 mb-8">
            <div className="lg:w-1/2">
              <div className="flex items-center mb-4">
                <Shield className="w-10 h-10 text-aerospace-orange mr-4" />
                <h3 className="text-3xl font-bold text-aerospace-blue">Sector Defensa / Militar</h3>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src={defenseAviationImage} 
                alt="F-35 Lightning II - Sector Defensa y Militar" 
                className="rounded-lg shadow-aerospace w-full h-48 object-cover"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {defenseSegments.map((segment, index) => <SegmentCard key={index} segment={segment} color="text-aerospace-orange" />)}
          </div>
        </div>

        {/* Space Sector */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 mb-8">
            <div className="lg:w-1/2">
              <div className="flex items-center mb-4">
                <Rocket className="w-10 h-10 text-aerospace-blue mr-4" />
                <h3 className="text-3xl font-bold text-aerospace-blue">Sector Espacial</h3>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src={spaceAerospaceImage} 
                alt="Falcon 9 SpaceX - Sector Espacial" 
                className="rounded-lg shadow-aerospace w-full h-48 object-cover"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {spaceSegments.map((segment, index) => <SegmentCard key={index} segment={segment} color="text-aerospace-blue" />)}
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
              <div className= "shadow-md border-aerospace-blue border-2 shadow-aerospace-orange-dark}">
                <h4 className="text-xl font-semibold mb-2 ">AMTIVO</h4>
                <p className="text-sm opacity-90">Entidad acreditada</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Authorities that Recognize AS9100 */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-aerospace-blue mb-6">
              Autoridades que Reconocen AS9100
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Las principales autoridades aeronáuticas mundiales que reconocen y requieren AS9100
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="gradient-card shadow-card hover:shadow-aerospace transition-smooth">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Plane className="w-8 h-8 text-aerospace-orange mr-3" />
                  <h3 className="text-2xl font-semibold text-aerospace-blue">FAA</h3>
                </div>
                <p className="text-lg font-medium text-aerospace-blue mb-2">Federal Aviation Administration</p>
                <p className="text-muted-foreground leading-relaxed">
                  Es la autoridad nacional de aviación de los Estados Unidos, encargada de la regulación 
                  y supervisión de todos los aspectos de la aviación civil en EE.UU. La FAA regula la 
                  seguridad aérea, la certificación de personal y aeronaves, la construcción y operación 
                  de aeropuertos, y la gestión del espacio aéreo nacional.
                </p>
              </CardContent>
            </Card>
            
            <Card className="gradient-card shadow-card hover:shadow-aerospace transition-smooth">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Globe className="w-8 h-8 text-aerospace-orange mr-3" />
                  <h3 className="text-2xl font-semibold text-aerospace-blue">EASA</h3>
                </div>
                <p className="text-lg font-medium text-aerospace-blue mb-2">European Union Aviation Safety Agency</p>
                <p className="text-muted-foreground leading-relaxed">
                  Es la agencia de la Unión Europea que se encarga de la seguridad y regulación de la 
                  aviación civil en Europa. EASA desarrolla normas comunes de aviación civil, certifica 
                  aeronaves y componentes, y aprueba organizaciones involucradas en el diseño, 
                  fabricación y mantenimiento de productos aeronáuticos.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Types of Auditors */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-aerospace-blue mb-6">
              Tipos de Auditores AS9100
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Clasificación de auditores especializados en la norma AS9100
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="gradient-card shadow-card hover:shadow-aerospace transition-smooth">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-aerospace-orange mr-3" />
                  <h3 className="text-2xl font-semibold text-aerospace-blue">AA (Aerospace Auditor)</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Auditor Aeroespacial especializado en la norma AS9100. Estos auditores tienen formación 
                  específica en los requisitos únicos de la industria aeroespacial, incluyendo gestión 
                  de configuración, control de partes falsificadas, requisitos especiales del cliente, 
                  y elementos críticos. Están calificados para realizar auditorías de certificación 
                  y seguimiento en organizaciones del sector aeroespacial.
                </p>
              </CardContent>
            </Card>
            
            <Card className="gradient-card shadow-card hover:shadow-aerospace transition-smooth">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-aerospace-orange mr-3" />
                  <h3 className="text-2xl font-semibold text-aerospace-blue">AEA (Aerospace Expert Auditor)</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Auditor Experto Aeroespacial con mayor nivel de especialización y experiencia en AS9100. 
                  Los AEA tienen conocimientos avanzados en procesos aeroespaciales complejos, pueden liderar 
                  equipos de auditoría, manejar organizaciones de mayor complejidad, y están autorizados 
                  para auditar aspectos técnicos más especializados como diseño aeroespacial, procesos 
                  especiales críticos, y sistemas de gestión integrados.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default IndustrySection;