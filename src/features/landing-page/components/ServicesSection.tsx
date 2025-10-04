"use client";
import { Home, Package, Truck, Check } from "lucide-react";
import { useTranslations } from "next-intl";

const ServicesSection = () => {
  const t = useTranslations("landing");
  const services = [
    {
      icon: <Home className="h-8 w-8" />,
      title: t("services.residential.title"),
      description: t("services.residential.description"),
      features: [
        t("services.residential.feature1"),
        t("services.residential.feature2"),
        t("services.residential.feature3"),
        t("services.residential.feature4"),
      ],
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: t("services.storage.title"),
      description: t("services.storage.description"),
      features: [
        t("services.storage.feature1"),
        t("services.storage.feature2"),
        t("services.storage.feature3"),
        t("services.storage.feature4"),
      ],
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: t("services.disposal.title"),
      description: t("services.disposal.description"),
      features: [
        t("services.disposal.feature1"),
        t("services.disposal.feature2"),
        t("services.disposal.feature3"),
        t("services.disposal.feature4"),
      ],
    },
  ];
  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            {t("services.title")}
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">{t("services.desc")}</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="group">
              <div className="h-full transform rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  {service.icon}
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900">{service.title}</h3>
                <p className="mb-6 leading-relaxed text-gray-600">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <Check className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
