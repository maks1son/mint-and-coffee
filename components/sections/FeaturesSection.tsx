export default function FeaturesSection() {
  return (
    <section className="bg-[#87A987] py-24 md:py-36 px-6 md:px-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="text-5xl md:text-7xl font-light font-[family-name:var(--font-cormorant)] text-white leading-tight">
            Почему мы?
          </h2>
          <p className="max-w-xs text-sm leading-relaxed text-white/60 font-[family-name:var(--font-dm-sans)]">
            Три вещи, из-за которых гости возвращаются снова.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-auto gap-4">

          {/* ── Cell 1: wide, cream bg, Feature 01 ── */}
          <div className="col-span-2 bg-[#F7F4EF] rounded-3xl p-8 md:p-12 relative overflow-hidden min-h-[260px] flex flex-col justify-between">
            {/* Background big number */}
            <span
              className="absolute -right-4 -bottom-6 font-[family-name:var(--font-cormorant)] font-light text-[#87A987]/[0.12] select-none leading-none pointer-events-none"
              style={{ fontSize: "clamp(8rem, 18vw, 16rem)" }}
              aria-hidden
            >
              01
            </span>
            <div>
              <span className="inline-block text-xs tracking-[0.3em] uppercase text-[#87A987] font-[family-name:var(--font-dm-sans)] mb-4 border border-[#87A987]/30 px-3 py-1 rounded-full">
                Зерно
              </span>
              <h3 className="text-3xl md:text-4xl font-light font-[family-name:var(--font-cormorant)] text-[#1A1A1A] leading-snug mt-2 max-w-md">
                Зерно с <em>характером</em>
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-[#1A1A1A]/55 font-[family-name:var(--font-dm-sans)] max-w-sm mt-6 relative z-10">
              Работаем только с обжарщиками, которые знают историю каждого зерна —
              от фермы до чашки. Никаких компромиссов.
            </p>
          </div>

          {/* ── Cell 2: tall, mustard, Feature 02 ── */}
          <div className="col-span-1 row-span-2 bg-[#E1A624] rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between min-h-[300px]">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-white/60 font-[family-name:var(--font-dm-sans)]">
                02
              </span>
              <h3 className="text-2xl md:text-3xl font-light font-[family-name:var(--font-cormorant)] text-white leading-snug mt-4">
                Авторские рецепты
              </h3>
            </div>

            {/* Decorative circle */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 h-28 w-28 md:h-36 md:w-36 rounded-full border-2 border-white/20 flex items-center justify-center">
              <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-white/15" />
            </div>

            <p className="text-sm leading-relaxed text-white/70 font-[family-name:var(--font-dm-sans)] relative z-10 mt-auto">
              Каждый напиток — баланс вкуса, температуры и идеальной текстуры молока.
            </p>
          </div>

          {/* ── Cell 3: wide, dark green, Feature 03 ── */}
          <div className="col-span-2 bg-[#1a2e1a] rounded-3xl p-8 md:p-12 relative overflow-hidden min-h-[220px] flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Decorative pills */}
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 h-24 w-48 rounded-full bg-[#87A987]/20 rotate-12 pointer-events-none" />
            <div className="absolute right-12 -bottom-8 h-16 w-36 rounded-full bg-[#E2A79E]/15 -rotate-6 pointer-events-none" />

            <div className="relative z-10">
              <span className="text-xs tracking-[0.3em] uppercase text-[#87A987]/70 font-[family-name:var(--font-dm-sans)] mb-3 block">
                03
              </span>
              <h3 className="text-3xl md:text-4xl font-light font-[family-name:var(--font-cormorant)] text-white leading-snug">
                Живая <em className="text-[#87A987]">атмосфера</em>
              </h3>
            </div>

            <p className="text-sm leading-relaxed text-white/55 font-[family-name:var(--font-dm-sans)] max-w-xs relative z-10 shrink-0">
              Пространство для работы, тихих встреч и просто хорошего времени с собой. Без спешки.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
