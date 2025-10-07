import { useTranslations } from "next-intl";
import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function FAQSection() {
  const t = useTranslations("contact");

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
    <Card className="mt-12 bg-white shadow-lg">
      <CardHeader>
        <CardTitle className="text-center text-3xl text-gray-800">{t("faq.title")}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mx-auto max-w-4xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${index}`}
                className="rounded-lg border border-gray-200"
              >
                <AccordionTrigger className="w-full border border-gray-200 p-6 text-left text-lg font-semibold text-gray-800 hover:no-underline focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-inset">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-6">
                  <p className="leading-relaxed text-gray-600">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </CardContent>
    </Card>
  );
}
