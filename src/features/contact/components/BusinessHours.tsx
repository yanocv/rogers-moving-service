import { Clock } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

export default function BusinessHours() {
  const t = useTranslations("contact");
  const businessHours = [
    { day: t("businessHours.monday"), hours: t("businessHours.weekdays") },
    { day: t("businessHours.tuesday"), hours: t("businessHours.weekdays") },
    { day: t("businessHours.wednesday"), hours: t("businessHours.weekdays") },
    { day: t("businessHours.thursday"), hours: t("businessHours.weekdays") },
    { day: t("businessHours.friday"), hours: t("businessHours.weekdays") },
    { day: t("businessHours.saturday"), hours: t("businessHours.saturday_hours") },
    { day: t("businessHours.sunday"), hours: t("businessHours.sunday_hours") },
  ];
  return (
    <div className="rounded-xl bg-white p-6 shadow-lg">
      <h2 className="mb-6 flex items-center text-2xl font-bold text-gray-800">
        <Clock className="mr-2 h-6 w-6 text-blue-600" />
        {t("businessHours.title")}
      </h2>
      <div className="space-y-2">
        {businessHours.map((item) => (
          <div key={item.day} className="flex items-center justify-between py-1">
            <span className="font-medium text-gray-700">{item.day}</span>
            <span className="text-gray-600">{item.hours}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3">
        <p className="text-sm font-medium text-red-700">{t("businessHours.emergency")}</p>
      </div>
    </div>
  );
}
