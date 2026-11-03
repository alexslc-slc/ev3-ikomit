export type Marca = {
  nombre: string;
  imagen: string;
  enlace: string;
  descripcion: string;
};

export const marcas: Marca[] = [
  {
    nombre: "Hyundai",
    imagen: "/marcas/hyundai.svg",
    enlace: "https://www.hyundai.com/worldwide/en",
    descripcion:
      "Consulta repuestos para camiones y buses Hyundai indicando modelo y datos del motor.",
  },
  {
    nombre: "Kia",
    imagen: "/marcas/kia.png",
    enlace: "https://worldwide.kia.com/int",
    descripcion:
      "Revisa opciones de repuestos Kia y confirma su aplicación para tu unidad.",
  },
  {
    nombre: "Mitsubishi Motors",
    imagen: "/marcas/mitsubishi.png",
    enlace: "https://www.mitsubishi-motors.com/en/",
    descripcion:
      "Compártenos el modelo y año de tu vehículo Mitsubishi para orientar la consulta.",
  },
  {
    nombre: "Hino",
    imagen: "/marcas/hino.webp",
    enlace: "https://www.hino-global.com/",
    descripcion:
      "Consulta por repuestos Hino para tu camión o bus y confirma su compatibilidad.",
  },
  {
    nombre: "Isuzu",
    imagen: "/marcas/isuzu.svg",
    enlace: "https://www.isuzu.co.jp/world/",
    descripcion:
      "Indica los datos de tu unidad Isuzu para revisar la referencia que buscas.",
  },
  {
    nombre: "Nissan",
    imagen: "/marcas/nissan.svg",
    enlace: "https://www.nissan-global.com/EN/",
    descripcion:
      "Consulta por repuestos Nissan con el modelo, año y versión de tu vehículo.",
  },
];
