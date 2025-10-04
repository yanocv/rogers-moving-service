import { useTranslations } from "next-intl";
import React from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const t = useTranslations("contact");
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const [submitStatus, setSubmitStatus] = React.useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const onSubmit = async (_data: Record<string, string>) => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      form.reset();
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
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
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <Label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                {t("contactForm.name")} *
              </Label>
              <Input
                type="text"
                id="name"
                {...form.register("name", { required: true })}
                placeholder={t("contactForm.namePlaceholder")}
              />
            </div>
            <div>
              <Label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                {t("contactForm.email")} *
              </Label>
              <Input
                type="email"
                id="email"
                {...form.register("email", { required: true })}
                placeholder={t("contactForm.emailPlaceholder")}
              />
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <Label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
                {t("contactForm.phone")}
              </Label>
              <Input
                type="tel"
                id="phone"
                {...form.register("phone")}
                placeholder={t("contactForm.phonePlaceholder")}
              />
            </div>
            <div>
              <Label htmlFor="service" className="mb-2 block text-sm font-medium text-gray-700">
                {t("contactForm.service")}
              </Label>
              <Select
                value={form.watch("service")}
                onValueChange={(value) => form.setValue("service", value)}
              >
                <SelectTrigger id="service" name="service">
                  <SelectValue placeholder={t("contactForm.servicePlaceholder")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="residential">
                    {t("contactForm.serviceOptions.residential")}
                  </SelectItem>
                  <SelectItem value="commercial">
                    {t("contactForm.serviceOptions.commercial")}
                  </SelectItem>
                  <SelectItem value="longDistance">
                    {t("contactForm.serviceOptions.longDistance")}
                  </SelectItem>
                  <SelectItem value="storage">{t("contactForm.serviceOptions.storage")}</SelectItem>
                  <SelectItem value="packing">{t("contactForm.serviceOptions.packing")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <Label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
              {t("contactForm.message")} *
            </Label>
            <Textarea
              id="message"
              {...form.register("message", { required: true })}
              rows={6}
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
      </Form>
    </div>
  );
}
