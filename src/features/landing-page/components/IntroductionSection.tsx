"use client";
import { Package } from "lucide-react";
import { useTranslations } from "next-intl";

const IntroductionSection = () => {
  const t = useTranslations("landing");
  return (
    <section className="bg-gray-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl leading-tight font-bold md:text-4xl">{t("intro.title")}</h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-300">
              <p>{t("intro.p1")}</p>
              <p>{t("intro.p2")}</p>
              <p>{t("intro.p3")}</p>
              <p className="font-semibold text-blue-400">{t("intro.p4")}</p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-w-16 aspect-h-10 overflow-hidden rounded-2xl shadow-2xl">
              <div className="flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-8">
                <div className="text-center">
                  <Package className="mx-auto mb-4 h-24 w-24 text-white/80" />
                  <h3 className="mb-2 text-2xl font-bold">{t("intro.box.title")}</h3>
                  <p className="text-white/80">{t("intro.box.desc")}</p>
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 h-20 w-20 animate-pulse rounded-full bg-blue-400 opacity-60" />
            <div className="absolute -bottom-4 -left-4 h-16 w-16 animate-pulse rounded-full bg-purple-400 opacity-60 delay-1000" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
