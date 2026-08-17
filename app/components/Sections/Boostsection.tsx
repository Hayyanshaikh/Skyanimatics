import Image from "next/image";
import Container from "../Custom/Container";
import CustomHeading from "../Custom/CustomHeading";

const items = [
  {
    icon: "/icons/boost-engagement.svg",
    title: "Boost Engagement",
    description:
      "Capture attention with compelling visuals viewers instantly understand and remember.",
  },
  {
    icon: "/icons/build-brand.svg",
    title: "Build Brand Value",
    description:
      "Showcase your brand identity with authentic information easy to understand and remember.",
  },
  {
    icon: "/icons/enhance-learning.svg",
    title: "Enhance Learning",
    description:
      "Simplify complex information easy to understand and remember.",
  },
  {
    icon: "/icons/outshine-others.svg",
    title: "Outshine Others",
    description:
      "Differentiate your brand with unique animations, better information easy to understand.",
  },
];

export default function BoostSection() {
  return (
    <section className="py-16 bg-white">
      <Container>
        <CustomHeading
          line1="Why Your Brand Needs"
          line2="Explainer Videos"
          description="Explainer videos are more than just animations they simplify your message, engage your audience, and build lasting trust."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-[#f5fbff] rounded-2xl p-6 text-center border border-transparent hover:border-blue-200 transition"
            >
              <div className="relative w-14 h-14 mx-auto mb-4">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
