"use client";

import { Plus, Minus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

interface CustomAccordionProps {
  items: FaqItem[];
}

export default function CustomAccordion({ items }: CustomAccordionProps) {
  return (
    <Accordion className="w-full space-y-4">
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          value={`item-${i}`}
          className="border border-gray-200 rounded-xl px-7.5 pb-3"
        >
          <AccordionTrigger className="text-left gap-2 font-medium text-[#1A2937] hover:no-underline pb-4.6 pt-6.5">
            <span className="flex-1">{item.question}</span>
          </AccordionTrigger>
          <AccordionContent className="pb-3 pt-2">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
