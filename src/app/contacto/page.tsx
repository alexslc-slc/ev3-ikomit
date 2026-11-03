import type { Metadata } from "next";
import Encabezado from "@/componentes/Encabezado";
import EncabezadoPagina from "@/componentes/EncabezadoPagina";
import PiePagina from "@/componentes/PiePagina";
import {
  crearEnlaceWhatsApp,
  datosContacto,
  enlaceWhatsAppGeneral,
} from "@/datos/contacto";

export const metadata: Metadata = {
  title: "Contacto | IKOMI Perú",
  description:
    "Comunícate con IKOMI Perú para consultar por repuestos para camiones y buses. Atención desde Trujillo, La Libertad.",
};

const canales = [
  {
    titulo: "Escríbenos por WhatsApp",
    descripcion: `Conversa con nuestro equipo en el ${datosContacto.telefonoWhatsApp}.`,
    icono: "fa-brands fa-whatsapp",
    enlace: enlaceWhatsAppGeneral,
    textoEnlace: "Abrir WhatsApp",
    nuevaPestana: true,
  },
  {
    titulo: "Atención desde Trujillo",
    descripcion: `${datosContacto.ciudad}, ${datosContacto.departamento}, ${datosContacto.pais}. Coordinamos consultas y envíos a nivel nacional.`,
    icono: "fa-solid fa-location-dot",
    enlace: datosContacto.enlaceMapa,
    textoEnlace: "Ver ubicación en el mapa",
    nuevaPestana: true,
  },
];

export default function Contacto() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Encabezado />
      <EncabezadoPagina
        etiqueta="Contacto"
        titulo="Cuéntanos qué repuesto necesitas."
        descripcion="Comparte los datos de tu unidad y te orientaremos sobre cómo continuar con tu consulta."
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#087fa1]">
            Hablemos
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#123653]">
            Atención directa para tu consulta.
          </h2>
          <p className="mt-5 max-w-2xl leading-7 text-slate-600">
            Para consultar, indícanos la marca, el modelo, el año y los datos
            del motor. También puedes compartir el nombre o código del
            repuesto. Confirmaremos contigo la compatibilidad y disponibilidad.
          </p>

          <div className="mt-8 space-y-4">
            {canales.map((canal) => (
              <article
                key={canal.titulo}
                className="flex flex-col gap-5 rounded-2xl border border-slate-200 p-5 sm:flex-row sm:items-center"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-xl text-[#087fa1]">
                  <i className={canal.icono} aria-hidden="true" />
                </span>
                <div className="flex-1">
                  <h3 className="font-bold text-[#123653]">{canal.titulo}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {canal.descripcion}
                  </p>
                </div>
                <a
                  href={canal.enlace}
                  target={canal.nuevaPestana ? "_blank" : undefined}
                  rel={canal.nuevaPestana ? "noopener noreferrer" : undefined}
                  className="shrink-0 text-sm font-bold text-[#087fa1] hover:text-[#075d77]"
                >
                  {canal.textoEnlace}
                  <span className="sr-only"> (abre en una pestaña nueva)</span>
                </a>
              </article>
            ))}
          </div>
        </div>

        <aside className="h-fit rounded-3xl bg-[#102c46] p-8 text-white sm:p-10">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-xl text-cyan-300">
            <i className="fa-solid fa-list-check" aria-hidden="true" />
          </span>
          <h2 className="mt-6 text-xl font-bold">Para ayudarte más rápido</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Si tienes estos datos a la mano, inclúyelos en tu mensaje:
          </p>
          <ul className="mt-5 space-y-3 text-sm text-slate-200">
            {["Marca y modelo", "Año de fabricación", "Motor o versión", "Nombre o código del repuesto"].map(
              (dato) => (
                <li key={dato} className="flex items-start gap-3">
                  <i
                    className="fa-solid fa-check mt-1 text-cyan-300"
                    aria-hidden="true"
                  />
                  {dato}
                </li>
              ),
            )}
          </ul>
          <a
            href={crearEnlaceWhatsApp(
              "Hola, quiero consultar por un repuesto para mi unidad.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-cyan-500 px-5 py-3.5 font-bold text-white transition-colors hover:bg-cyan-400"
          >
            <i className="fa-brands fa-whatsapp text-xl" aria-hidden="true" />
            Iniciar consulta
          </a>
          <p className="mt-4 text-xs leading-5 text-slate-400">
            La atención se coordina directamente por WhatsApp. No se envían
            datos a través de un formulario web.
          </p>
        </aside>
      </section>
      <PiePagina />
    </main>
  );
}
