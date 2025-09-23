import { setRequestLocale } from "next-intl/server";

import LandingPage from "@/features/landing-page/LandingPage";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rogers Moving Service",
  description: "Professional moving solutions for your needs.",
};

type Props = {
  params: { locale: string };
};

export default async function Home({ params }: Props) {
  const { locale } = params;

  // Enable static rendering
  setRequestLocale(locale);

  return <LandingPage />;
}
