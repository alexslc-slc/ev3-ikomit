import Image from "next/image";
import Link from "next/link";

const categorias = [
  {
    nombre: "Motor",
    detalle: "Pistones, anillos, empaques y más.",
    icono: "fa-solid fa-gears",
  },
  {
    nombre: "Embrague",
    detalle: "Platos, discos, collarines y bombas.",
    icono: "fa-solid fa-compact-disc",
  },
  {
    nombre: "Filtros",
    detalle: "Filtros de aire, aceite y combustible.",
    icono: "fa-solid fa-filter",
  },
  {
    nombre: "Frenos",
    detalle: "Pastillas, zapatas y componentes.",
    icono: "fa-solid fa-shield-halved",
  },
];

const marcas = ["HYUNDAI", "KIA", "MITSUBISHI", "HINO", "ISUZU", "NISSAN"];

const razones = [
  {
    titulo: "Variedad para tu unidad",
    detalle: "Encuentra diferentes líneas de repuestos en un solo lugar.",
    icono: "fa-solid fa-boxes-stacked",
  },
  {
    titulo: "Asesoría cercana",
    detalle: "Te orientamos según el modelo, motor o pieza que necesitas.",
    icono: "fa-solid fa-headset",
  },
  {
    titulo: "Envíos a todo el Perú",
    detalle: "Coordinamos la entrega para que tu unidad vuelva a la ruta.",
    icono: "fa-solid fa-truck-fast",
  },
];

