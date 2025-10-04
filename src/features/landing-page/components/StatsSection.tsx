"use client";
import { Users, Award, Truck, Star } from "lucide-react";
import { useTranslations } from "next-intl";

const StatsSection = () => {
  const t = useTranslations("landing");
  const stats = [
    { icon: <Users className="h-6 w-6" />, value: "5000+", label: t("stats.customers") },
    { icon: <Award className="h-6 w-6" />, value: "15+", label: t("stats.experience") },
    { icon: <Truck className="h-6 w-6" />, value: "100%", label: t("stats.success") },
    { icon: <Star className="h-6 w-6" />, value: "4.9/5", label: t("stats.rating") },
  ];
  return (
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
  );
};

export default StatsSection;
