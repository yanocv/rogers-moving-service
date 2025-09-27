"use client";

import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import { useTransition } from "react";

import { usePathname, useRouter } from "@/i18n/navigation";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

import type { Locale } from "@/i18n/config";

interface LanguageOption {
  value: Locale;
  label: string;
}

const languageOptions: LanguageOption[] = [
  {
    value: "en",
    label: "English",
  },
  {
    value: "ja",
    label: "日本語",
  },
  {
    value: "pt",
    label: "Português",
  },
  {
    value: "es",
    label: "Español",
  },
];

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleLanguageChange = (value: Locale) => {
    if (value === locale || isPending) return;

    startTransition(() => {
      router.replace(pathname, { locale: value });
    });
  };

  const selectedOption = languageOptions.find((option) => option.value === locale);

  return (
    <Select value={locale} onValueChange={handleLanguageChange} disabled={isPending}>
      <SelectTrigger className="cursor-pointer rounded-full border border-gray-200 bg-white px-6 py-2 font-medium text-gray-900 shadow transition-colors hover:bg-gray-50">
        <div className="flex items-center gap-2">
          <Globe className="h-4 w-4" />
          <SelectValue>
            {selectedOption && (
              <span className="flex items-center gap-2">
                <span>{selectedOption.label}</span>
                {isPending && <span className="text-xs opacity-50">...</span>}
              </span>
            )}
          </SelectValue>
        </div>
      </SelectTrigger>
      <SelectContent>
        {languageOptions.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
            className="cursor-pointer border-b border-gray-100 bg-white px-4 py-2 text-gray-900 transition-colors hover:bg-blue-50 hover:text-blue-600"
          >
            <span className="flex items-center gap-2">
              <span>{option.label}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
