import Navbar from "@/components/Navbar";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Perspective, Highlight } from "@/components/ui/perspective-highlight";
import FeaturesSection from "@/components/sections/FeaturesSection";
import MenuSection from "@/components/sections/MenuSection";
import GallerySection from "@/components/sections/GallerySection";
import QuoteSection from "@/components/sections/QuoteSection";
import LocationSection from "@/components/sections/LocationSection";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ─── 1. Hero ─── */}
      <HeroGeometric
        badge="Specialty Coffee Bar"
        title1="Место, где"
        title2="время замедляется"
        subtitle="Авторские напитки, живая атмосфера и зерно от лучших обжарщиков — всё в одном месте."
        ctaText="Найти нас"
        ctaHref="#location"
      />

      {/* ─── 2. Intro strip (sage green) ─── */}
      <section className="bg-[#87A987] py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-3xl md:text-5xl font-light font-[family-name:var(--font-cormorant)] text-white leading-snug max-w-xl">
            Кофейня, где мята встречает эспрессо —
            <em> каждый день с 8 утра</em>
          </p>
          <div className="flex gap-12 shrink-0">
            {[
              { num: "3+", label: "года в городе" },
              { num: "40+", label: "позиций в меню" },
              { num: "∞", label: "хорошего настроения" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-4xl md:text-5xl font-light font-[family-name:var(--font-cormorant)] text-white">
                  {s.num}
                </p>
                <p className="text-xs text-white/60 tracking-wide font-[family-name:var(--font-dm-sans)] mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. About / Perspective-highlight ─── */}
      <section className="bg-[#F7F4EF] py-24 md:py-36 px-6 md:px-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
          {/* Left label */}
          <div className="flex-shrink-0 text-center md:text-left">
            <p className="text-xs tracking-[0.3em] uppercase text-[#87A987] font-[family-name:var(--font-dm-sans)] mb-4">
              О кофейне
            </p>
            <p
              className="font-[family-name:var(--font-cormorant)] font-light leading-none text-[#87A987]/[0.12] select-none"
              style={{ fontSize: "clamp(6rem, 12vw, 11rem)" }}
            >
              M&amp;C
            </p>
            <p className="text-sm text-[#1A1A1A]/40 font-[family-name:var(--font-dm-sans)] mt-2">
              Mint &amp; Coffee
            </p>
          </div>

          {/* Right: perspective card */}
          <Perspective maxRotateX={10} maxRotateY={18} className="flex-1 w-full">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_2px_60px_rgba(135,169,135,0.15)]">
              <article className="text-[16px] md:text-[18px] leading-[1.9] text-[#1A1A1A]/70 font-[family-name:var(--font-dm-sans)] font-light">
                <p className="mb-5">
                  <Highlight color="green">
                    Mint &amp; Coffee — это не просто кофейня.
                  </Highlight>{" "}
                  Это пространство, где мята встречает эспрессо, а каждая чашка
                  рассказывает историю зерна, страны и рук, которые её
                  приготовили.
                </p>
                <p className="mb-5">
                  Мы варим{" "}
                  <Highlight color="purple">
                    фирменные напитки с душой
                  </Highlight>{" "}
                  — от классического флэт уайта до авторских сезонных коктейлей
                  на основе свежей мяты и натуральных сиропов.
                </p>
                <p>
                  Только{" "}
                  <Highlight color="red">
                    зерно от лучших обжарщиков
                  </Highlight>{" "}
                  и живая атмосфера, в которой хочется задержаться подольше.
                  Приходите за кофе — остаётесь за ощущением.
                </p>
              </article>

              <div className="mt-8 pt-6 border-t border-[#87A987]/15 flex items-center gap-4">
                <div className="h-9 w-9 rounded-full bg-[#87A987] flex items-center justify-center text-white font-[family-name:var(--font-cormorant)] font-medium text-lg">
                  M
                </div>
                <div>
                  <p className="text-sm font-medium text-[#1A1A1A]/70 font-[family-name:var(--font-dm-sans)]">
                    Команда Mint &amp; Coffee
                  </p>
                  <p className="text-xs text-[#1A1A1A]/35 font-[family-name:var(--font-dm-sans)]">
                    с заботой о каждом госте
                  </p>
                </div>
              </div>
            </div>
          </Perspective>
        </div>
      </section>

      {/* ─── 4. Features (sage green full-bleed) ─── */}
      <FeaturesSection />

      {/* ─── 5. Menu (dusty rose full-bleed) ─── */}
      <MenuSection />

      {/* ─── 6. Gallery ─── */}
      <GallerySection />

      {/* ─── 7. Marquee strip (rose) ─── */}
      <div className="bg-[#E2A79E] py-5 overflow-hidden">
        <div className="flex gap-10 whitespace-nowrap" style={{ animation: "marquee 20s linear infinite" }}>
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={i}
              className="text-sm uppercase tracking-[0.35em] text-white/80 font-[family-name:var(--font-dm-sans)] inline-flex items-center gap-10"
            >
              Specialty Coffee
              <span className="text-white/40">◆</span>
              Авторские напитки
              <span className="text-white/40">◆</span>
              Свежая обжарка
              <span className="text-white/40">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ─── 8. Quote (dark green) ─── */}
      <QuoteSection />

      {/* ─── 9. Location & Footer ─── */}
      <LocationSection />
    </>
  );
}
