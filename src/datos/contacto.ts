const numeroWhatsApp = "51985068416";

export const datosContacto = {
  telefonoWhatsApp: "+51 985 068 416",
  ciudad: "Trujillo",
  departamento: "La Libertad",
  pais: "Perú",
  enlaceMapa:
    "https://www.google.com/maps/search/?api=1&query=Trujillo%2C%20La%20Libertad%2C%20Per%C3%BA",
};

export function crearEnlaceWhatsApp(mensaje: string) {
  return `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
}

export const enlaceWhatsAppGeneral = crearEnlaceWhatsApp(
  "Hola, quiero consultar por repuestos para mi unidad.",
);
