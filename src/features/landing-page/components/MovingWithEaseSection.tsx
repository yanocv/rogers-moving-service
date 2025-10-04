"use client";
import { Truck, Shield, Clock, Zap } from "lucide-react";
import { useTranslations } from "next-intl";

const MovingWithEaseSection = () => {
  const t = useTranslations("landing");
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative">
            <div className="aspect-w-16 aspect-h-12 overflow-hidden rounded-2xl shadow-2xl">
              <div className="flex items-center justify-center bg-gradient-to-br from-green-400 to-blue-500 p-8">
                <div className="text-center text-white">
                  <Truck className="mx-auto mb-4 h-32 w-32 opacity-80" />
                  <h3 className="mb-2 text-2xl font-bold">{t("ease.box.title")}</h3>
                  <p className="opacity-80">{t("ease.box.desc")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">{t("ease.title")}</h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                <span className="font-semibold text-blue-600">{t("ease.p1.bold")}</span>{" "}
                {t("ease.p1.rest")}
              </p>
              <p>{t("ease.p2")}</p>
              <p>{t("ease.p3")}</p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center rounded-full bg-blue-50 px-4 py-2">
                <Shield className="mr-2 h-5 w-5 text-blue-600" />
                <span className="font-medium text-blue-800">{t("ease.badge.insured")}</span>
              </div>
              <div className="flex items-center rounded-full bg-green-50 px-4 py-2">
                <Clock className="mr-2 h-5 w-5 text-green-600" />
                <span className="font-medium text-green-800">{t("ease.badge.ontime")}</span>
              </div>
              <div className="flex items-center rounded-full bg-purple-50 px-4 py-2">
                <Zap className="mr-2 h-5 w-5 text-purple-600" />
                <span className="font-medium text-purple-800">{t("ease.badge.quick")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovingWithEaseSection;
