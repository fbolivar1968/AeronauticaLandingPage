import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ForjadoImg from "@/assets/ForjadoImg.jpg"
import { Globe, Building2, CheckCircle, TrendingUp, Users, Award, Plane, Shield, Cog } from "lucide-react";
import civilAviationImage from "@/assets/civil-aviation.jpg";
const InfoSection = () => {
  return <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* What is AS9100D */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-aerospace-blue border-aerospace-blue">
              Conocimientos Fundamentales
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-aerospace-blue mb-6">
              ¿Qué es la Norma AS9100D?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AS9100D es la versión vigente (desde 2016) del Sistema de Gestión de la Calidad Aeroespacial
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="gradient-card shadow-card hover:shadow-aerospace transition-smooth">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Globe className="w-8 h-8 text-aerospace-orange mr-3" />
                  <h3 className="text-2xl font-semibold text-aerospace-blue">Desarrollada por IAQG</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Desarrollada por la IAQG (International Aerospace Quality Group) con representantes 
                  de empresas de América, Asia/Pacífico y Europa.
                </p>
              </CardContent>
            </Card>
            
            <Card className="gradient-card shadow-card hover:shadow-aerospace transition-smooth">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Cog className="w-8 h-8 text-aerospace-orange mr-3" />
                  <h3 className="text-2xl font-semibold text-aerospace-blue">Base ISO 9001:2015</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Se basa en ISO 9001:2015 y agrega 134 requisitos específicos para la industria 
                  aeroespacial y de defensa.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Company Certification Highlight */}
          <Card className="bg-aerospace-blue text-white shadow-aerospace">
            <img
                src={ForjadoImg}
                alt="Estampación - Forjas Bolívar"
                className="rounded-lg shadow-aerospace w-full h-48 object-cover"
            />
            <CardContent className="p-10 text-center">
              <Award className="w-16 h-16 text-aerospace-orange mx-auto mb-6" />
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Forjas Bolívar se va a certificar en la norma AS9100D</h3>
              <p className="text-xl leading-relaxed max-w-4xl mx-auto">
                Con el alcance de <strong>"manufactura de productos para el sector aeronáutico 
                en los procesos de forjado, mecanizado y tratamientos térmicos de aleaciones 
                ferrosos y no ferrosos."</strong>
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Why Certify */}
        

        {/* Benefits for Company */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-aerospace-blue mb-6">Beneficios Directos </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
            icon: TrendingUp,
            title: "Contratos Internacionales",
            description: "Acceso a contratos internacionales (OEM, Tier 1)"
          }, {
            icon: Award,
            title: "Mayor Competitividad",
            description: "Mayor competitividad frente a empresas no certificadas"
          }, {
            icon: Plane,
            title: "Escalamiento Tier",
            description: "Posibilidad de escalar en la cadena de suministro (de Tier 3 a Tier 2)"
          }, {
            icon: Shield,
            title: "Cultura de Calidad",
            description: "Fortalecimiento de la cultura de calidad y seguridad"
          }, {
            icon: Globe,
            title: "Base OASIS",
            description: "Participación en la base de datos global OASIS como proveedor aprobado"
          }, {
            icon: Users,
            title: "Exportaciones",
            description: "Facilita acceso a contratos de exportación"
          }].map((benefit, index) => <Card key={index} className="gradient-card shadow-card hover:shadow-aerospace transition-smooth group">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <benefit.icon className="w-8 h-8 text-aerospace-orange mr-3 mt-1 group-hover:scale-110 transition-smooth" />
                    <div>
                      <h4 className="text-lg font-semibold text-aerospace-blue mb-2">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};
export default InfoSection;