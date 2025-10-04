"use client";

import React from "react";

interface PageTitleProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export default function PageTitle({ title, description, children }: PageTitleProps) {
  return (
    <section className="relative flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-30">
      <div className="bg-grid-pattern absolute inset-0 opacity-5" />
      <div className="animate-fade-in-up relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-4xl">{title}</h1>
        {description && <p className="mb-8 text-xl text-gray-700 md:text-2xl">{description}</p>}
        {children}
      </div>
    </section>
  );
}
