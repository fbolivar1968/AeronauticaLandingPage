import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Plane,
  Compass,
  Factory,
  PenTool,
  Ruler,
  FileCheck2,
  LineChart,
  FlaskConical,
  ShieldCheck,
  Award,
  Layers,
  Package,
  CheckCircle2,
  HardHat,
  ClipboardCheck,
  FileBadge,
  Send,
  Radio,
  BookOpen,
  GraduationCap,
  MapPin,
  FileSpreadsheet,
  Wrench,
  Cog,
  Boxes,
  Skull,
  ArrowRight,
  Sparkles
} from "lucide-react";

interface SubItem {
  icon: React.ElementType;
  title: string;
  isFBTarget?: boolean;
}

interface ColumnData {
  title: string;
  headerIcon: React.ElementType;
  items: SubItem[];
  highlightBadge?: string;
}

const AirworthinessSection = () => {
  const initialColumns: ColumnData[] = [
    {
      title: "DISEÑO",
      headerIcon: Compass,
      items: [
        { icon: PenTool, title: "DESARROLLO DE CONCEPTOS" },
        { icon: Ruler, title: "ESPECIFICACIONES TÉCNICAS" },
        { icon: FileCheck2, title: "REQUISITOS DE CERTIFICACIÓN" },
        { icon: LineChart, title: "CÁLCULOS Y ANÁLISIS" },
        { icon: FlaskConical, title: "ENSAYOS Y VALIDACIÓN" },
        { icon: ShieldCheck, title: "CONFORMIDAD DEL DISEÑO" },
        { icon: Award, title: "CERTIFICADO DE TIPO" },
      ],
    },
    {
      title: "PRODUCCIÓN",
      headerIcon: Factory,
      highlightBadge: "Enfoque Estratégico FB",
      items: [
        { icon: Layers, title: "ORGANIZACIÓN DE PRODUCCIÓN" },
        {
          icon: Package,
          title: "SUMINISTRO DE COMPONENTES",
          isFBTarget: true,
        },
        { icon: CheckCircle2, title: "CONTROL DE CALIDAD" },
        {
          icon: HardHat,
          title: "PROCESOS DE FABRICACIÓN",
          isFBTarget: true,
        },
        { icon: ClipboardCheck, title: "ENSAYOS DE ACEPTACIÓN" },
        { icon: FileBadge, title: "CERTIFICADO DE AERONAVEGABILIDAD" },
        { icon: Send, title: "ENTREGA DE AERONAVE" },
      ],
    },
  ];

  const continuousColumns: ColumnData[] = [
    {
      title: "OPERACIÓN",
      headerIcon: Radio,
      items: [
        { icon: Radio, title: "GESTIÓN DE LA FLOTA" },
        { icon: BookOpen, title: "MANUALES DE VUELO" },
        { icon: GraduationCap, title: "PROGRAMAS DE ENTRENAMIENTO" },
        { icon: MapPin, title: "PLANIFICACIÓN DE MISIONES" },
        { icon: FileSpreadsheet, title: "REGISTROS DE OPERACIÓN" },
        { icon: ShieldCheck, title: "SEGURIDAD OPERACIONAL" },
      ],
    },
    {
      title: "MANTENIMIENTO",
      headerIcon: Wrench,
      highlightBadge: "Enfoque Estratégico FB",
      items: [
        { icon: ClipboardCheck, title: "PROGRAMAS DE MANTENIMIENTO" },
        { icon: CheckCircle2, title: "INSPECCIONES PERIÓDICAS" },
        {
          icon: Cog,
          title: "HERRAMIENTAS ESPECIALIZADAS",
          isFBTarget: true,
        },
        { icon: FileSpreadsheet, title: "REGISTROS DE MANTENIMIENTO" },
      ],
    },
    {
      title: "DISPOSICIÓN FINAL",
      headerIcon: Boxes,
      items: [
        {
          icon: Boxes,
          title: "SUMINISTRO DE REPUESTOS",
          isFBTarget: true,
        },
        { icon: Skull, title: "DESMANTELAMIENTO SEGURO" },
      ],
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden" id="aeronavegabilidad">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-aerospace-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-aerospace-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <Badge variant="outline" className="mb-4 text-aerospace-orange border-aerospace-orange/40 bg-aerospace-orange/5 px-4 py-1.5 text-sm uppercase tracking-wider font-semibold">
            Ciclo de Vida Aeronáutico
          </Badge>
          <h2 className="text-4xl md:text-5xl font-extrabold text-aerospace-blue mb-5 tracking-tight">
            Gestión de la Aeronavegabilidad
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Estructura operativa completa y posicionamiento estratégico de <span className="font-semibold text-aerospace-blue">Forjas Bolívar</span> a lo largo del ciclo de diseño, producción, mantenimiento y disposición final.
          </p>
        </div>

        <div className="space-y-16">
          {/* ========================================================= */}
          {/* DIAGRAM 01: INICIAL - DISEÑO Y PRODUCCIÓN */}
          {/* ========================================================= */}
          <div className="bg-card rounded-2xl p-6 md:p-10 shadow-card border border-border/80 transition-smooth hover:shadow-aerospace">
            {/* Stage Title Pill */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-aerospace-blue text-white font-bold text-lg shadow-sm">
                01
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-aerospace-blue">
                Inicial · Diseño y producción
              </h3>
            </div>

            {/* Tree Diagram Box */}
            <div className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/40 dark:to-slate-950/20 rounded-xl p-5 md:p-8 border border-slate-200/80 dark:border-slate-800">
              {/* Root node */}
              <div className="flex flex-col items-center">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-aerospace-blue shadow-md text-aerospace-blue font-bold tracking-wide uppercase text-sm md:text-base">
                  <Plane className="w-6 h-6 text-aerospace-blue animate-pulse" />
                  <span>Aeronavegabilidad Inicial</span>
                </div>
                {/* Vertical branch stem */}
                <div className="w-0.5 h-6 bg-slate-300 dark:bg-slate-700" />
                {/* Horizontal connector line */}
                <div className="w-full max-w-2xl h-0.5 bg-slate-300 dark:bg-slate-700 relative hidden md:block">
                  <div className="absolute left-1/4 -translate-x-1/2 w-2 h-2 rounded-full bg-aerospace-blue" />
                  <div className="absolute right-1/4 translate-x-1/2 w-2 h-2 rounded-full bg-aerospace-blue" />
                </div>
              </div>

              {/* Columns container */}
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-6 md:mt-6">
                {initialColumns.map((col, cIdx) => (
                  <div key={cIdx} className="flex flex-col">
                    {/* Column Header */}
                    <div className="relative mb-3">
                      <div className="flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-aerospace-blue text-white font-bold tracking-wider text-sm md:text-base shadow-sm">
                        <col.headerIcon className="w-5 h-5 text-aerospace-orange-light" />
                        <span>{col.title}</span>
                      </div>
                      {col.highlightBadge && (
                        <div className="absolute -top-3 right-3 bg-aerospace-orange text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          <span>{col.highlightBadge}</span>
                        </div>
                      )}
                    </div>

                    {/* Stacked Sub-Items */}
                    <div className="space-y-2.5 flex-1 flex flex-col justify-between">
                      {col.items.map((item, iIdx) => (
                        <div
                          key={iIdx}
                          className={`flex items-center gap-3 p-3 rounded-lg border text-xs md:text-sm font-semibold transition-smooth ${
                            item.isFBTarget
                              ? "bg-amber-500/10 border-aerospace-orange text-aerospace-blue shadow-sm ring-1 ring-aerospace-orange/50"
                              : "bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-aerospace-blue/40"
                          }`}
                        >
                          <div
                            className={`p-1.5 rounded-md ${
                              item.isFBTarget
                                ? "bg-aerospace-orange text-white"
                                : "bg-slate-100 dark:bg-slate-800 text-aerospace-blue"
                            }`}
                          >
                            <item.icon className="w-4 h-4" />
                          </div>
                          <span className="flex-1">{item.title}</span>
                          {item.isFBTarget && (
                            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-aerospace-orange text-white shrink-0">
                              FB Aquí
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Strategic Placement */}
            <div className="mt-6 p-4 md:p-5 rounded-xl bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-transparent border-l-4 border-aerospace-orange flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <p className="text-base md:text-lg text-slate-800 dark:text-slate-200">
                <span className="font-bold text-aerospace-orange mr-1">FB aquí:</span>
                suministro de componentes y procesos de fabricación{" "}
                <span className="font-semibold underline decoration-aerospace-blue underline-offset-4 text-aerospace-blue dark:text-sky-400">
                  para OEM y Tier
                </span>
                .
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-aerospace-orange uppercase tracking-wider shrink-0">
                <span>Oportunidad Clave</span>
                
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* DIAGRAM 02: CONTINUA Y CONTINUADA */}
          {/* ========================================================= */}
          <div className="bg-card rounded-2xl p-6 md:p-10 shadow-card border border-border/80 transition-smooth hover:shadow-aerospace">
            {/* Stage Title Pill */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-aerospace-orange text-white font-bold text-lg shadow-sm">
                02
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-aerospace-blue">
                Continua y continuada
              </h3>
            </div>

            {/* Tree Diagram Box */}
            <div className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/40 dark:to-slate-950/20 rounded-xl p-5 md:p-8 border border-slate-200/80 dark:border-slate-800">
              {/* Root node */}
              <div className="flex flex-col items-center">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white dark:bg-slate-900 border-2 border-aerospace-blue shadow-md text-aerospace-blue font-bold tracking-wide uppercase text-sm md:text-base">
                  <Plane className="w-6 h-6 text-aerospace-blue animate-pulse" />
                  <span>Aeronavegabilidad Continua y Continuada</span>
                </div>
                {/* Vertical branch stem */}
                <div className="w-0.5 h-6 bg-slate-300 dark:bg-slate-700" />
                {/* Horizontal connector line */}
                <div className="w-full max-w-4xl h-0.5 bg-slate-300 dark:bg-slate-700 relative hidden md:block">
                  <div className="absolute left-[16.6%] -translate-x-1/2 w-2 h-2 rounded-full bg-aerospace-blue" />
                  <div className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-aerospace-blue" />
                  <div className="absolute right-[16.6%] translate-x-1/2 w-2 h-2 rounded-full bg-aerospace-blue" />
                </div>
              </div>

              {/* Columns container (3 columns) */}
              <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-6">
                {continuousColumns.map((col, cIdx) => (
                  <div key={cIdx} className="flex flex-col">
                    {/* Column Header */}
                    <div className="relative mb-3">
                      <div className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-aerospace-blue text-white font-bold tracking-wider text-xs md:text-sm shadow-sm text-center">
                        <col.headerIcon className="w-4 h-4 text-aerospace-orange-light shrink-0" />
                        <span>{col.title}</span>
                      </div>
                      {col.highlightBadge && (
                        <div className="absolute -top-3 right-2 bg-aerospace-orange text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                          <Sparkles className="w-2.5 h-2.5" />
                          <span>{col.highlightBadge}</span>
                        </div>
                      )}
                    </div>

                    {/* Stacked Sub-Items */}
                    <div className="space-y-2.5 flex-1">
                      {col.items.map((item, iIdx) => (
                        <div
                          key={iIdx}
                          className={`flex items-center gap-2.5 p-3 rounded-lg border text-xs md:text-sm font-semibold transition-smooth ${
                            item.isFBTarget
                              ? "bg-amber-500/10 border-aerospace-orange text-aerospace-blue shadow-sm ring-1 ring-aerospace-orange/50"
                              : "bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-aerospace-blue/40"
                          }`}
                        >
                          <div
                            className={`p-1.5 rounded-md ${
                              item.isFBTarget
                                ? "bg-aerospace-orange text-white"
                                : "bg-slate-100 dark:bg-slate-800 text-aerospace-blue"
                            }`}
                          >
                            <item.icon className="w-4 h-4" />
                          </div>
                          <span className="flex-1">{item.title}</span>
                          {item.isFBTarget && (
                            <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-aerospace-orange text-white shrink-0">
                              FB Aquí
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Strategic Placement */}
            <div className="mt-6 p-4 md:p-5 rounded-xl bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-transparent border-l-4 border-aerospace-orange flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <p className="text-base md:text-lg text-slate-800 dark:text-slate-200">
                <span className="font-bold text-aerospace-orange mr-1">FB aquí:</span>
                repuestos y herramientas especializadas{" "}
                <span className="font-semibold underline decoration-aerospace-blue underline-offset-4 text-aerospace-blue dark:text-sky-400">
                  para MRO
                </span>
                .
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-aerospace-orange uppercase tracking-wider shrink-0">
                <span>Mercado Aftermarket</span>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AirworthinessSection;
