// src/features/about/About.tsx

"use client";

import { Users, Award, Shield, Star, Briefcase, Check } from "lucide-react";
import React from "react";

const teamMembers = [
  {
    name: "Roger Guskuma",
    role: "Founder & CEO",
    icon: <Award className="h-8 w-8 text-blue-600" />,
    description: "20+ years in the moving industry, committed to excellence.",
  },
  {
    name: "Pangare",
    role: "Operations Manager",
    icon: <Briefcase className="h-8 w-8 text-purple-600" />,
    description: "Ensures every move runs smoothly and efficiently.",
  },
  {
    name: "None",
    role: "Customer Success Lead",
    icon: <Star className="h-8 w-8 text-yellow-500" />,
    description: "Dedicated to customer satisfaction and support.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div className="bg-grid-pattern absolute inset-0 opacity-5" />
        <div className="animate-fade-in-up relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">About Us</h1>
          <p className="mb-8 text-xl text-gray-700 md:text-2xl">
            Learn more about Rogers Moving Service, our mission, and our team.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Our Mission</h2>
            <p className="mb-4 text-lg text-gray-700">
              Our mission is to provide professional moving solutions tailored to your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <div className="flex items-center rounded-full bg-blue-50 px-4 py-2">
                <Shield className="mr-2 h-5 w-5 text-blue-600" />
                <span className="font-medium text-blue-800">Fully Insured & Licensed</span>
              </div>
              <div className="flex items-center rounded-full bg-green-50 px-4 py-2">
                <Check className="mr-2 h-5 w-5 text-green-600" />
                <span className="font-medium text-green-800">Reliable & Trustworthy</span>
              </div>
              <div className="flex items-center rounded-full bg-purple-50 px-4 py-2">
                <Users className="mr-2 h-5 w-5 text-purple-600" />
                <span className="font-medium text-purple-800">Customer-Focused</span>
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
              <h3 className="mb-4 text-2xl font-bold text-gray-900">Our Story</h3>
              <p className="mb-4 text-lg text-gray-700">
                Founded in 2005, we have helped thousands of customers move with ease.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-500" />
                  Over 5,000 successful moves
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-500" />
                  15+ years of experience
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-500" />
                  Certified by Japan Moving Association
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-500" />
                  4.9/5 customer satisfaction rating
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Award className="animate-bounce-slow mb-4 h-20 w-20 text-blue-600" />
              <span className="text-lg font-semibold text-blue-600">
                Accredited & Award-Winning
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Meet the Team</h2>
            <p className="text-lg text-gray-700">Meet our experienced and friendly team.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {teamMembers.map((member) => (
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
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Move with Us?</h2>
          <p className="mb-8 text-lg opacity-90">
            Contact us today for a free quote and experience a professional, stress-free move.
          </p>
          <button className="group mx-auto flex items-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-blue-600 transition-all duration-300 hover:scale-105 hover:bg-gray-100">
            Get Free Quote
          </button>
        </div>
      </section>
    </div>
  );
}
