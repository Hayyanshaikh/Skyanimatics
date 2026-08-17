import CustomCard from "../Custom/Customcard";
import Container from "../Custom/Container";
import CustomHeading from "../Custom/CustomHeading";

const awards = [
  {
    icon: "/images/brand-1.png",
    title: "Top Visual Effects Company, Houston",
  },
  {
    icon: "/images/brand-2.png",
    title: "Top Visual Effects Company, Houston",
  },
  {
    icon: "/images/brand-3.png",
    title: "Top Visual Effects Company, Houston",
  },
  {
    icon: "/images/brand-4.png",
    title: "Top Visual Effects Company, Houston",
  },
];

export default function Brands() {
  return (
    <section className="py-10 sm:py-12 md:py-15 lg:py-20">
      <Container>
        <CustomHeading
          description="Explainer videos are more than just animations they simplify your message, engage your audience, and build lasting trust."
          line1="Why Your Brand Needs"
          line2="Explainer Videos"
        />

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:grid-cols-4">
          {awards.map((award, i) => (
            <CustomCard
              key={i}
              icon={award.icon}
              title={award.title}
              description="Recognized as the 12th Multimedia and animation studio by Visual Objects"
              className="border-t-2 border-b-4 border-blue-400 bg-[#f3fbff] text-center"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
