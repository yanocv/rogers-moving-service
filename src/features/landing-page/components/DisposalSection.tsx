"use client";
import { Package, Check } from "lucide-react";
import { useTranslations } from "next-intl";

const DisposalSection = () => {
  const t = useTranslations("landing");
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative">
            <div className="aspect-w-16 aspect-h-12 overflow-hidden rounded-2xl shadow-2xl">
              <div className="flex items-center justify-center bg-gradient-to-br from-orange-400 to-red-500 p-8">
                <div className="text-center text-white">
                  <Package className="mx-auto mb-4 h-32 w-32 opacity-80" />
                  <h3 className="mb-2 text-2xl font-bold">{t("ecoDisposal.title")}</h3>
                  <p className="opacity-80">{t("ecoDisposal.desc")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">{t("disposal.title")}</h2>
            <p className="text-lg leading-relaxed text-gray-700">{t("disposal.desc")}</p>
            <div className="space-y-3">
              {[
                t("disposal.feature1"),
                t("disposal.feature2"),
                t("disposal.feature3"),
                t("disposal.feature4"),
              ].map((feature) => (
                <div key={feature} className="flex items-center">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisposalSection;
