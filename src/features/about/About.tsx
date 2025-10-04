"use client";

import { Users, Award, Shield, Star, Briefcase, Check } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

export default function About() {
  const t = useTranslations("about");
  const team = [
    {
      name: "Roger Guskuma",
      role: t("team.founder"),
      icon: <Award className="h-8 w-8 text-blue-600" />,
      description: t("team.founderDesc"),
    },
    {
      name: "Pangare",
      role: t("team.manager"),
      icon: <Briefcase className="h-8 w-8 text-purple-600" />,
      description: t("team.managerDesc"),
    },
    {
      name: t("team.customerLead"),
      role: t("team.customerRole"),
      icon: <Star className="h-8 w-8 text-yellow-500" />,
      description: t("team.customerDesc"),
    },
  ];
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div className="bg-grid-pattern absolute inset-0 opacity-5" />
        <div className="animate-fade-in-up relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">{t("hero.title")}</h1>
          <p className="mb-8 text-xl text-gray-700 md:text-2xl">{t("hero.desc")}</p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              {t("mission.title")}
            </h2>
            <p className="mb-4 text-lg text-gray-700">{t("mission.desc")}</p>
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <div className="flex items-center rounded-full bg-blue-50 px-4 py-2">
                <Shield className="mr-2 h-5 w-5 text-blue-600" />
                <span className="font-medium text-blue-800">{t("mission.badge.insured")}</span>
              </div>
              <div className="flex items-center rounded-full bg-green-50 px-4 py-2">
                <Check className="mr-2 h-5 w-5 text-green-600" />
                <span className="font-medium text-green-800">{t("mission.badge.reliable")}</span>
              </div>
              <div className="flex items-center rounded-full bg-purple-50 px-4 py-2">
                <Users className="mr-2 h-5 w-5 text-purple-600" />
                <span className="font-medium text-purple-800">{t("mission.badge.customer")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History & Achievements */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">{t("story.title")}</h3>
              <p className="mb-4 text-lg text-gray-700">{t("story.desc")}</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-500" />
                  {t("story.moveCount")}
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-500" />
                  {t("story.experience")}
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-500" />
                  {t("story.certified")}
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-500" />
                  {t("story.rating")}
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Award className="animate-bounce-slow mb-4 h-20 w-20 text-blue-600" />
              <span className="text-lg font-semibold text-blue-600">{t("story.accredited")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">{t("team.title")}</h2>
            <p className="text-lg text-gray-700">{t("team.desc")}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="group rounded-2xl bg-gray-50 p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-4 flex justify-center">{member.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">{member.name}</h3>
                <div className="mb-2 font-medium text-blue-600">{member.role}</div>
                <p className="text-gray-700">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">{t("cta.title")}</h2>
          <p className="mb-8 text-lg opacity-90">{t("cta.desc")}</p>
          <button className="group mx-auto flex items-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-blue-600 transition-all duration-300 hover:scale-105 hover:bg-gray-100">
            {t("cta.button")}
          </button>
        </div>
      </section>
    </div>
  );
}
