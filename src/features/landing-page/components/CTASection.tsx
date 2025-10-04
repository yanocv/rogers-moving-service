"use client";
import { Phone, Mail, MapPin, Clock, Shield } from "lucide-react";
import { useTranslations } from "next-intl";

const CTASection = () => {
  const t = useTranslations("landing");
  return (
    <section className="bg-gradient-to-br from-blue-600 to-purple-600 py-20 text-white">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-6 text-4xl font-bold md:text-5xl">{t("cta.title")}</h2>
        <p className="mb-8 text-xl opacity-90 md:text-2xl">{t("cta.desc")}</p>
        <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="group flex transform items-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-blue-600 transition-all duration-300 hover:scale-105 hover:bg-gray-100">
            <Phone className="mr-2 h-5 w-5" />
            {t("cta.call")}
          </button>
          <button className="flex items-center rounded-full border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-white hover:text-blue-600">
            <Mail className="mr-2 h-5 w-5" />
            {t("cta.email")}
          </button>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 text-sm opacity-80 sm:flex-row">
          <div className="flex items-center">
            <MapPin className="mr-2 h-4 w-4" />
            {t("cta.area")}
          </div>
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4" />
            {t("cta.availability")}
          </div>
          <div className="flex items-center">
            <Shield className="mr-2 h-4 w-4" />
            {t("cta.insured")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
