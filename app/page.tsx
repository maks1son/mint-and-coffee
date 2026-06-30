import Image from "next/image";
import {
  ArrowRight,
  Coffee,
  CupSoda,
  FlaskConical,
  Heart,
  Leaf,
  MapPin,
  ShoppingBag,
  Sparkles,
  Star,
} from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "Натуральная мята",
    text: "Свежая зелень и мягкий холодок без сиропного шума.",
  },
  {
    icon: Coffee,
    title: "Спешелти зерно",
    text: "Плотная база для латте, эспрессо и холодных напитков.",
  },
  {
    icon: CupSoda,
    title: "В любое время",
    text: "Теплый кофе утром, айс-кофе днем, наборы с собой.",
  },
];

const steps = [
  {
    title: "Выбери настроение",
    text: "Латте с мятой, холодный кофе или чистый эспрессо.",
  },
  {
    title: "Добавь акцент",
    text: "Мята, сливочная текстура, овсяное молоко или лед.",
  },
  {
    title: "Забери свой ритм",
    text: "Пара минут у стойки, и напиток готов к прогулке.",
  },
];

const menuItems = [
  {
    label: "Хит",
    name: "Мятный айс-кофе",
    desc: "Холодный кофе, свежая мята, мягкая сладость.",
    price: "390 ₽",
    tone: "bg-[#0d6f67] text-[#fbf2d8]",
    image: "/generated/menu/mint-iced-coffee.png",
  },
  {
    label: "Новинка",
    name: "Латте с мятой",
    desc: "Нежный латте с мятным сиропом и овсяным молоком.",
    price: "350 ₽",
    tone: "bg-[#fbf2d8] text-[#1c2d2f]",
    image: "/generated/menu/mint-latte.png",
  },
  {
    label: "Классика",
    name: "Эспрессо",
    desc: "Плотный вкус, стойкая крема, короткий финал.",
    price: "220 ₽",
    tone: "bg-[#7a452d] text-[#fff0d4]",
    image: "/generated/menu/espresso.png",
  },
  {
    label: "Холодный",
    name: "Колд брю",
    desc: "Медленная экстракция, мятный послевкусие.",
    price: "390 ₽",
    tone: "bg-[#f5bc35] text-[#19282a]",
    image: "/generated/menu/cold-brew.png",
  },
  {
    label: "Без кофеина",
    name: "Декаф латте",
    desc: "Спокойный вкус для вечера и долгих разговоров.",
    price: "340 ₽",
    tone: "bg-[#276f78] text-[#f7ead2]",
    image: "/generated/menu/decaf-latte.png",
  },
  {
    label: "Для дома",
    name: "Mint syrup",
    desc: "Мятный сироп для домашнего кофе и десертов.",
    price: "650 ₽",
    tone: "bg-[#efe2c5] text-[#1c2d2f]",
    image: "/generated/menu/mint-syrup.png",
  },
];

const labNotes = [
  {
    icon: FlaskConical,
    title: "Точность",
    text: "Проверяем рецепты так, чтобы вкус повторялся каждый день.",
  },
  {
    icon: Sparkles,
    title: "Свежесть",
    text: "Работаем маленькими партиями и не держим напитки в ожидании.",
  },
  {
    icon: Heart,
    title: "Забота",
    text: "Готовим быстро, но без ощущения конвейера.",
  },
];

const asset = (path: string) => `/mint-and-coffee${path}`;

