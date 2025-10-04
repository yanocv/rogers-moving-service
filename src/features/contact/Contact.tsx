"use client";

import { useTranslations } from "next-intl";
import React, { useState } from "react";

import PageTitle from "@/components/PageTitle";

import BusinessHours from "./components/BusinessHours";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import FAQSection from "./components/FAQSection";
import MapSection from "./components/MapSection";
import QuickContactOptions from "./components/QuickContactOptions";
import SocialMediaLinks from "./components/SocialMediaLinks";

export default function Contact() {
  const t = useTranslations("contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <PageTitle title={t("title")} description={t("subtitle")} />

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-1">
            <ContactInfo />
            <BusinessHours />
            <QuickContactOptions />
          </div>
          <div className="space-y-8 lg:col-span-2">
            <ContactForm
              formData={formData}
              isSubmitting={isSubmitting}
              submitStatus={submitStatus}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
            />
            <MapSection />
          </div>
        </div>
        <FAQSection />
        <SocialMediaLinks />
      </div>
    </div>
  );
}
