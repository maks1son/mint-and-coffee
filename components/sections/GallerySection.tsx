import Image from "next/image";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=900&q=80",
    alt: "Латте арт в чашке",
  },
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=80",
    alt: "Интерьер кофейни",
  },
  {
    src: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=900&q=80",
    alt: "Кофейные зёрна",
  },
  {
    src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=900&q=80",
    alt: "Уютный угол кофейни",
  },
  {
    src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=900&q=80",
    alt: "Приготовление кофе",
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-[#F7F4EF] py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header row */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#87A987] font-[family-name:var(--font-dm-sans)] mb-3">
              Атмосфера
            </p>
            <h2 className="text-5xl md:text-7xl font-light font-[family-name:var(--font-cormorant)] text-[#1A1A1A] leading-none">
              Пространство,
              <br />
              <em>созданное для вас</em>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-[#1A1A1A]/50 font-[family-name:var(--font-dm-sans)]">
            Каждая деталь продумана так, чтобы вы могли замедлиться,
            насладиться вкусом и побыть собой.
          </p>
        </div>

        {/* Main 2-col layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Left: tall image */}
          <div className="relative overflow-hidden rounded-3xl h-[480px] md:h-[600px]">
            <Image
              src={photos[0].src}
              alt={photos[0].alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* overlay tag */}
            <div className="absolute bottom-6 left-6">
              <span className="bg-[#87A987] text-white text-xs tracking-widest uppercase px-4 py-2 rounded-full font-[family-name:var(--font-dm-sans)]">
                Латте арт
              </span>
            </div>
          </div>

          {/* Right: stacked */}
          <div className="flex flex-col gap-4">
            <div className="relative overflow-hidden rounded-3xl h-[280px]">
              <Image
                src={photos[1].src}
                alt={photos[1].alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Colour card */}
            <div className="rounded-3xl bg-[#E2A79E] h-[296px] flex flex-col items-center justify-center p-8 text-center gap-3">
              <p className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light italic text-white leading-tight">
                &ldquo;Зайти
                <br />
                на кофе&rdquo;
              </p>
              <span className="text-xs text-white/70 tracking-widest uppercase font-[family-name:var(--font-dm-sans)]">
                каждое утро
              </span>
            </div>
          </div>
        </div>

        {/* Bottom 3-col row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="relative overflow-hidden rounded-3xl h-[240px]">
            <Image
              src={photos[2].src}
              alt={photos[2].alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </div>

          <div className="rounded-3xl bg-[#87A987] h-[240px] flex flex-col items-center justify-center p-6 text-center gap-2">
            <p className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-white">
              Specialty
            </p>
            <p className="font-[family-name:var(--font-cormorant)] text-4xl font-light italic text-white/70">
              Coffee
            </p>
            <span className="mt-2 text-xs text-white/60 tracking-[0.3em] uppercase font-[family-name:var(--font-dm-sans)]">
              Свежая обжарка
            </span>
          </div>

          <div className="relative overflow-hidden rounded-3xl h-[240px]">
            <Image
              src={photos[4].src}
              alt={photos[4].alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