export default function Inicio() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
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
            className="shrink-0"
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

          <nav
            aria-label="Navegación principal"
            className="hidden items-center gap-7 text-sm font-semibold text-slate-600 lg:flex"
          >
            <Link href="/" className="text-[#087fa1]">
              Inicio
            </Link>
            <Link href="/nosotros" className="transition-colors hover:text-[#087fa1]">
              Nosotros
            </Link>
            <Link href="/servicios" className="transition-colors hover:text-[#087fa1]">
              Servicios
            </Link>
            <Link href="/productos" className="transition-colors hover:text-[#087fa1]">
              Productos
            </Link>
            <Link href="/marcas" className="transition-colors hover:text-[#087fa1]">
              Marcas
            </Link>
          </nav>

          <a
            href="https://wa.me/51985068416?text=Hola%2C%20quiero%20cotizar%20un%20repuesto."
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#087fa1] px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#076783] sm:px-5"
          >
            <i className="fa-brands fa-whatsapp text-lg" aria-hidden="true" />
            <span className="hidden sm:inline">Solicitar cotización</span>
            <span className="sm:hidden">Cotizar</span>
          </a>
        </div>
      </header>

      <section className="relative isolate overflow-hidden bg-[#102c46]">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=2200&q=85"
            alt="Camión de carga recorriendo una carretera"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b2035] via-[#0b2035]/85 to-[#0b2035]/25" />
        </div>

        <div className="mx-auto grid min-h-[590px] max-w-7xl content-center gap-12 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="max-w-2xl self-center text-white">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-cyan-200 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              Repuestos para camiones y buses
            </p>
            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Repuestos que
              <br />
              mueven al <span className="text-cyan-300">Perú.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">
              Encuentra repuestos de calidad para tu camión, bus o flota. Te
              ayudamos a elegir la pieza adecuada para que sigas en ruta.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/productos"
                className="inline-flex items-center gap-3 rounded-full bg-cyan-500 px-6 py-3.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-cyan-400"
              >
                Explorar productos
                <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 rounded-full border border-white/50 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                <i className="fa-regular fa-comment-dots" aria-hidden="true" />
                Hablemos
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/20 pt-6 text-sm text-slate-200">
              <span>
                <i className="fa-solid fa-location-dot mr-2 text-cyan-300" aria-hidden="true" />
                Trujillo, La Libertad
              </span>
              <span>
                <i className="fa-solid fa-earth-americas mr-2 text-cyan-300" aria-hidden="true" />
                Envíos a todo el Perú
              </span>
            </div>
          </div>

          <div className="hidden items-end justify-center lg:flex">
            <div className="w-full max-w-sm rounded-2xl border border-white/20 bg-white/10 p-6 text-white shadow-2xl backdrop-blur-md">
              <div className="mb-7 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-200">
                  IKOMI PERÚ
                </span>
                <i className="fa-solid fa-arrow-up-right-from-square text-cyan-300" aria-hidden="true" />
              </div>
              <p className="text-4xl font-extrabold">+2,000</p>
              <p className="mt-1 text-sm text-slate-300">productos disponibles</p>
              <div className="my-6 h-px bg-white/20" />
              <p className="text-4xl font-extrabold">25</p>
              <p className="mt-1 text-sm text-slate-300">regiones atendidas</p>
              <div className="mt-7 flex items-center gap-3 rounded-xl bg-cyan-400/15 p-4 text-sm leading-5 text-cyan-100">
                <i className="fa-solid fa-circle-check text-xl text-cyan-300" aria-hidden="true" />
                Asesoría para encontrar el repuesto correcto
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="productos" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-[#087fa1]">
              Repuestos por sistema
            </p>
            <h2 className="max-w-xl text-3xl font-extrabold tracking-tight text-[#123653] sm:text-4xl">
              Todo lo que tu unidad necesita.
            </h2>
          </div>
          <Link
            href="/productos"
            className="text-sm font-bold text-[#087fa1] transition-colors hover:text-[#075d77]"
          >
            Ver todos los productos <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categorias.map((categoria) => (
            <Link
              href="/productos"
              key={categoria.nombre}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl hover:shadow-slate-200/60"
            >
              <span className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-xl text-[#087fa1] transition-colors group-hover:bg-[#087fa1] group-hover:text-white">
                <i className={categoria.icono} aria-hidden="true" />
              </span>
              <h3 className="text-lg font-bold text-[#123653]">
                {categoria.nombre}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                {categoria.detalle}
              </p>
              <span className="mt-5 inline-block text-sm font-bold text-[#087fa1]">
                Ver repuestos <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section id="marcas" className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
            Repuestos para las marcas que mueven el transporte
          </p>
          <div className="mt-8 grid grid-cols-2 items-center gap-6 text-center sm:grid-cols-3 lg:grid-cols-6">
            {marcas.map((marca) => (
              <span
                key={marca}
                className="text-sm font-extrabold tracking-wider text-slate-400 transition-colors hover:text-[#123653]"
              >
                {marca}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-24">
        <div>
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-[#087fa1]">
            Nuestra propuesta de valor
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#123653] sm:text-4xl">
            Tu unidad no puede parar.
          </h2>
          <p className="mt-5 max-w-lg leading-7 text-slate-600">
            Una unidad detenida representa tiempo y dinero. En IKOMI te
            acompañamos para que encuentres lo que necesitas y vuelvas a la
            ruta.
          </p>
          <Link
            href="/nosotros"
            className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#087fa1] hover:text-[#075d77]"
          >
            Conoce IKOMI <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {razones.map((razon) => (
            <article
              key={razon.titulo}
              className="rounded-2xl bg-slate-50 p-6"
            >
              <span className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-lg text-[#087fa1] shadow-sm">
                <i className={razon.icono} aria-hidden="true" />
              </span>
              <h3 className="font-bold text-[#123653]">{razon.titulo}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {razon.detalle}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#102c46] px-5 py-16 text-white sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
              Estamos para ayudarte
            </p>
            <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
              ¿Buscas un repuesto para tu camión o bus?
            </h2>
            <p className="mt-4 text-slate-300">
              Cuéntanos qué necesitas y te ayudamos a encontrarlo.
            </p>
          </div>
          <a
            href="https://wa.me/51985068416?text=Hola%2C%20quiero%20cotizar%20un%20repuesto."
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-cyan-500 px-6 py-3.5 font-bold text-white transition-colors hover:bg-cyan-400"
          >
            <i className="fa-brands fa-whatsapp text-xl" aria-hidden="true" />
            Escríbenos
          </a>
        </div>
      </section>

      <footer className="bg-[#0b2035] px-5 py-8 text-sm text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex flex-col leading-none">
            <p className="font-extrabold tracking-[0.06em] text-white">
              IKOMI <span className="text-cyan-400">PERÚ</span>
            </p>
            <p className="mt-1 border-t border-[#e64651] pt-1 text-[8px] font-bold uppercase tracking-[0.12em] text-slate-400">
              Repuestos de Corea y Japón
            </p>
          </div>
          <p>Repuestos para camiones y buses. Trujillo, La Libertad, Perú.</p>
          <p className="text-slate-400">© 2026 IKOMI Perú</p>
        </div>
      </footer>
    </main>
  );
}
