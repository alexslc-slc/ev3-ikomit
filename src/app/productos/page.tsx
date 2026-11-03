import type { Metadata } from "next";
import Link from "next/link";
import EncabezadoPagina from "@/componentes/EncabezadoPagina";
import Encabezado from "@/componentes/Encabezado";
import PiePagina from "@/componentes/PiePagina";
import { repuestos } from "@/datos/repuestos";

export const metadata: Metadata = {
  title: "Productos | IKOMI Perú",
  description:
    "Explora categorías de repuestos para camiones y buses y consulta su compatibilidad con IKOMI Perú.",
};

export default function Productos() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Encabezado />
      <EncabezadoPagina
        etiqueta="Catálogo de ejemplo"
        titulo="Repuestos para mantener tu unidad en movimiento."
        descripcion="Revisa algunas categorías y consúltanos para confirmar la compatibilidad del repuesto con tu vehículo."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
        <div className="mb-8 rounded-xl border border-cyan-100 bg-cyan-50 px-5 py-4 text-sm leading-6 text-slate-700">
          Este catálogo es demostrativo: los productos no representan
          existencias ni precios en tiempo real. Consulta disponibilidad y
          compatibilidad antes de realizar tu pedido.
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {repuestos.map((repuesto) => (
            <article
              key={repuesto.ruta}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-shadow hover:shadow-lg hover:shadow-slate-200/60"
            >
              <div className="flex h-40 items-center justify-center rounded-xl bg-slate-50 text-5xl text-[#087fa1]">
                <i className={repuesto.icono} aria-hidden="true" />
              </div>
              <p className="mt-5 text-xs font-bold uppercase tracking-wider text-[#087fa1]">
                {repuesto.categoria}
              </p>
              <h2 className="mt-2 text-lg font-bold text-[#123653]">
                {repuesto.nombre}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                {repuesto.resumen}
              </p>
              <p className="mt-4 text-xs text-slate-500">
                Marcas de referencia: {repuesto.marcas.join(", ")}
              </p>
              <Link
                href={`/productos/${repuesto.ruta}`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#087fa1] hover:text-[#075d77]"
              >
                Ver detalle
                <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <PiePagina />
    </main>
  );
}
