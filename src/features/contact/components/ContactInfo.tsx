import { Phone, Mail, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

export default function ContactInfo() {
  const t = useTranslations("contact");
  return (
    <div className="rounded-xl bg-white p-6 shadow-lg">
      <h2 className="mb-6 flex items-center text-2xl font-bold text-gray-800">
        <Phone className="mr-2 h-6 w-6 text-blue-600" />
        {t("contactInfo.title")}
      </h2>
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
          <div>
            <p className="font-semibold text-gray-700">{t("contactInfo.phone")}</p>
            <a
              href={`tel:${t("contactInfo.phoneNumber")}`}
              className="text-blue-600 transition-colors hover:text-blue-800"
            >
              {t("contactInfo.phoneNumber")}
            </a>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
          <div>
            <p className="font-semibold text-gray-700">{t("contactInfo.email")}</p>
            <a
              href={`mailto:${t("contactInfo.emailAddress")}`}
              className="text-blue-600 transition-colors hover:text-blue-800"
            >
              {t("contactInfo.emailAddress")}
            </a>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
          <div>
            <p className="font-semibold text-gray-700">{t("contactInfo.address")}</p>
            <p className="text-gray-600">{t("contactInfo.fullAddress")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
