export type Repuesto = {
  ruta: string;
  nombre: string;
  categoria: string;
  codigo: string;
  icono: string;
  marcas: string[];
  resumen: string;
  descripcion: string;
};

export const repuestos: Repuesto[] = [
  {
    ruta: "kit-empaques-motor",
    nombre: "Kit de empaques de motor",
    categoria: "Motor",
    codigo: "IK-MOT-001",
    icono: "fa-solid fa-gears",
    marcas: ["Hyundai", "Kia"],
    resumen: "Componentes de sellado para trabajos de mantenimiento del motor.",
    descripcion:
      "Consulta con nuestro equipo la disponibilidad del kit y su compatibilidad con el modelo, año y código de motor de tu unidad.",
  },
  {
    ruta: "filtro-de-aceite",
    nombre: "Filtro de aceite",
    categoria: "Filtros",
    codigo: "IK-FIL-002",
    icono: "fa-solid fa-filter",
    marcas: ["Mitsubishi Motors", "Hino", "Isuzu"],
    resumen: "Una pieza de mantenimiento que debe elegirse según cada motor.",
    descripcion:
      "Indícanos los datos de tu vehículo para confirmar el filtro adecuado. Las referencias de esta página son ejemplos de catálogo.",
  },
  {
    ruta: "disco-de-embrague",
    nombre: "Disco de embrague",
    categoria: "Embrague",
    codigo: "IK-EMB-003",
    icono: "fa-solid fa-compact-disc",
    marcas: ["Hyundai", "Mitsubishi Motors", "Nissan"],
    resumen: "Repuesto del sistema de transmisión para camiones y buses.",
    descripcion:
      "La medida y aplicación pueden variar según la versión de la unidad. Escríbenos para revisar la referencia antes de cotizar.",
  },
  {
    ruta: "pastillas-de-freno",
    nombre: "Pastillas de freno",
    categoria: "Frenos",
    codigo: "IK-FRE-004",
    icono: "fa-solid fa-shield-halved",
    marcas: ["Kia", "Isuzu", "Nissan"],
    resumen: "Repuesto de fricción para el mantenimiento del sistema de frenos.",
    descripcion:
      "Confirma la compatibilidad con el modelo y año de tu vehículo. Este catálogo es demostrativo y no representa existencias en tiempo real.",
  },
];

export function buscarRepuesto(ruta: string) {
  return repuestos.find((repuesto) => repuesto.ruta === ruta);
}
