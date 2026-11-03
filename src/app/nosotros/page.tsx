import type { Metadata } from "next";
import Link from "next/link";
import EncabezadoPagina from "@/componentes/EncabezadoPagina";
import Encabezado from "@/componentes/Encabezado";
import PiePagina from "@/componentes/PiePagina";

export const metadata: Metadata = {
  title: "Nosotros | IKOMI Perú",
  description:
    "Conoce la propuesta de IKOMI Perú para acompañarte en la búsqueda de repuestos para camiones y buses.",
};

const principios = [
  {
    titulo: "Atención cercana",
    descripcion:
      "Escuchamos los datos de tu unidad y la necesidad que quieres resolver.",
    icono: "fa-solid fa-headset",
  },
  {
    titulo: "Orientación clara",
    descripcion:
      "Te ayudamos a consultar la compatibilidad antes de elegir un repuesto.",
    icono: "fa-solid fa-clipboard-check",
  },
  {
    titulo: "Compromiso con tu ruta",
    descripcion:
      "Buscamos que encuentres una alternativa adecuada para mantener tu unidad en movimiento.",
    icono: "fa-solid fa-truck-fast",
  },
];

export default function Nosotros() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Encabezado />
      <EncabezadoPagina
        etiqueta="Conócenos"
        titulo="Repuestos y orientación para seguir en ruta."
        descripcion="IKOMI Perú es una propuesta enfocada en repuestos para camiones y buses, con atención desde Trujillo y coordinación de envíos a nivel nacional."
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#087fa1]">
            Nuestra forma de trabajar
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#123653]">
            Cada unidad tiene una necesidad distinta.
          </h2>
          <p className="mt-5 leading-7 text-slate-600">
            Por eso, antes de cotizar, es importante conocer la marca, el
            modelo, el año y los datos del motor. Con esa información podemos
            orientar mejor la búsqueda del repuesto.
          </p>
          <p className="mt-4 leading-7 text-slate-600">
            Nuestra atención está dirigida a conductores, talleres y empresas
            de transporte que buscan una respuesta clara y un trato directo.
          </p>
        </div>

        <div className="rounded-3xl bg-slate-50 p-8 sm:p-10">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-xl text-[#087fa1] shadow-sm">
            <i className="fa-solid fa-location-dot" aria-hidden="true" />
          </span>
          <h2 className="mt-6 text-xl font-bold text-[#123653]">
            Atención desde Trujillo
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            Estamos en La Libertad y coordinamos consultas y envíos para
            clientes de distintas regiones del Perú.
          </p>
          <Link
            href="/servicios"
            className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#087fa1] hover:text-[#075d77]"
          >
            Conoce nuestros servicios
            <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#087fa1]">
              Lo que nos guía
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#123653]">
              Una atención pensada para el transporte.
            </h2>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {principios.map((principio) => (
              <article
                key={principio.titulo}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-lg text-[#087fa1]">
                  <i className={principio.icono} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-bold text-[#123653]">
                  {principio.titulo}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {principio.descripcion}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-14 sm:flex-row sm:items-center lg:px-8">
        <div>
          <h2 className="text-2xl font-extrabold text-[#123653]">
            ¿Buscas una pieza para tu unidad?
          </h2>
          <p className="mt-2 text-slate-600">
            Cuéntanos qué necesitas y te orientamos.
          </p>
        </div>
        <Link
          href="/productos"
          className="inline-flex items-center gap-2 rounded-full bg-[#087fa1] px-5 py-3 font-bold text-white transition-colors hover:bg-[#076783]"
        >
          Ver productos
          <i className="fa-solid fa-arrow-right" aria-hidden="true" />
        </Link>
      </section>
      <PiePagina />
    </main>
  );
}
