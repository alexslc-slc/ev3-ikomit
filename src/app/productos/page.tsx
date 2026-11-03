import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import EncabezadoPagina from "@/componentes/EncabezadoPagina";
import Encabezado from "@/componentes/Encabezado";
import PiePagina from "@/componentes/PiePagina";
import { marcas } from "@/datos/marcas";
import { repuestos, type Repuesto } from "@/datos/repuestos";

export const metadata: Metadata = {
  title: "Productos | IKOMI Perú",
  description:
    "Explora categorías de repuestos para camiones y buses y consulta su compatibilidad con IKOMI Perú.",
};

type Props = {
  searchParams: PageProps<"/productos">["searchParams"];
};

export default function Productos({ searchParams }: Props) {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Encabezado />
      <EncabezadoPagina
        etiqueta="Catálogo de ejemplo"
        titulo="12 repuestos para mantener tu unidad en movimiento."
        descripcion="Explora filtros, piezas de embrague y frenos. Este catálogo usa contenido demostrativo y no representa existencias en tiempo real."
      />
      <Suspense fallback={<CatalogoCargando />}>
        <CatalogoProductos searchParams={searchParams} />
      </Suspense>
      <PiePagina />
    </main>
  );
}

function CatalogoCargando() {
  return (
    <section
      aria-label="Cargando catálogo"
      aria-live="polite"
      className="mx-auto flex min-h-96 max-w-7xl items-center justify-center px-5 py-16 text-sm text-slate-500 lg:px-8"
    >
      Cargando catálogo...
    </section>
  );
}

async function CatalogoProductos({ searchParams }: Props) {
  const { marca, categoria } = await searchParams;
  const marcaSeleccionada = typeof marca === "string" ? marca : undefined;
  const categoriaSeleccionada =
    typeof categoria === "string" ? categoria : undefined;
  const categorias = [...new Set(repuestos.map((repuesto) => repuesto.categoria))];
  const productosVisibles = repuestos.filter(
    (repuesto) =>
      (!marcaSeleccionada || repuesto.marcas.includes(marcaSeleccionada)) &&
      (!categoriaSeleccionada || repuesto.categoria === categoriaSeleccionada),
  );

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
      <div className="mb-8 rounded-xl border border-cyan-100 bg-cyan-50 px-5 py-4 text-sm leading-6 text-slate-700">
        Catálogo demostrativo con imágenes de referencia. Los productos,
        aplicaciones y códigos no representan un inventario validado ni
        existencias o precios en tiempo real. Confirma la compatibilidad antes
        de realizar tu pedido.
      </div>

      <div className="mb-7 space-y-5">
        <div>
          <h2 className="mb-3 text-sm font-bold text-[#123653]">
            Filtrar por categoría
          </h2>
          <nav aria-label="Filtrar productos por categoría" className="flex flex-wrap gap-2">
          <Link
            href={crearEnlaceFiltro(marcaSeleccionada)}
            aria-current={!categoriaSeleccionada ? "true" : undefined}
            className={claseFiltro(!categoriaSeleccionada)}
          >
            Todas
          </Link>
            {categorias.map((nombreCategoria) => {
              const activa = categoriaSeleccionada === nombreCategoria;
              return (
                <Link
                  key={nombreCategoria}
                  href={crearEnlaceFiltro(marcaSeleccionada, nombreCategoria)}
                  aria-current={activa ? "true" : undefined}
                  className={claseFiltro(activa)}
                >
                  {nombreCategoria}
                </Link>
              );
            })}
          </nav>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-bold text-[#123653]">
            Filtrar por marca
          </h2>
          <nav aria-label="Filtrar productos por marca" className="flex flex-wrap gap-2">
            <Link
              href={crearEnlaceFiltro(undefined, categoriaSeleccionada)}
              aria-current={!marcaSeleccionada ? "true" : undefined}
              className={claseFiltro(!marcaSeleccionada)}
            >
              Todas
            </Link>
            {marcas.map((marca) => {
              const activa = marcaSeleccionada === marca.nombre;
              return (
                <Link
                  key={marca.nombre}
                  href={crearEnlaceFiltro(marca.nombre, categoriaSeleccionada)}
                  aria-current={activa ? "true" : undefined}
                  className={claseFiltro(activa)}
                >
                  {marca.nombre}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {(marcaSeleccionada || categoriaSeleccionada) && (
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-slate-600">
            Mostrando {marcaSeleccionada && <>marca <strong>{marcaSeleccionada}</strong></>}
            {marcaSeleccionada && categoriaSeleccionada && " · "}
            {categoriaSeleccionada && <>categoría <strong>{categoriaSeleccionada}</strong></>}
          </p>
          <Link
            href="/productos"
            className="text-sm font-bold text-[#087fa1] hover:text-[#075d77]"
          >
            Limpiar filtros
          </Link>
        </div>
      )}
      {productosVisibles.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {productosVisibles.map((repuesto) => (
            <TarjetaRepuesto key={repuesto.ruta} repuesto={repuesto} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-slate-200 px-6 py-10 text-center">
          <p className="font-bold text-[#123653]">
            No hay productos de ejemplo para esta marca.
          </p>
          <Link
            href="/marcas"
            className="mt-3 inline-block text-sm font-bold text-[#087fa1] hover:text-[#075d77]"
          >
            Volver a marcas
          </Link>
        </div>
      )}
    </section>
  );
}

function crearEnlaceFiltro(marca?: string, categoria?: string) {
  const parametros = new URLSearchParams();
  if (marca) parametros.set("marca", marca);
  if (categoria) parametros.set("categoria", categoria);
  const consulta = parametros.toString();
  return consulta ? `/productos?${consulta}` : "/productos";
}

function claseFiltro(activa: boolean) {
  return `rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087fa1] ${
    activa
      ? "border-[#087fa1] bg-[#087fa1] text-white"
      : "border-slate-200 bg-white text-slate-600 hover:border-[#087fa1] hover:text-[#087fa1]"
  }`;
}

function TarjetaRepuesto({ repuesto }: { repuesto: Repuesto }) {
  return (
    <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-shadow hover:shadow-lg hover:shadow-slate-200/60">
      <div className="relative h-48 overflow-hidden rounded-xl bg-slate-50">
        <Image
          src={repuesto.imagen}
          alt={`Imagen de referencia: ${repuesto.nombre}`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-contain p-3"
        />
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
      <p className="mt-3 text-xs text-slate-500">
        Referencia: {repuesto.codigo}
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
  );
}
