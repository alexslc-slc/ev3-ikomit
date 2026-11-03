import type { Metadata } from "next";
import Link from "next/link";
import EncabezadoPagina from "@/componentes/EncabezadoPagina";
import Encabezado from "@/componentes/Encabezado";
import PiePagina from "@/componentes/PiePagina";

export const metadata: Metadata = {
  title: "Servicios | IKOMI Perú",
  description:
    "Orientación para encontrar repuestos y coordinación de atención y envíos para camiones y buses.",
};

const servicios = [
  {
    titulo: "Orientación de repuestos",
    descripcion:
      "Revisamos contigo la información del vehículo para ayudarte a identificar la pieza que necesitas.",
    icono: "fa-solid fa-magnifying-glass",
  },
  {
    titulo: "Atención para cotizaciones",
    descripcion:
      "Puedes compartir tu consulta por WhatsApp y coordinar directamente con nuestro equipo.",
    icono: "fa-brands fa-whatsapp",
  },
  {
    titulo: "Coordinación de envíos",
    descripcion:
      "Consultamos las alternativas de envío disponibles para tu destino dentro del Perú.",
    icono: "fa-solid fa-truck-fast",
  },
];

const pasos = [
  "Indícanos marca, modelo, año y datos del motor de tu unidad.",
  "Cuéntanos qué repuesto buscas o comparte su código o una referencia.",
  "Revisamos la consulta y coordinamos la cotización y, si corresponde, el envío.",
];

export default function Servicios() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Encabezado />
      <EncabezadoPagina
        etiqueta="Cómo podemos ayudarte"
        titulo="Un servicio atento a las necesidades de tu unidad."
        descripcion="Te acompañamos en la búsqueda de repuestos, la consulta de compatibilidad y la coordinación de atención y envíos."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {servicios.map((servicio) => (
            <article
              key={servicio.titulo}
              className="rounded-2xl border border-slate-200 p-7 transition-shadow hover:shadow-lg hover:shadow-slate-200/60"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-xl text-[#087fa1]">
                <i className={servicio.icono} aria-hidden="true" />
              </span>
              <h2 className="mt-6 text-lg font-bold text-[#123653]">
                {servicio.titulo}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {servicio.descripcion}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#087fa1]">
              Una consulta sencilla
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#123653]">
              ¿Qué información nos ayuda?
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Mientras más detalles tengamos de tu unidad y del repuesto,
              mejor podremos revisar tu consulta.
            </p>
          </div>
          <ol className="space-y-4">
            {pasos.map((paso, indice) => (
              <li
                key={paso}
                className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#123653] text-sm font-bold text-white">
                  {indice + 1}
                </span>
                <p className="self-center leading-6 text-slate-700">{paso}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-14 sm:flex-row sm:items-center lg:px-8">
        <div>
          <h2 className="text-2xl font-extrabold text-[#123653]">
            Empecemos con tu consulta.
          </h2>
          <p className="mt-2 text-slate-600">
            También puedes revisar las categorías del catálogo de ejemplo.
          </p>
        </div>
        <Link
          href="/productos"
          className="inline-flex items-center gap-2 rounded-full bg-[#087fa1] px-5 py-3 font-bold text-white transition-colors hover:bg-[#076783]"
        >
          Explorar productos
          <i className="fa-solid fa-arrow-right" aria-hidden="true" />
        </Link>
      </section>
      <PiePagina />
    </main>
  );
}
