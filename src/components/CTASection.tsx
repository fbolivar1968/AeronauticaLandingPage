import { Card, CardContent } from "@/components/ui/card";
import { Plane, Star, Rocket } from "lucide-react";
const CTASection = () => {
  return <section className="py-20 gradient-hero">
      <div className="max-w-4xl mx-auto px-6 text-center text-white">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Plane className="absolute top-20 left-10 w-16 h-16 text-aerospace-orange opacity-20 animate-pulse" />
          <Star className="absolute top-40 right-20 w-12 h-12 text-white opacity-30 animate-pulse delay-1000" />
          <Rocket className="absolute bottom-20 left-20 w-14 h-14 text-aerospace-orange opacity-20 animate-pulse delay-2000" />
        </div>

        <div className="relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-2 bg-aerospace-orange rounded-full text-sm font-semibold mb-8 shadow-aerospace">
            <Star className="w-4 h-4 mr-2" />
            Próximo Paso Hacia la Certificación
          </div>

          {/* Main Title */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            ¿Listo para transformar
            <span className="block text-aerospace-orange">nuestra calidad?</span>
          </h2>

          {/* Description */}
          

          {/* Benefits List */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-smooth">
              <CardContent className="p-6 text-center">
                <Plane className="w-12 h-12 text-aerospace-orange mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Acceso Global</h4>
                <p className="text-sm text-white opacity-90">Contratos internacionales OEM</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-smooth">
              <CardContent className="p-6 text-center">
                <Star className="w-12 h-12 text-aerospace-orange mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Competitividad</h4>
                <p className="text-sm text-white opacity-90">Ventaja sobre no certificados</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-smooth">
              <CardContent className="p-6 text-center">
                <Rocket className="w-12 h-12 text-aerospace-orange mx-auto mb-4" />
                <h4 className="text-lg text-white font-semibold mb-2">Escalamiento</h4>
                <p className="text-sm text-white opacity-90">De Tier 3 a Tier 2</p>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          
        </div>
      </div>
    </section>;
};
export default CTASection;