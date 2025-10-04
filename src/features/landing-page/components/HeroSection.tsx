"use client";
import { Truck, ChevronDown, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

const HeroSection = () => {
  const t = useTranslations("landing");
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="bg-grid-pattern absolute inset-0 opacity-5" />
        <div className="absolute top-20 left-10 h-72 w-72 animate-pulse rounded-full bg-blue-300 opacity-20 mix-blend-multiply blur-xl filter" />
        <div className="absolute top-40 right-10 h-72 w-72 animate-pulse rounded-full bg-purple-300 opacity-20 mix-blend-multiply blur-xl filter delay-1000" />
        <div className="absolute bottom-20 left-20 h-72 w-72 animate-pulse rounded-full bg-indigo-300 opacity-20 mix-blend-multiply blur-xl filter delay-2000" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div className="animate-fade-in-up">
          <h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-7xl">
            {t("hero.title")}{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Roger&#39;s Moving Service JP
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-4xl text-xl leading-relaxed text-gray-700 md:text-2xl">
            {t("hero.subtitle")}
            <span className="font-semibold text-blue-600">{t("hero.smooth")}</span>.
          </p>
          <p className="mx-auto mb-12 max-w-3xl text-lg text-gray-600 md:text-xl">
            {t("hero.opportunity")}
          </p>

          <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="group flex transform items-center rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-xl">
              {t("hero.cta.quote")}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="rounded-full border-2 border-blue-600 px-8 py-4 text-lg font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white">
              {t("hero.cta.learn")}
            </button>
          </div>
        </div>

        {/* Animated Truck */}
        <div className="relative">
          <div className="animate-bounce-slow">
            <Truck className="mx-auto h-24 w-24 text-blue-600 opacity-80" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
        <ChevronDown className="h-6 w-6 text-gray-400" />
      </div>
    </section>
  );
};

export default HeroSection;
