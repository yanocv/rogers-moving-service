"use client";

import "./styles.css";

import {
  Truck,
  Home,
  Package,
  Shield,
  Clock,
  Star,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Check,
  ArrowRight,
  Users,
  Award,
  Zap,
} from "lucide-react";
import { useTranslations } from "next-intl";

const LandingPage = () => {
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

  const stats = [
    { icon: <Users className="h-6 w-6" />, value: "5000+", label: t("stats.customers") },
    { icon: <Award className="h-6 w-6" />, value: "15+", label: t("stats.experience") },
    { icon: <Truck className="h-6 w-6" />, value: "100%", label: t("stats.success") },
    { icon: <Star className="h-6 w-6" />, value: "4.9/5", label: t("stats.rating") },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
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
                Roger's Moving Service JP
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

      {/* Stats Section */}
      <section className="bg-gray-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group text-center transition-transform duration-300 hover:scale-105"
              >
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-blue-600 p-3 transition-colors group-hover:bg-blue-500">
                    {stat.icon}
                  </div>
                </div>
                <div className="mb-2 text-3xl font-bold">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
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

      {/* Services Section */}
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

      {/* Moving with Ease Section */}
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

      {/* Storage Solutions Section */}
      <section className="bg-gray-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="order-2 space-y-6 md:order-1">
              <h2 className="text-3xl font-bold md:text-4xl">{t("storage.title")}</h2>
              <p className="text-lg leading-relaxed text-gray-300">{t("storage.desc")}</p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="rounded-xl bg-gray-800 p-4 text-center">
                  <Shield className="mx-auto mb-2 h-8 w-8 text-blue-400" />
                  <div className="text-sm font-medium">{t("storage.badge.security")}</div>
                </div>
                <div className="rounded-xl bg-gray-800 p-4 text-center">
                  <Home className="mx-auto mb-2 h-8 w-8 text-green-400" />
                  <div className="text-sm font-medium">{t("storage.badge.climate")}</div>
                </div>
              </div>
            </div>

            <div className="relative order-1 md:order-2">
              <div className="aspect-w-16 aspect-h-12 overflow-hidden rounded-2xl shadow-2xl">
                <div className="flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 p-8">
                  <div className="text-center text-white">
                    <Package className="mx-auto mb-4 h-32 w-32 opacity-80" />
                    <h3 className="mb-2 text-2xl font-bold">{t("storage.box.title")}</h3>
                    <p className="opacity-80">{t("storage.box.desc")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disposal Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative">
              <div className="aspect-w-16 aspect-h-12 overflow-hidden rounded-2xl shadow-2xl">
                <div className="flex items-center justify-center bg-gradient-to-br from-orange-400 to-red-500 p-8">
                  <div className="text-center text-white">
                    <Package className="mx-auto mb-4 h-32 w-32 opacity-80" />
                    <h3 className="mb-2 text-2xl font-bold">Eco-Friendly Disposal</h3>
                    <p className="opacity-80">Responsible waste management</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                {t("disposal.title")}
              </h2>
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

      {/* CTA Section */}
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

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center">
                <Truck className="mr-2 h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">Roger's Moving JP</span>
              </div>
              <p className="leading-relaxed text-gray-400">{t("footer.desc")}</p>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold text-blue-400">
                {t("footer.services.title")}
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>{t("footer.services.residential")}</li>
                <li>{t("footer.services.storage")}</li>
                <li>{t("footer.services.disposal")}</li>
                <li>{t("footer.services.packing")}</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold text-blue-400">
                {t("footer.areas.title")}
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>{t("footer.areas.tokyo")}</li>
                <li>{t("footer.areas.kanagawa")}</li>
                <li>{t("footer.areas.saitama")}</li>
                <li>{t("footer.areas.chiba")}</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold text-blue-400">
                {t("footer.contact.title")}
              </h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  <span>{t("footer.contact.phone")}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  <span>{t("footer.contact.email")}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>{t("footer.contact.location")}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Roger's Moving Service JP. {t("footer.copyright")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
