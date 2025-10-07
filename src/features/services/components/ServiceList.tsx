import React from "react";

import { ServiceCard } from "./ServiceCard";
import { useServiceData } from "./serviceData";

export function ServiceList() {
  const services = useServiceData();
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.title} service={service} />
      ))}
    </div>
  );
}
