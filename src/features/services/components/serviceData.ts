import { useTranslations } from "next-intl";

export type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
};

export function useServiceData(): Service[] {
  const t = useTranslations("services");
  return [
    {
      icon: "home",
      title: t("residential.title"),
      description: t("residential.description"),
      features: [
        t("residential.feature1"),
        t("residential.feature2"),
        t("residential.feature3"),
        t("residential.feature4"),
      ],
    },
    {
      icon: "package",
      title: t("storage.title"),
      description: t("storage.description"),
      features: [
        t("storage.feature1"),
        t("storage.feature2"),
        t("storage.feature3"),
        t("storage.feature4"),
      ],
    },
    {
      icon: "truck",
      title: t("disposal.title"),
      description: t("disposal.description"),
      features: [
        t("disposal.feature1"),
        t("disposal.feature2"),
        t("disposal.feature3"),
        t("disposal.feature4"),
      ],
    },
  ];
}
