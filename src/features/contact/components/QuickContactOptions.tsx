import { Phone, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function QuickContactOptions() {
  const t = useTranslations("contact");
  return (
    <div className="rounded-xl bg-white p-6 shadow-lg">
      <h2 className="mb-6 text-2xl font-bold text-gray-800">{t("quickContact.title")}</h2>
      <div className="space-y-4">
        <a
          href={`https://wa.me/${t("contactInfo.phoneNumber").replace(/\D/g, "")}`}
          className="flex items-center space-x-3 rounded-lg border border-green-200 bg-green-50 p-3 transition-colors hover:bg-green-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon className="h-8 w-8 text-green-600" />
          <div>
            <p className="font-semibold text-green-800">{t("quickContact.whatsapp")}</p>
            <p className="text-sm text-green-600">{t("quickContact.whatsappText")}</p>
          </div>
        </a>
        <a
          href={`tel:${t("contactInfo.phoneNumber")}`}
          className="flex items-center space-x-3 rounded-lg border border-blue-200 bg-blue-50 p-3 transition-colors hover:bg-blue-100"
        >
          <Phone className="h-6 w-6 text-blue-600" />
          <div>
            <p className="font-semibold text-blue-800">{t("quickContact.call")}</p>
            <p className="text-sm text-blue-600">{t("quickContact.callText")}</p>
          </div>
        </a>
        <a
          href={`mailto:${t("contactInfo.emailAddress")}`}
          className="flex items-center space-x-3 rounded-lg border border-purple-200 bg-purple-50 p-3 transition-colors hover:bg-purple-100"
        >
          <Mail className="h-6 w-6 text-purple-600" />
          <div>
            <p className="font-semibold text-purple-800">{t("quickContact.email")}</p>
            <p className="text-sm text-purple-600">{t("quickContact.emailText")}</p>
          </div>
        </a>
      </div>
    </div>
  );
}