export default function Home() {
  return (
    <main className="min-h-[100dvh] bg-[#f8f0d8] text-[#19282a]">
      <section className="relative min-h-[100dvh] overflow-hidden bg-[#0b5058] text-[#fff4d7]">
        <Image
          src={asset("/generated/mint-hero.png")}
          alt="Айс-кофе с мятой и налитым эспрессо"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,35,39,0.88)_0%,rgba(7,35,39,0.58)_42%,rgba(7,35,39,0.12)_100%)]" />

        <header className="relative z-10 mx-auto flex h-20 max-w-[1480px] items-center justify-between px-5 md:px-8">
          <a href="#top" className="brand-mark text-3xl leading-[0.82] text-[#fff4d7] md:text-4xl">
            Mint &amp;
            <br />
            Coffee
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-[#fff4d7]/84 md:flex">
            <a className="nav-link" href="#menu">
              Меню
            </a>
            <a className="nav-link" href="#how">
              Как выбрать
            </a>
            <a className="nav-link" href="#lab">
              Подход
            </a>
            <a className="nav-link" href="#location">
              Контакты
            </a>
          </nav>

          <a
            href="#menu"
            className="inline-flex items-center gap-2 rounded-full bg-[#ffd45a] px-4 py-2.5 text-sm font-extrabold text-[#172527] shadow-[0_18px_45px_rgba(7,35,39,0.24)] transition hover:-translate-y-0.5 hover:bg-[#ffe07e] active:translate-y-0"
          >
            Выбрать
            <ShoppingBag size={16} strokeWidth={1.8} />
          </a>
        </header>

        <div id="top" className="relative z-10 mx-auto grid min-h-[calc(100dvh-5rem)] max-w-[1480px] items-center px-5 pb-16 pt-10 md:px-8">
          <div className="hero-copy max-w-3xl">
            <h1 className="brand-mark text-[clamp(4.6rem,10vw,11rem)] leading-[0.82] text-[#fff4d7]">
              Mint &amp; Coffee
            </h1>
            <p className="mt-8 max-w-3xl text-2xl font-extrabold leading-tight text-[#fff4d7] md:text-4xl">
              Свежая мята. Чистый вкус. Твой момент.
            </p>
            <p className="mt-6 max-w-md text-base leading-8 text-[#fff4d7]/82 md:text-lg">
              Авторский кофе с мятой для тех, кто хочет бодрость без суеты.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a className="button-primary" href="#menu">
                Смотреть меню
                <ArrowRight size={18} strokeWidth={1.8} />
              </a>
              <a className="button-ghost" href="#location">
                <MapPin size={18} strokeWidth={1.8} />
                Где найти
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-strip border-y border-[#19282a]/25 bg-[#ffd45a]">
        <div className="mx-auto grid max-w-[1480px] divide-y divide-[#19282a]/20 md:grid-cols-3 md:divide-x md:divide-y-0">
          {benefits.map(({ icon: Icon, title, text }) => (
            <article key={title} className="grid grid-cols-[64px_1fr] gap-5 px-5 py-8 md:px-8">
              <div className="flex size-14 items-center justify-center rounded-full border border-[#19282a]/35">
                <Icon size={28} strokeWidth={1.6} />
              </div>
              <div>
                <h2 className="text-base font-extrabold">{title}</h2>
                <p className="mt-2 max-w-sm text-sm leading-6 text-[#19282a]/72">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="how" className="grid-paper border-b border-[#19282a]/18 px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1480px]">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="section-title text-[#19282a]">
              Как выбрать <span className="brand-word">Mint &amp; Coffee</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#19282a]/68">
              Два способа поймать мятный вкус: теплый, сливочный и спокойный или холодный, яркий и быстрый.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_340px_1fr] lg:items-stretch">
            <article className="choice-panel">
              <div className="relative min-h-[420px] overflow-hidden rounded-[26px]">
                <Image
                  src={asset("/generated/mint-choice.png")}
                  alt="Латте и айс-кофе с мятой на светлом фоне"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="mt-6">
                <h3 className="choice-title">Теплый латте с мятой</h3>
                <p className="mt-3 text-sm leading-7 text-[#19282a]/68">
                  Нежный, сливочный, с мягким ароматом мяты и плотным кофе в основе.
                </p>
              </div>
            </article>

            <aside className="flex flex-col justify-center">
              <div className="rounded-full bg-[#f5bc35] px-6 py-3 text-center text-sm font-extrabold text-[#19282a]">
                Это просто
              </div>
              <div className="mt-6 divide-y divide-[#19282a]/16 border-y border-[#19282a]/16">
                {steps.map((step, index) => (
                  <div key={step.title} className="grid grid-cols-[44px_1fr] gap-4 py-6">
                    <span className="font-brand-number text-2xl text-[#d89f25]">{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="text-sm font-extrabold">{step.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[#19282a]/64">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a className="button-dark mt-8" href="#menu">
                Смотреть меню
                <ArrowRight size={18} strokeWidth={1.8} />
              </a>
            </aside>

            <article className="choice-panel lg:self-end">
              <div className="relative min-h-[420px] overflow-hidden rounded-[26px]">
                <Image
                  src={asset("/generated/mint-hero.png")}
                  alt="Холодный кофе со льдом и мятой"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover object-right"
                />
              </div>
              <div className="mt-6">
                <h3 className="choice-title">Айс-кофе за минуту</h3>
                <p className="mt-3 text-sm leading-7 text-[#19282a]/68">
                  Освежающий, бодрящий и собранный для прогулки, работы или жаркого дня.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="menu" className="bg-[#f8f0d8] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="menu-sticky">
              <h2 className="section-title max-w-xl text-[#19282a]">
                Кофе, который хочется повторить
              </h2>
              <p className="mt-6 max-w-md text-base leading-8 text-[#19282a]/68">
                Витрина напитков собрана как продуктовая коллекция: цвет, вкус и роль каждого напитка видны сразу.
              </p>
              <a className="button-primary mt-8" href="#location">
                Адрес кофейни
                <ArrowRight size={18} strokeWidth={1.8} />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {menuItems.map((item) => (
                <article key={item.name} className={`menu-card group ${item.tone}`}>
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-xs font-extrabold opacity-72">{item.label}</p>
                    <Star size={20} strokeWidth={1.5} />
                  </div>
                  <div className="menu-card-image relative mt-5 aspect-[1.08] overflow-hidden rounded-[18px]">
                    <Image
                      src={asset(item.image)}
                      alt={`${item.name} product photo`}
                      fill
                      sizes="(min-width: 1280px) 22vw, (min-width: 640px) 44vw, 92vw"
                      className="object-cover transition duration-300 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="mt-5 flex flex-1 flex-col">
                    <h3 className="text-3xl font-black leading-[1.05]">{item.name}</h3>
                    <p className="mt-4 text-sm leading-6 opacity-78">{item.desc}</p>
                    <p className="mt-auto pt-7 text-2xl font-extrabold">{item.price}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="lab" className="bg-[#151817] px-5 py-20 text-[#fff1d2] md:px-8 md:py-28">
        <div className="mx-auto grid max-w-[1480px] gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-[#fff1d2]/18">
            <Image
              src={asset("/generated/mint-lab.png")}
              alt="Темная кофейная лаборатория с фильтрами и кофейной экстракцией"
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover object-center"
            />
          </div>

          <div>
            <h2 className="section-title text-[#fff1d2]">Лучше через точность</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#fff1d2]/72">
              Мы относимся к кофе как к маленькой лаборатории вкуса: меньше случайности, больше стабильного удовольствия.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {labNotes.map(({ icon: Icon, title, text }) => (
                <article key={title} className="lab-note">
                  <Icon size={28} strokeWidth={1.5} />
                  <div>
                    <h3 className="text-lg font-extrabold">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#fff1d2]/62">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer id="location" className="grid-paper px-5 py-16 md:px-8">
        <div className="mx-auto grid max-w-[1480px] gap-10 md:grid-cols-[1fr_1fr] md:items-end">
          <div>
            <p className="brand-mark text-5xl leading-[0.86] text-[#19282a] md:text-7xl">
              Mint &amp;
              <br />
              Coffee
            </p>
            <p className="mt-5 max-w-md text-base leading-8 text-[#19282a]/68">
              Кофе, мята и короткая пауза в середине дня.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="footer-tile">
              <MapPin size={24} strokeWidth={1.7} />
              <div>
                <h3 className="font-extrabold">Где найти</h3>
                <p className="mt-2 text-sm leading-6 text-[#19282a]/64">Сызрань, центр города</p>
              </div>
            </div>
            <div className="footer-tile">
              <Coffee size={24} strokeWidth={1.7} />
              <div>
                <h3 className="font-extrabold">Каждый день</h3>
                <p className="mt-2 text-sm leading-6 text-[#19282a]/64">Кофе с утра и напитки с собой</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
