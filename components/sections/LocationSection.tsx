export default function LocationSection() {
  const hours = [
    { days: "Понедельник — Пятница", time: "08:00 — 21:00" },
    { days: "Суббота — Воскресенье", time: "09:00 — 22:00" },
  ];

  return (
    <section id="location" className="bg-[#0A0D0A] text-white py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Hours */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#87A987] font-[family-name:var(--font-dm-sans)] mb-6">
              Часы работы
            </p>
            <h2 className="text-5xl md:text-6xl font-light font-[family-name:var(--font-cormorant)] leading-tight mb-12">
              Мы открыты
              <br />
              <em className="text-[#E2A79E]">каждый день</em>
            </h2>
            <div className="space-y-5">
              {hours.map((row) => (
                <div
                  key={row.days}
                  className="flex items-baseline justify-between border-b border-white/10 pb-4 gap-4"
                >
                  <span className="text-sm text-white/50 font-[family-name:var(--font-dm-sans)]">
                    {row.days}
                  </span>
                  <span className="text-lg font-[family-name:var(--font-cormorant)] font-light whitespace-nowrap">
                    {row.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Address */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#E1A624] font-[family-name:var(--font-dm-sans)] mb-6">
              Адрес
            </p>
            <address className="not-italic">
              <p className="text-4xl md:text-5xl font-light font-[family-name:var(--font-cormorant)] leading-snug mb-8">
                ул. Примерная, 42
                <br />
                <span className="text-white/40">Москва, 101000</span>
              </p>
            </address>

            <div className="space-y-3 mb-10">
              <p className="text-sm text-white/50 font-[family-name:var(--font-dm-sans)]">
                м. Примерная, 5 минут пешком
              </p>
              <p className="text-sm text-white/50 font-[family-name:var(--font-dm-sans)]">
                Бесплатная парковка во дворе
              </p>
            </div>

            <a
              href="tel:+74991234567"
              className="inline-flex items-center gap-3 group"
            >
              <span className="h-px w-8 bg-[#87A987] group-hover:w-14 transition-all duration-300" />
              <span className="text-sm tracking-widest text-white/60 group-hover:text-white transition-colors font-[family-name:var(--font-dm-sans)]">
                +7 (499) 123-45-67
              </span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/25 font-[family-name:var(--font-dm-sans)] tracking-wide">
          <span className="font-[family-name:var(--font-cormorant)] text-base italic font-light text-white/30">
            mint & coffee
          </span>
          <span>© {new Date().getFullYear()} Все права защищены</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white/60 transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-white/60 transition-colors">
              Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
