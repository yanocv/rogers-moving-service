// src/features/contact/Contact.tsx

"use client";

import { useTranslations } from "next-intl";
import React from "react";

export default function Contact() {
  const t = useTranslations("contact");
  return (
    <div>
      <h1>{t("test")}</h1>
    </div>
  );
}
