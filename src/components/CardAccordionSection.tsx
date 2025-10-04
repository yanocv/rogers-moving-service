import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const CardAccordionSection = () => {
  const sections = [
    {
      id: "services",
      title: "Our Services",
      description: "Comprehensive moving and storage solutions",
      items: [
        {
          trigger: "Residential Moving",
          content:
            "Professional home moving services with careful handling of your belongings. We provide packing, loading, transportation, and unpacking services.",
        },
        {
          trigger: "Commercial Moving",
          content:
            "Efficient office and business relocations with minimal downtime. We handle equipment, furniture, and sensitive documents with care.",
        },
        {
          trigger: "Storage Solutions",
          content:
            "Secure, climate-controlled storage facilities available for short-term and long-term needs. 24/7 security monitoring included.",
        },
        {
          trigger: "Packing Services",
          content:
            "Professional packing with high-quality materials. We pack everything from delicate items to large furniture pieces.",
        },
      ],
    },
    {
      id: "pricing",
      title: "Pricing Information",
      description: "Transparent pricing for all our services",
      items: [
        {
          trigger: "How is pricing calculated?",
          content:
            "Our pricing is based on factors including distance, size of move, services required, and timing. We provide free estimates with no hidden fees.",
        },
        {
          trigger: "What payment methods do you accept?",
          content:
            "We accept cash, credit cards, debit cards, and bank transfers. Payment is typically due upon completion of services.",
        },
        {
          trigger: "Are there any additional fees?",
          content:
            "All fees are disclosed upfront in your estimate. The only additional charges would be for services requested on moving day that weren't in the original plan.",
        },
        {
          trigger: "Do you offer discounts?",
          content:
            "Yes! We offer discounts for seniors, military personnel, students, and off-peak moving dates. Contact us for current promotions.",
        },
      ],
    },
    {
      id: "process",
      title: "Moving Process",
      description: "Step-by-step guide to our moving procedure",
      items: [
        {
          trigger: "Initial Consultation",
          content:
            "We start with a free consultation to assess your needs, provide an accurate estimate, and plan your move timeline.",
        },
        {
          trigger: "Pre-Move Preparation",
          content:
            "Our team helps you prepare by providing packing materials, creating inventory lists, and coordinating logistics.",
        },
        {
          trigger: "Moving Day",
          content:
            "Professional movers arrive on time, handle your items with care, and ensure everything is transported safely to your new location.",
        },
        {
          trigger: "Post-Move Support",
          content:
            "We follow up to ensure your satisfaction and provide support for any concerns or additional services needed.",
        },
      ],
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold">Everything You Need to Know</h2>
        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
          Explore our comprehensive services, transparent pricing, and streamlined moving process
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
        {sections.map((section) => (
          <Card key={section.id} className="h-fit">
            <CardHeader>
              <CardTitle className="text-xl">{section.title}</CardTitle>
              <p className="text-muted-foreground text-sm">{section.description}</p>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {section.items.map((item) => (
                  <AccordionItem key={item.trigger} value={item.trigger}>
                    <AccordionTrigger className="text-left">{item.trigger}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Alternative layout - Single card with multiple accordions */}
      <div className="mt-16">
        <Card className="mx-auto max-w-4xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
            <p className="text-muted-foreground">Quick answers to common questions</p>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="insurance">
                <AccordionTrigger>Is my property insured during the move?</AccordionTrigger>
                <AccordionContent>
                  Yes, we provide comprehensive insurance coverage for all moves. Your belongings
                  are protected from pickup to delivery, and we offer additional coverage options
                  for high-value items.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="timeline">
                <AccordionTrigger>How far in advance should I book?</AccordionTrigger>
                <AccordionContent>
                  We recommend booking at least 2-4 weeks in advance, especially during peak moving
                  seasons (summer months). However, we can often accommodate last-minute moves based
                  on availability.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="packing">
                <AccordionTrigger>Do I need to pack everything myself?</AccordionTrigger>
                <AccordionContent>
                  Not at all! We offer full packing services where our team handles everything, or
                  you can choose partial packing for specific items. We also provide packing
                  materials if you prefer to pack yourself.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="weather">
                <AccordionTrigger>What happens if there&apos;s bad weather?</AccordionTrigger>
                <AccordionContent>
                  We monitor weather conditions closely and will work with you to reschedule if
                  necessary. For light rain or snow, we have protective equipment to keep your
                  belongings safe and dry.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CardAccordionSection;
