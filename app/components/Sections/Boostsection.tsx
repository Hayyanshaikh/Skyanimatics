import Image from "next/image";
import Container from "../Custom/Container";
import CustomHeading from "../Custom/CustomHeading";

const items = [
  {
    icon: "/images/boost-1.svg",
    title: "Boost Engagement",
    description:
      "Capture attention with compelling visuals. Make information easy to understand and remember.",
  },
  {
    icon: "/images/boost-2.svg",
    title: "Build Brand Value",
    description:
      "Showcase your values with authenticity. Make information easy to understand and remember.",
  },
  {
    icon: "/images/boost-3.svg",
    title: "Enhance Learning",
    description:
      "Make information easy to understand and remember. Make information easy to understand and remember.",
  },
  {
    icon: "/images/boost-4.svg",
    title: "Outshine Others",
    description:
      "Differentiate your brand with unique animations. Make information easy to understand and remember.",
  },
];

export default function BoostSection() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 overflow-hidden">
      <Container className="relative">
        {/* Top Left Decoration */}
        <Image
          src="/icons/boost-icon-1.svg"
          alt="decoration"
          width={62}
          height={66}
          className="
            absolute
            left-2 sm:left-6 lg:left-9.5
            top-0
            w-10 sm:w-12 lg:w-[62px]
            h-auto
          "
        />

        <CustomHeading
          lineBar
          line2ClassName="relative"
          lineBarClassName="absolute right-[12%] w-[202px]! top-[80%]"
          line1="Why Your Brand Needs"
          line2="Explainer Videos"
          description="Explainer videos are more than just animations they simplify your message, engage your audience, and build lasting trust."
        />

        <div className="relative mt-8 sm:mt-10 lg:mt-12">
          {/* Top Right Decoration */}
          <Image
            src="/icons/boost-icon-2.svg"
            alt="decoration"
            width={70}
            height={70}
            className="
              absolute
              -top-12 sm:-top-20 lg:-top-28.5
              right-0 sm:right-3 lg:right-7.5
              w-11 sm:w-14 lg:w-17.5
              h-auto
            "
          />

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {items.map((item, i) => (
              <div
                key={i}
                className="
                  bg-[#f5fbff]
                  rounded-t-[20px]
                  rounded-b-[30px]
                  overflow-hidden
                  border border-[#01A3EF]
                  transition
                  w-full
                "
              >
                {/* Icon */}
                <div
                  className="
                    relative
                    w-full
                    h-56 sm:h-64 lg:h-70.5
                    mx-auto
                  "
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-cover h-full w-full"
                  />
                </div>

                {/* Content */}
                <div className="pt-5 px-5 sm:px-5.5 pb-6">
                  <h3 className="font-medium text-xl sm:text-2xl text-[#1A2937] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base leading-6 opacity-70 text-[#1A2937]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
