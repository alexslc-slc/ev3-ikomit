export type Repuesto = {
  ruta: string;
  nombre: string;
  categoria: string;
  codigo: string;
  marcas: string[];
  aplicacion: string;
  resumen: string;
  descripcion: string;
  imagen: string;
  fuenteImagen: string;
  icono: string;
  referenciasEquivalentes?: string[];
};

export const repuestos: Repuesto[] = [
  {
    ruta: "filtro-aceite-hyundai",
    nombre: "Filtro de aceite de motor",
    categoria: "Filtros",
    codigo: "26300-35503",
    marcas: ["Hyundai"],
    aplicacion:
      "Hyundai Genesis Coupe 2.0T (2010–2013). También se menciona para algunas aplicaciones Santa Fe y Sonata; confirmar motorización.",
    resumen: "Filtro roscado para el sistema de lubricación del motor.",
    descripcion:
      "Elemento filtrante que ayuda a retener impurezas presentes en el aceite. La compatibilidad puede variar según la motorización y configuración del vehículo.",
    imagen: "/productos/filtro-aceite-hyundai.webp",
    fuenteImagen:
      "https://image.made-in-china.com/202f0j00jNfcGQmWEUkw/Reasonable-Prices-Auto-Engine-Oil-Filter-26300-35503-26300-35500-26300-35501-26300-35504-for-Engine-Protected-Hyundai-KIA.webp",
    icono: "fa-solid fa-filter",
  },
  {
    ruta: "filtro-aceite-hino",
    nombre: "Filtro de aceite Hino TOP Original",
    categoria: "Filtros",
    codigo: "15607-2210L",
    marcas: ["Hino"],
    aplicacion:
      "Hino Dutro y Ranger; motores S05C y otras aplicaciones indicadas en catálogos de referencia. Años y variantes por confirmar.",
    resumen: "Filtro roscado para motores diésel de vehículos comerciales.",
    descripcion:
      "Filtro que retiene partículas presentes en el lubricante y ayuda a proteger los componentes internos del motor.",
    imagen: "/productos/filtro-aceite-hino.jpg",
    fuenteImagen:
      "https://www.hhgautoparts.com/data/prod/1694936320_156072210l3.jpg",
    icono: "fa-solid fa-filter",
  },
  {
    ruta: "filtro-aire-hino",
    nombre: "Elemento de filtro de aire",
    categoria: "Filtros",
    codigo: "17801-78110",
    marcas: ["Hino"],
    aplicacion:
      "Hino WU600R HKMMJ3. Año y motorización exacta por confirmar.",
    resumen: "Elemento filtrante para el sistema de admisión del motor.",
    descripcion:
      "Retiene polvo y partículas del aire antes de que ingresen al motor y ayuda a conservar un flujo adecuado para la combustión.",
    imagen: "/productos/filtro-aire-hino.jpg",
    fuenteImagen:
      "https://pt.filters-king.com/uploadfile/202301/29/e299e333f63114d593a274b5ab04d8db.JPG",
    icono: "fa-solid fa-filter",
  },
  {
    ruta: "filtro-aceite-nissan-mitsubishi",
    nombre: "Elemento de filtro de aceite para camión",
    categoria: "Filtros",
    codigo: "15274-99227 / ME034611",
    marcas: ["Nissan", "Mitsubishi Motors"],
    aplicacion:
      "Referencias de Nissan CK20-30 y CWB, y Mitsubishi Fuso Fighter FK y algunas líneas MM/MK. Motores y aplicaciones por confirmar.",
    resumen: "Elemento cilíndrico para sistemas de lubricación diésel.",
    descripcion:
      "Filtro de elemento diseñado para retener contaminantes del lubricante. Se indican referencias cruzadas entre algunas aplicaciones Nissan y Mitsubishi; verificar el código de motor.",
    imagen: "/productos/filtro-aceite-nissan-mitsubishi.jpg",
    fuenteImagen:
      "https://down-my.img.susercontent.com/file/my-11134207-23020-102cufydy6mv59",
    icono: "fa-solid fa-filter",
  },
  {
    ruta: "disco-embrague-hino",
    nombre: "Disco de embrague de 300 mm",
    categoria: "Embrague",
    codigo: "31250-3152",
    marcas: ["Hino"],
    aplicacion:
      "Camiones Hino con transmisión compatible. Se citan aplicaciones publicadas entre 2005 y 2015; modelo y motor exactos por confirmar.",
    resumen: "Disco de fricción para el sistema de transmisión.",
    descripcion:
      "Componente que transmite el par del motor hacia la caja de cambios mediante superficies de fricción. Incluye cubo central estriado y resortes amortiguadores.",
    imagen: "/productos/disco-embrague-hino.webp",
    fuenteImagen:
      "https://cbtautoparts.com/cdn/shop/files/He774c335356d4a60b75ad84d8f04d62eA.webp?v=1757427727&width=1080",
    icono: "fa-solid fa-compact-disc",
  },
  {
    ruta: "disco-embrague-isuzu-4jj1",
    nombre: "Disco de embrague Isuzu 4JJ1",
    categoria: "Embrague",
    codigo: "8-98037004-2",
    marcas: ["Isuzu"],
    aplicacion: "Isuzu NLR85 con motor 4JJ1. Año exacto por confirmar.",
    resumen: "Disco de embrague para transmisión manual.",
    descripcion:
      "Pieza de fricción con núcleo metálico y resortes amortiguadores que permite acoplar y desacoplar el motor de la transmisión.",
    imagen: "/productos/disco-embrague-isuzu.jpg",
    fuenteImagen:
      "https://www.japanesetruckspareparts.com/photo/pl133676289-factory_direct_sale_transmission_clutch_disc_japanese_truck_clutch_parts_for_isuzu_4jj1_nlr85_8980370042_8_98037004_2.jpg",
    icono: "fa-solid fa-compact-disc",
  },
  {
    ruta: "rodamiento-desembrague-pfi",
    nombre: "Rodamiento de desembrague PFI",
    categoria: "Embrague",
    codigo: "PFI PCR3541",
    marcas: ["Hino", "Hyundai", "Isuzu", "Mitsubishi Motors", "Nissan"],
    aplicacion:
      "Se citan aplicaciones Hino 500 MK4, FD, FE, FF y FG, además de referencias cruzadas para otras marcas. Confirmar aplicación exacta.",
    resumen: "Rodamiento para el accionamiento del sistema de embrague.",
    descripcion:
      "Permite que el mecanismo de desembrague ejerza presión mientras el conjunto mantiene su movimiento giratorio. La fotografía es representativa de un rodamiento, no una identificación visual confirmada de esta referencia.",
    imagen: "/productos/rodamiento-embrague-multimarca.jpg",
    fuenteImagen:
      "https://images.2407.pl/media/images/products/2022/08/2022-27-08_23-02-32_13790853.jpg",
    icono: "fa-solid fa-compact-disc",
    referenciasEquivalentes: [
      "Hino 31242-1060",
      "Hyundai 4142092100",
      "Isuzu 1-09800-145-0",
      "Mitsubishi 03452-21001",
      "Nissan 3050290007",
    ],
  },
  {
    ruta: "zapatas-freno-hino",
    nombre: "Juego de zapatas de freno posterior",
    categoria: "Frenos",
    codigo: "47431-1240",
    marcas: ["Hino"],
    aplicacion:
      "Sistemas de freno de tambor Hino compatibles con la referencia. Modelo, año y motor por confirmar.",
    resumen: "Juego de zapatas para el sistema de frenado posterior.",
    descripcion:
      "Conjunto con revestimiento de fricción que actúa contra el tambor para reducir la velocidad del vehículo. Orientado a aplicaciones de vehículos comerciales.",
    imagen: "/productos/zapatas-freno-hino.jpg",
    fuenteImagen:
      "https://image.made-in-china.com/202f0j00vRkMwWhrHUcT/High-Quality-Hino-Brake-Shoe-Rear-47431-1240.jpg",
    icono: "fa-solid fa-shield-halved",
  },
  {
    ruta: "pastillas-freno-hyundai-kia",
    nombre: "Juego de pastillas de freno delanteras",
    categoria: "Frenos",
    codigo: "58302-17A00",
    marcas: ["Hyundai", "Kia"],
    aplicacion:
      "Vehículos Hyundai y Kia que utilicen la referencia 58302-17A00. Modelo, año y motor exactos por confirmar.",
    resumen: "Pastillas de fricción para el sistema de frenos de disco.",
    descripcion:
      "Conjunto de pastillas con compuesto de fricción y placas de soporte para generar fuerza de frenado mediante el contacto con el disco.",
    imagen: "/productos/pastillas-freno-hyundai-kia.webp",
    fuenteImagen:
      "https://image.made-in-china.com/203f0j00irFePfataBqo/Wholesale-Price-Car-Accessory-Auto-Parts-OEM-ODM-58302-17A00-Ceramic-Disc-Front-Brake-Pads-for-Hyundai-Toyota-BMW-Chery-Geely-Byd-KIA.webp",
    icono: "fa-solid fa-shield-halved",
  },
  {
    ruta: "amplificador-freno-nissan-ud",
    nombre: "Amplificador de freno neumático",
    categoria: "Frenos",
    codigo: "MC828264",
    marcas: ["Nissan", "Hino", "Mitsubishi Motors", "Isuzu"],
    aplicacion:
      "Camiones con sistema neumático CPB12 y referencia compatible. Modelos, años y motores por confirmar.",
    resumen: "Unidad amplificadora para el sistema de frenado neumático.",
    descripcion:
      "Componente que asiste el accionamiento de los frenos mediante presión de aire y transmite la fuerza al sistema.",
    imagen: "/productos/amplificador-freno-nissan.jpg",
    fuenteImagen:
      "https://www.japanesetruckspareparts.com/photo/pl30853118-nissan_ud_mc828264_truck_air_brake_system_parts.jpg",
    icono: "fa-solid fa-shield-halved",
  },
  {
    ruta: "filtro-aceite-isuzu",
    nombre: "Filtro de aceite Isuzu",
    categoria: "Filtros",
    codigo: "8-94430-983-0",
    marcas: ["Isuzu"],
    aplicacion:
      "Motores Isuzu que utilicen la referencia. Modelo, año y motor por confirmar.",
    resumen: "Filtro cilíndrico para el sistema de lubricación del motor.",
    descripcion:
      "Elemento de filtración para retener partículas y residuos presentes en el aceite del motor. La estructura y aplicación deben confirmarse para cada unidad.",
    imagen: "/productos/filtro-aceite-isuzu.jpg",
    fuenteImagen:
      "https://www.niparts.com/Graphics/full/DATA_46/823061.jpg",
    icono: "fa-solid fa-filter",
  },
  {
    ruta: "filtro-combustible-mitsubishi",
    nombre: "Elemento de filtro de combustible diésel",
    categoria: "Filtros",
    codigo: "Por confirmar",
    marcas: ["Mitsubishi Motors"],
    aplicacion:
      "Línea Mitsubishi Fuso diésel. Modelo, año, motor y código OEM pendientes de identificar.",
    resumen: "Cartucho filtrante para el circuito de alimentación de combustible.",
    descripcion:
      "Elemento que ayuda a separar partículas e impurezas del combustible antes de que llegue al sistema de inyección.",
    imagen: "/productos/filtro-combustible-mitsubishi.jpg",
    fuenteImagen:
      "https://cdn.autodoc.de/thumb?id=16885732&lng=fr&m=0&n=0&rev=94077991",
    icono: "fa-solid fa-filter",
  },
];

export function buscarRepuesto(ruta: string) {
  return repuestos.find((repuesto) => repuesto.ruta === ruta);
}
