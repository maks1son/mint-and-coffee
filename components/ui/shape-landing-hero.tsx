"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate: rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.1]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.06)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.12),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

interface HeroProps {
  badge?: string;
  title1?: string;
  title2?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

function HeroGeometric({
  badge = "Specialty Coffee Bar",
  title1 = "Место, где",
  title2 = "время замедляется",
  subtitle = "Авторские напитки, живая атмосфера и зерно от лучших обжарщиков — всё в одном месте.",
  ctaText = "Найти нас",
  ctaHref = "#location",
}: HeroProps) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0A0D0A]">
      {/* Ambient gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#87A987]/[0.06] via-transparent to-[#E2A79E]/[0.04] blur-3xl" />

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={620}
          height={140}
          rotate={12}
          gradient="from-[#87A987]/[0.60]"
          className="left-[-8%] md:left-[-2%] top-[18%] md:top-[22%]"
        />
        <ElegantShape
          delay={0.5}
          width={480}
          height={115}
          rotate={-14}
          gradient="from-[#E2A79E]/[0.55]"
          className="right-[-4%] md:right-[2%] top-[68%] md:top-[72%]"
        />
        <ElegantShape
          delay={0.4}
          width={290}
          height={75}
          rotate={-8}
          gradient="from-[#E1A624]/[0.45]"
          className="left-[6%] md:left-[12%] bottom-[8%] md:bottom-[12%]"
        />
        <ElegantShape
          delay={0.6}
          width={210}
          height={58}
          rotate={20}
          gradient="from-[#87A987]/[0.50]"
          className="right-[18%] md:right-[22%] top-[8%] md:top-[12%]"
        />
        <ElegantShape
          delay={0.7}
          width={145}
          height={38}
          rotate={-25}
          gradient="from-[#E2A79E]/[0.45]"
          className="left-[22%] md:left-[28%] top-[4%] md:top-[8%]"
        />
        <ElegantShape
          delay={0.8}
          width={180}
          height={50}
          rotate={15}
          gradient="from-[#E1A624]/[0.40]"
          className="right-[5%] md:right-[10%] bottom-[20%] md:bottom-[25%]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] mb-8 md:mb-10"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#E1A624] inline-block" />
            <span className="text-sm text-white/50 tracking-widest uppercase font-[family-name:var(--font-dm-sans)]">
              {badge}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-light mb-4 md:mb-6 tracking-tight font-[family-name:var(--font-cormorant)]">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                {title1}
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#87A987] via-white/85 to-[#E2A79E] italic">
                {title2}
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-base sm:text-lg text-white/35 mb-10 leading-relaxed font-light tracking-wide max-w-lg mx-auto font-[family-name:var(--font-dm-sans)]">
              {subtitle}
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <a
              href={ctaHref}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#87A987] text-white text-sm tracking-widest uppercase font-[family-name:var(--font-dm-sans)] font-medium hover:bg-[#a8c4a8] transition-colors duration-300"
            >
              {ctaText}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#F7F4EF] to-transparent pointer-events-none" />
      {/* Top fade */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0A0D0A]/80 to-transparent pointer-events-none" />
    </div>
  );
}

export { HeroGeometric };
