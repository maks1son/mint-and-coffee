export default function QuoteSection() {
  return (
    <section className="bg-[#1a2e1a] py-24 md:py-36 px-6 md:px-10 overflow-hidden relative">
      {/* Big decorative text */}
      <p
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-[family-name:var(--font-cormorant)] font-light leading-none select-none pointer-events-none"
        style={{ fontSize: "clamp(6rem, 18vw, 18rem)", color: "rgba(135,169,135,0.07)" }}
        aria-hidden
      >
        coffee
      </p>

      <div className="relative max-w-4xl mx-auto text-center">
        <span className="block text-[#87A987] font-[family-name:var(--font-cormorant)] text-7xl md:text-9xl leading-none mb-6 opacity-60">
          &ldquo;
        </span>
        <blockquote className="text-3xl md:text-5xl lg:text-6xl font-light font-[family-name:var(--font-cormorant)] text-white leading-snug italic">
          Хороший кофе не нуждается
          <br />
          в объяснениях
        </blockquote>
        <p className="mt-8 text-sm tracking-[0.3em] uppercase text-[#87A987]/70 font-[family-name:var(--font-dm-sans)]">
          — наш принцип с первого дня
        </p>
      </div>
    </section>
  );
}
