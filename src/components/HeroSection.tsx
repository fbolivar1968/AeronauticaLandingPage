import { Plane, Shield, Star } from "lucide-react";
import heroImage from "@/assets/hero-aerospace-manufacturing.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 gradient-hero opacity-85"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-aerospace-orange rounded-full text-sm font-medium mb-6 shadow-card">
          <Star className="w-4 h-4 mr-2" />
          Certificación AS9100D en Proceso
        </div>
        
        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Prepárate para
          <span className="block text-aerospace-orange">volar alto</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
          Conoce la norma AS9100D y transforma nuestra calidad en la industria aeronáutica
        </p>
        
        {/* Features */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <div className="flex items-center text-lg">
            <Plane className="w-6 h-6 mr-2 text-aerospace-orange" />
            Industria Aeroespacial
          </div>
          <div className="flex items-center text-lg">
            <Shield className="w-6 h-6 mr-2 text-aerospace-orange" />
            Calidad y Seguridad
          </div>
          <div className="flex items-center text-lg">
            <Star className="w-6 h-6 mr-2 text-aerospace-orange" />
            Competitividad Global
          </div>
        </div>
        
        {/* Hero text and buttons removed */}
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;