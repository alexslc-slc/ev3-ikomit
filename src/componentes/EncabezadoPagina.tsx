type EncabezadoPaginaProps = {
  etiqueta: string;
  titulo: string;
  descripcion: string;
};

export default function EncabezadoPagina({
  etiqueta,
  titulo,
  descripcion,
}: EncabezadoPaginaProps) {
  return (
    <section className="bg-[#102c46] px-5 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl lg:px-8">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
          {etiqueta}
        </p>
        <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
          {titulo}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
          {descripcion}
        </p>
      </div>
    </section>
  );
}
