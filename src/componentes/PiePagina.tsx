import Link from "next/link";

const enlaces = [
  { nombre: "Nosotros", destino: "/nosotros" },
  { nombre: "Servicios", destino: "/servicios" },
  { nombre: "Productos", destino: "/productos" },
  { nombre: "Marcas", destino: "/marcas" },
  { nombre: "Contacto", destino: "/contacto" },
];

export default function PiePagina() {
  return (
    <footer className="bg-[#0b2035] px-5 py-8 text-sm text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-extrabold tracking-[0.06em] text-white">
            IKOMI <span className="text-cyan-400">PERÚ</span>
          </span>
          <span className="mt-1 border-t border-[#e64651] pt-1 text-[8px] font-bold uppercase tracking-[0.12em] text-slate-400">
            Repuestos de Corea y Japón
          </span>
        </Link>
        <nav
          aria-label="Navegación del pie de página"
          className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold"
        >
          {enlaces.map((enlace) => (
            <Link
              key={enlace.nombre}
              href={enlace.destino}
              className="transition-colors hover:text-white"
            >
              {enlace.nombre}
            </Link>
          ))}
        </nav>
        <p>Repuestos para camiones y buses. Trujillo, La Libertad, Perú.</p>
        <p className="text-slate-400">© 2026 IKOMI Perú</p>
      </div>
    </footer>
  );
}
