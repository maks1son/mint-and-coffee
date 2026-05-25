const sideItems = [
  {
    num: "02",
    name: "Флэт Уайт",
    tag: "Классика",
    desc: "Двойной эспрессо с бархатистым молоком.",
    price: "280 ₽",
  },
  {
    num: "03",
    name: "Латте Специалти",
    tag: "Специалти",
    desc: "Нежный на зерне с карамельными нотами.",
    price: "300 ₽",
  },
  {
    num: "04",
    name: "Mint Lemonade",
    tag: "Авторский",
    desc: "Лимонад с лаймом, мятой и тоником.",
    price: "250 ₽",
  },
];

export default function MenuSection() {
  return (
    <section className="bg-[#E2A79E] py-24 md:py-36 px-6 md:px-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-14 md:mb-18 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-white/60 font-[family-name:var(--font-dm-sans)] mb-3">
              Меню
            </p>
            <h2 className="text-5xl md:text-7xl font-light font-[family-name:var(--font-cormorant)] text-white leading-tight">
              Наши <em>напитки</em>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/60 font-[family-name:var(--font-dm-sans)]">
            Каждый рецепт — результат сотен попыток найти идеальный баланс.
          </p>
        </div>

        {/* Main layout: Featured + list */}
        <div className="grid md:grid-cols-[1fr_1.1fr] gap-5">

          {/* ── Left: Featured drink ── */}
          <div className="bg-[#F7F4EF] rounded-3xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden min-h-[420px]">
            {/* Big decorative number */}
            <span
              className="absolute -bottom-6 -right-4 font-[family-name:var(--font-cormorant)] font-light text-[#E2A79E]/20 select-none leading-none pointer-events-none"
              style={{ fontSize: "clamp(8rem, 15vw, 14rem)" }}
              aria-hidden
            >
              01
            </span>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-[#87A987] text-white text-xs tracking-widest uppercase px-3 py-1.5 rounded-full font-[family-name:var(--font-dm-sans)]">
                  Фирменный
                </span>
                <span className="text-xs text-[#1A1A1A]/40 font-[family-name:var(--font-dm-sans)]">
                  Хит сезона
                </span>
              </div>

              <h3 className="text-4xl md:text-5xl font-light font-[family-name:var(--font-cormorant)] text-[#1A1A1A] leading-tight mb-4">
                Мятный
                <br />
                <em className="text-[#87A987]">Капучино</em>
              </h3>

              <p className="text-sm leading-relaxed text-[#1A1A1A]/55 font-[family-name:var(--font-dm-sans)] max-w-xs">
                Эспрессо, бархатистая молочная пена и свежие листья мяты.
                Напиток, который стал нашей визитной карточкой.
              </p>
            </div>

            {/* Price row */}
            <div className="flex items-end justify-between mt-8 relative z-10">
              <div>
                <p className="text-xs text-[#1A1A1A]/40 font-[family-name:var(--font-dm-sans)] mb-1">
                  Цена
                </p>
                <p className="text-4xl font-light font-[family-name:var(--font-cormorant)] text-[#1A1A1A]">
                  320 ₽
                </p>
              </div>
              {/* Decorative mint leaf dots */}
              <div className="flex gap-1.5">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="rounded-full bg-[#87A987]"
                    style={{
                      width: `${6 + i * 4}px`,
                      height: `${6 + i * 4}px`,
                      opacity: 0.2 + i * 0.2,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: 3 drinks as editorial list ── */}
          <div className="flex flex-col gap-4">
            {sideItems.map((item, i) => (
              <div
                key={item.name}
                className={`rounded-3xl p-7 flex items-start justify-between gap-4 relative overflow-hidden group transition-all duration-300 ${
                  i === 1
                    ? "bg-[#1a2e1a] flex-1"
                    : "bg-white/20 backdrop-blur-sm border border-white/20"
                }`}
              >
                {/* Hover reveal bar */}
                <div className="absolute left-0 inset-y-0 w-1 bg-[#E1A624] rounded-l-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`text-xs tracking-[0.25em] font-[family-name:var(--font-dm-sans)] ${
                        i === 1 ? "text-[#87A987]/70" : "text-white/50"
                      }`}
                    >
                      {item.num}
                    </span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full border font-[family-name:var(--font-dm-sans)] ${
                        i === 1
                          ? "border-[#87A987]/30 text-[#87A987]/70"
                          : "border-white/25 text-white/60"
                      }`}
                    >
                      {item.tag}
                    </span>
                  </div>

                  <h3
                    className={`text-2xl md:text-3xl font-light font-[family-name:var(--font-cormorant)] leading-snug ${
                      i === 1 ? "text-white" : "text-white"
                    }`}
                  >
                    {item.name}
                  </h3>

                  <p
                    className={`text-xs leading-relaxed mt-2 font-[family-name:var(--font-dm-sans)] ${
                      i === 1 ? "text-white/50" : "text-white/65"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>

                <div className="shrink-0 text-right">
                  <p
                    className={`text-2xl font-light font-[family-name:var(--font-cormorant)] ${
                      i === 1 ? "text-white" : "text-white"
                    }`}
                  >
                    {item.price}
                  </p>
                </div>
              </div>
            ))}

            {/* Footnote */}
            <p className="text-center text-xs text-white/45 font-[family-name:var(--font-dm-sans)] tracking-wide pt-1">
              Полное меню — в кофейне
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
