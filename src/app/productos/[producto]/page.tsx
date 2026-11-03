import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Encabezado from "@/componentes/Encabezado";
import PiePagina from "@/componentes/PiePagina";
import { buscarRepuesto, repuestos } from "@/datos/repuestos";

type Props = PageProps<"/productos/[producto]">;

export function generateStaticParams() {
  return repuestos.map((repuesto) => ({ producto: repuesto.ruta }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { producto: ruta } = await params;
  const repuesto = buscarRepuesto(ruta);

  if (!repuesto) {
    return { title: "Producto no encontrado | IKOMI Perú" };
  }

  return {
    title: `${repuesto.nombre} | Productos IKOMI Perú`,
    description: repuesto.resumen,
  };
}

export default async function DetalleProducto({ params }: Props) {
  const { producto: ruta } = await params;
  const repuesto = buscarRepuesto(ruta);

  if (!repuesto) {
    notFound();
  }

  const enlaceWhatsApp = `https://wa.me/51985068416?text=${encodeURIComponent(
    `Hola, quisiera consultar por ${repuesto.nombre} (${repuesto.codigo}).`,
  )}`;

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Encabezado />
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <Link
          href="/productos"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#087fa1] hover:text-[#075d77]"
        >
          <i className="fa-solid fa-arrow-left" aria-hidden="true" />
          Volver a productos
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex min-h-72 items-center justify-center rounded-3xl bg-slate-50 text-8xl text-[#087fa1] sm:min-h-96">
            <i className={repuesto.icono} aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#087fa1]">
              {repuesto.categoria} · {repuesto.codigo}
            </p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-[#123653] sm:text-4xl">
              {repuesto.nombre}
            </h1>
            <p className="mt-5 text-lg leading-7 text-slate-600">
              {repuesto.resumen}
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              {repuesto.descripcion}
            </p>
            <div className="mt-7 rounded-xl border border-slate-200 p-5">
              <h2 className="font-bold text-[#123653]">
                Marcas de referencia
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                {repuesto.marcas.join(", ")}
              </p>
              <p className="mt-3 text-xs leading-5 text-slate-500">
                La compatibilidad debe confirmarse según el modelo, año y
                versión de tu unidad.
              </p>
            </div>
            <a
              href={enlaceWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#087fa1] px-6 py-3.5 font-bold text-white transition-colors hover:bg-[#076783] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087fa1]"
            >
              <i className="fa-brands fa-whatsapp text-xl" aria-hidden="true" />
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </section>
      <PiePagina />
    </main>
  );
}
