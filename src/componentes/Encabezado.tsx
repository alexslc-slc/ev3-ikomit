import Link from "next/link";

const enlaces = [
  { nombre: "Inicio", destino: "/" },
  { nombre: "Nosotros", destino: "/nosotros" },
  { nombre: "Servicios", destino: "/servicios" },
  { nombre: "Productos", destino: "/productos" },
  { nombre: "Marcas", destino: "/#marcas" },
];

function Navegacion({ movil = false }: { movil?: boolean }) {
  return (
    <nav
      aria-label={movil ? "Navegación móvil" : "Navegación principal"}
      className={
        movil
          ? "flex gap-6 overflow-x-auto px-5 pb-3 text-sm font-semibold text-slate-600 lg:hidden"
          : "hidden items-center gap-7 text-sm font-semibold text-slate-600 lg:flex"
      }
    >
      {enlaces.map((enlace) => (
        <Link
          key={enlace.nombre}
          href={enlace.destino}
          className="shrink-0 transition-colors hover:text-[#087fa1] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087fa1]"
        >
          {enlace.nombre}
        </Link>
      ))}
    </nav>
  );
}

export default function Encabezado() {
  return (
    <>
      <div className="bg-[#102c46] px-5 py-2 text-center text-xs font-medium text-white sm:text-sm">
        <span className="mr-2 text-cyan-300">
          <i className="fa-solid fa-truck-fast" aria-hidden="true" />
        </span>
        Repuestos para camiones y buses. Atención y envíos a nivel nacional.
      </div>

      <header className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 lg:px-8">
          <Link
            href="/"
            className="shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087fa1]"
            aria-label="IKOMI Perú, inicio"
          >
            <span className="flex items-center gap-2">
              <span className="flex min-w-0 flex-col leading-none">
                <span className="flex items-baseline gap-1">
                  <span className="text-xl font-black tracking-[0.05em] text-[#123653] sm:text-2xl">
                    IKOMI
                  </span>
                  <span className="text-[9px] font-extrabold tracking-[0.16em] text-[#087fa1] sm:text-[10px]">
                    PERÚ
                  </span>
                </span>
                <span className="mt-0 bg-[#e64651] px-1.5 py-1 text-[7px] font-bold uppercase tracking-[0.08em] text-white sm:text-[8px]">
                  Repuestos de Corea y Japón
                </span>
              </span>
              <span
                aria-hidden="true"
                className="zen-dots-regular flex h-11 w-[58px] shrink-0 items-center justify-center border-y-4 border-[#e64651] bg-[#123653] text-[18px] text-white"
              >
                IKM
              </span>
            </span>
          </Link>

          <Navegacion />

          <a
            href="https://wa.me/51985068416?text=Hola%2C%20quiero%20cotizar%20un%20repuesto."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#087fa1] px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#076783] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087fa1] sm:px-5"
          >
            <i className="fa-brands fa-whatsapp text-lg" aria-hidden="true" />
            <span className="hidden sm:inline">Solicitar cotización</span>
            <span className="sm:hidden">Cotizar</span>
          </a>
        </div>
        <Navegacion movil />
      </header>
    </>
  );
}
