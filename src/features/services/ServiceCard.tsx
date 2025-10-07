// src/features/services/ServiceCard.tsx
import { Home, Package, Truck, Check } from "lucide-react";
import React from "react";

import { Card, CardContent } from "@/components/ui/card";

import type { Service } from "./serviceData";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Card className="group h-full rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <CardContent className="flex flex-col items-center justify-center p-8">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
          {service.icon === "home" && (
            <Home className="h-8 w-8 text-blue-600 transition-all duration-300 group-hover:text-white" />
          )}
          {service.icon === "package" && (
            <Package className="h-8 w-8 text-blue-600 transition-all duration-300 group-hover:text-white" />
          )}
          {service.icon === "truck" && (
            <Truck className="h-8 w-8 text-blue-600 transition-all duration-300 group-hover:text-white" />
          )}
        </div>
        <h3 className="mb-4 text-center text-2xl font-bold text-gray-900">{service.title}</h3>
        <p className="mb-6 text-center leading-relaxed text-gray-600">{service.description}</p>
        <ul className="space-y-2">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center text-gray-700">
              <Check className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
