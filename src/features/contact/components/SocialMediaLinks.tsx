import { useTranslations } from "next-intl";
import React from "react";

import FacebookIcon from "@/components/icons/FacebookIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";

export default function SocialMediaLinks() {
  const t = useTranslations("contact");
  return (
    <div className="mt-12 rounded-xl bg-white p-8 shadow-lg">
      <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
        {t("socialMedia.title")}
      </h2>
      <div className="flex justify-center space-x-6">
        <a
          href="https://facebook.com/rogersmovingservice"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white transition-colors hover:bg-blue-700"
          aria-label={t("socialMedia.facebook")}
        >
          <FacebookIcon className="h-6 w-6" />
        </a>
        <a
          href="https://instagram.com/rogersmovingservice"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-600 text-white transition-colors hover:bg-pink-700"
          aria-label={t("socialMedia.instagram")}
        >
          <InstagramIcon className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
}
