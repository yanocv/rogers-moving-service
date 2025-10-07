"use client";

import { useTranslations } from "next-intl";

import FooterSection from "@/features/landing-page/components/FooterSection";

import { ServiceList } from "./components/ServiceList";

export default function ServicePage() {
  const t = useTranslations("services");
  return (
    <>
      <section id="services" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">{t("title")}</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">{t("desc")}</p>
          </div>
          <ServiceList />
        </div>
      </section>
      <FooterSection />
    </>
  );
}
