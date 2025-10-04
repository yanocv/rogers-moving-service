import { MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

export default function MapSection() {
  const t = useTranslations("contact");
  return (
    <div className="rounded-xl bg-white p-8 shadow-lg">
      <h2 className="mb-6 flex items-center text-3xl font-bold text-gray-800">
        <MapPin className="mr-3 h-8 w-8 text-blue-600" />
        {t("map.title")}
      </h2>
      <div className="aspect-video overflow-hidden rounded-lg shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.7926576892384!2d-74.00597498458929!3d40.71275117933091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316e18a5cd%3A0x4b90b5f88e0a6e1!2s123%20Main%20St%2C%20New%20York%2C%20NY%2010013%2C%20USA!5e0!3m2!1sen!2sus!4v1647023456789!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Rogers Moving Service Location"
        />
      </div>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row">
        <a
          href={`https://www.google.com/maps/dir//${encodeURIComponent(t("contactInfo.fullAddress"))}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
        >
          <MapPin className="h-5 w-5" />
          <span>{t("map.directions")}</span>
        </a>
        <div className="flex items-center text-gray-600">
          <MapPin className="mr-2 h-5 w-5" />
          <span className="text-sm">{t("contactInfo.fullAddress")}</span>
        </div>
      </div>
    </div>
  );
}
