"use client";
import { Truck, Phone, Mail, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

const FooterSection = () => {
  const t = useTranslations("landing");
  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center">
              <Truck className="mr-2 h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Roger&#39;s Moving JP</span>
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
            <h3 className="mb-4 text-lg font-semibold text-blue-400">{t("footer.areas.title")}</h3>
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
          <p>&copy; 2025 Roger&#39;s Moving Service JP. {t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
