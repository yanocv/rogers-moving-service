"use client";

import { Menu, Truck, X } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const t = useTranslations("Header");
  const params = useParams();
  const locale = typeof params?.locale === "string" ? params.locale : "en";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrollY > 50 ? "bg-white/95 shadow-lg backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex flex-shrink-0 items-center">
              <Truck className="mr-2 h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Roger&#39;s Moving JP</span>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link
                href={`/${locale}`}
                className="px-3 py-2 text-sm font-medium text-gray-900 transition-colors hover:text-blue-600"
              >
                {t("nav.home")}
              </Link>
              <Link
                href={`/${locale}/service`}
                className="px-3 py-2 text-sm font-medium text-gray-900 transition-colors hover:text-blue-600"
              >
                {t("nav.servicesNav")}
              </Link>
              <Link
                href={`/${locale}/about`}
                className="px-3 py-2 text-sm font-medium text-gray-900 transition-colors hover:text-blue-600"
              >
                {t("nav.aboutNav")}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="px-3 py-2 text-sm font-medium text-gray-900 transition-colors hover:text-blue-600"
              >
                {t("nav.contactNav")}
              </Link>
              <Link href={`/${locale}/inquiry`}>
                <Button
                  variant="default"
                  className="cursor-pointer rounded-full bg-blue-600 px-6 py-2 font-medium text-white transition-colors hover:bg-blue-700"
                >
                  {t("nav.quote")}
                </Button>
              </Link>
              <div className="mr-2">
                <LanguageSwitcher />
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 transition-colors hover:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="bg-white/95 backdrop-blur-md md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <Link
              href={`/${locale}`}
              className="block px-3 py-2 text-gray-900 transition-colors hover:text-blue-600"
            >
              {t("nav.home")}
            </Link>
            <Link
              href={`/${locale}/service`}
              className="block px-3 py-2 text-gray-900 transition-colors hover:text-blue-600"
            >
              {t("nav.servicesNav")}
            </Link>
            <Link
              href={`/${locale}/about`}
              className="block px-3 py-2 text-gray-900 transition-colors hover:text-blue-600"
            >
              {t("nav.aboutNav")}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="block px-3 py-2 text-gray-900 transition-colors hover:text-blue-600"
            >
              {t("nav.contactNav")}
            </Link>
            <Link href={`/${locale}/inquiry`} className="mt-2 block w-full">
              <Button
                variant="default"
                className="rounded-full bg-blue-600 px-6 py-2 font-medium text-white transition-colors hover:bg-blue-700"
              >
                {t("nav.quote")}
              </Button>
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
}
