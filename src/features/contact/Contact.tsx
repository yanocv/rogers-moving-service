"use client";

import { Phone, Mail, MapPin, Clock, ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

import FacebookIcon from "@/components/common/FacebookIcon";
import InstagramIcon from "@/components/common/InstagramIcon";
import WhatsAppIcon from "@/components/common/WhatsAppIcon";
import PageTitle from "@/components/PageTitle";
import { Button } from "@/components/ui/button";

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
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

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
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const businessHours = [
    { day: t("businessHours.monday"), hours: t("businessHours.weekdays") },
    { day: t("businessHours.tuesday"), hours: t("businessHours.weekdays") },
    { day: t("businessHours.wednesday"), hours: t("businessHours.weekdays") },
    { day: t("businessHours.thursday"), hours: t("businessHours.weekdays") },
    { day: t("businessHours.friday"), hours: t("businessHours.weekdays") },
    { day: t("businessHours.saturday"), hours: t("businessHours.saturday_hours") },
    { day: t("businessHours.sunday"), hours: t("businessHours.sunday_hours") },
  ];

  const faqData = [
    {
      question: t("faq.questions.0.question"),
      answer: t("faq.questions.0.answer"),
    },
    {
      question: t("faq.questions.1.question"),
      answer: t("faq.questions.1.answer"),
    },
    {
      question: t("faq.questions.2.question"),
      answer: t("faq.questions.2.answer"),
    },
    {
      question: t("faq.questions.3.question"),
      answer: t("faq.questions.3.answer"),
    },
    {
      question: t("faq.questions.4.question"),
      answer: t("faq.questions.4.answer"),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <PageTitle title={t("title")} description={t("subtitle")} />

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Left Column - Contact Info & Quick Actions */}
          <div className="space-y-8 lg:col-span-1">
            {/* Contact Information */}
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

            {/* Business Hours */}
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

            {/* Quick Contact Options */}
            <div className="rounded-xl bg-white p-6 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-gray-800">{t("quickContact.title")}</h2>

              <div className="space-y-4">
                <a
                  href={`https://wa.me/${t("contactInfo.phoneNumber").replace(/\D/g, "")}`}
                  className="flex items-center space-x-3 rounded-lg border border-green-200 bg-green-50 p-3 transition-colors hover:bg-green-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="h-6 w-6 text-green-600" />
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
          </div>

          {/* Right Column - Contact Form & Map */}
          <div className="space-y-8 lg:col-span-2">
            {/* Contact Form */}
            <div className="rounded-xl bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-3xl font-bold text-gray-800">{t("contactForm.title")}</h2>

              {submitStatus === "success" && (
                <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4">
                  <p className="text-green-700">{t("contactForm.success")}</p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4">
                  <p className="text-red-700">{t("contactForm.error")}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                      {t("contactForm.name")} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-transparent focus:ring-2 focus:ring-blue-500"
                      placeholder={t("contactForm.namePlaceholder")}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                      {t("contactForm.email")} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-transparent focus:ring-2 focus:ring-blue-500"
                      placeholder={t("contactForm.emailPlaceholder")}
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
                      {t("contactForm.phone")}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-transparent focus:ring-2 focus:ring-blue-500"
                      placeholder={t("contactForm.phonePlaceholder")}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      {t("contactForm.service")}
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">{t("contactForm.servicePlaceholder")}</option>
                      <option value="residential">
                        {t("contactForm.serviceOptions.residential")}
                      </option>
                      <option value="commercial">
                        {t("contactForm.serviceOptions.commercial")}
                      </option>
                      <option value="longDistance">
                        {t("contactForm.serviceOptions.longDistance")}
                      </option>
                      <option value="storage">{t("contactForm.serviceOptions.storage")}</option>
                      <option value="packing">{t("contactForm.serviceOptions.packing")}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                    {t("contactForm.message")} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="resize-vertical w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    placeholder={t("contactForm.messagePlaceholder")}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? t("contactForm.sending") : t("contactForm.submit")}
                </Button>
              </form>
            </div>

            {/* Map Section */}
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
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 rounded-xl bg-white p-8 shadow-lg">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">{t("faq.title")}</h2>

          <div className="mx-auto max-w-4xl space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="rounded-lg border border-gray-200">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-inset"
                  aria-expanded={expandedFaq === index}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="pr-4 text-lg font-semibold text-gray-800">{faq.question}</h3>
                    <ChevronDown
                      className={`h-6 w-6 transform text-gray-500 transition-transform ${
                        expandedFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                {expandedFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="leading-relaxed text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Social Media Links */}
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
      </div>
    </div>
  );
}
