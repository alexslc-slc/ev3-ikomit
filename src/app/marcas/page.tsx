import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Encabezado from "@/componentes/Encabezado";
import EncabezadoPagina from "@/componentes/EncabezadoPagina";
import PiePagina from "@/componentes/PiePagina";
import { marcas } from "@/datos/marcas";

export const metadata: Metadata = {
  title: "Marcas | IKOMI Perú",
  description:
    "Consulta las marcas de camiones y buses para las que IKOMI Perú orienta la búsqueda de repuestos.",
};

export default function Marcas() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Encabezado />
      <EncabezadoPagina
        etiqueta="Marcas"
        titulo="Repuestos para las marcas que mueven el transporte."
        descripcion="Conoce algunas de las marcas para las que puedes consultarnos. La compatibilidad depende del modelo, año y versión de cada unidad."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {marcas.map((marca) => (
            <article
              key={marca.nombre}
              className="flex flex-col rounded-2xl border border-slate-200 p-6 transition-shadow hover:shadow-lg hover:shadow-slate-200/60"
            >
              <a
                href={marca.enlace}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visitar el sitio oficial de ${marca.nombre}`}
                className="flex h-36 items-center justify-center rounded-xl bg-slate-50 p-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087fa1]"
              >
                <Image
                  src={marca.imagen}
                  alt={marca.nombre}
                  width={220}
                  height={100}
                  sizes="(min-width: 1024px) 220px, 80vw"
                  className="h-full w-full object-contain"
                />
              </a>
              <h2 className="mt-5 text-lg font-bold text-[#123653]">
                {marca.nombre}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                {marca.descripcion}
              </p>
              <Link
                href={`/productos?marca=${encodeURIComponent(marca.nombre)}`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#087fa1] hover:text-[#075d77]"
              >
                Ver productos de {marca.nombre}
                <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-xs leading-5 text-slate-500">
          Los logotipos son marcas registradas de sus respectivos propietarios.
          IKOMI Perú no representa a los fabricantes.
        </p>
      </section>

      <section className="bg-slate-50 px-5 py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center lg:px-8">
          <div>
            <h2 className="text-2xl font-extrabold text-[#123653]">
              ¿No encuentras la marca que buscas?
            </h2>
            <p className="mt-2 text-slate-600">
              Escríbenos y cuéntanos qué unidad tienes.
            </p>
          </div>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 rounded-full bg-[#087fa1] px-5 py-3 font-bold text-white transition-colors hover:bg-[#076783]"
          >
            Contactar a IKOMI
            <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </Link>
        </div>
      </section>
      <PiePagina />
    </main>
  );
}
