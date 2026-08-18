import Image from "next/image";
import Container from "../Custom/Container";
import CustomAccordion from "../Custom/Customaccordion";

const faqs = [
  {
    question: "What are custom application development services?",
    answer:
      "Custom Application development services involve the process of designing, creating, and maintaining software applications for various platforms, such as mobile, web, or desktop. These services encompass the entire development lifecycle, from initial planning and design to coding, testing, and deployment, ensuring the delivery of functional and user-friendly applications.",
  },
  {
    question:
      "What is the advantage of a custom application Development company?",
    answer:
      "A custom application development company tailors solutions specifically to your business needs, ensuring better efficiency, scalability, and long-term value.",
  },
  {
    question:
      "Can custom app development be tailored to my specific business needs?",
    answer:
      "Yes, custom app development is entirely tailored to your specific business requirements and goals.",
  },
  {
    question: "How long does it take to develop a custom application?",
    answer:
      "Timelines vary based on complexity, typically ranging from a few weeks to several months.",
  },
  {
    question:
      "What is the cost associated with custom application development services?",
    answer:
      "Cost depends on project scope, features, and complexity. We provide a custom quote after understanding your requirements.",
  },
];

export default function FaqSection() {
  return (
    <section className="bg-white py-10 sm:py-12 md:py-16">
      <Container className="w-full max-w-4xl px-4 sm:px-6">
        {/* FAQ Illustration */}
        <div
          className="
            relative mx-auto mb-6
            h-[220px] w-full
            sm:h-[280px] sm:max-w-[500px]
            md:h-[350px] md:max-w-[570px]
            lg:h-[410px] lg:max-w-[631.84px]
          "
        >
          <Image
            src="/images/faq-illustration.svg"
            alt="FAQ"
            fill
            className="object-contain"
          />
        </div>

        {/* FAQ Accordion */}
        <CustomAccordion items={faqs} />
      </Container>
    </section>
  );
}
