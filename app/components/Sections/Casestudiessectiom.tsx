import React from "react";
import Container from "../Custom/Container";
import CustomHeading from "../Custom/CustomHeading";
import Image from "next/image";
import CustomButton from "../Custom/Custombutton";
import PlayButton from "../Custom/PlayButton";
import CustomSlider from "../Custom/CustomSlider";

const caseStudies = [
  {
    title: "Covid-19",
    image: "/images/case-stud-1.png",
    alt: "Covid-19",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    title: "Case Study 2",
    image: "/images/case-stud-1.png",
    alt: "Case Study 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Case Study 3",
    image: "/images/case-stud-1.png",
    alt: "Case Study 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Casestudiessectiom = () => {
  return (
    <section className="py-10 sm:py-12 md:py-14 lg:py-16">
      <Container className="relative">
        <div className="flex flex-col gap-8 md:gap-10 lg:flex-row">
          {/* Side Heading */}
          <div
            className="
              relative
              [writing-mode:horizontal-tb]
              py-3
              border-y
              lg:[writing-mode:vertical-rl]
              lg:py-5
              lg:shrink-0
            "
          >
            <div
              className="
                relative
                py-4
                border-y
                text-[28px]
                sm:text-[34px]
                md:text-[42px]
                font-semibold
                text-center
                whitespace-nowrap
                text-[#1A2937]

                lg:py-10
                lg:text-[55px]
              "
            >
              <span
                className="
                  absolute
                  top-1/2
                  left-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                  w-5
                  h-full
                  border-y
                  -z-10

                  lg:top-0
                  lg:h-full
                  lg:translate-y-0
                "
              />
              Explore Our Case Studies
            </div>
          </div>

          {/* Content */}
          <div className="min-w-0 flex-1">
            <CustomHeading
              className="mb-7 sm:mb-8 md:mb-9 lg:mb-10"
              reverse
              align="left"
              line1="video production process."
              line2="High-impact creative, with a proven"
            />

            <CustomSlider
              items={caseStudies.map((item) => (
                <div key={item.title} className="rounded-2xl transition w-full">
                  {/* Image */}
                  <div className="relative w-full h-[220px] sm:h-[280px] md:h-[360px] lg:h-143.5">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover rounded-[12px]"
                    />

                    <PlayButton color="#01A3EF" align="left" size={100} />
                  </div>

                  {/* Content */}
                  <div className="pb-4 pt-7 sm:pt-9 md:pt-12 lg:pt-17.5">
                    <h3 className="font-bold text-[25px] sm:text-[28px] md:text-[32px] lg:text-[35px] text-[#1A2937] mb-3.75">
                      {item.title}
                    </h3>

                    <p className="text-[#1A2937] opacity-70 mb-5.5 max-w-179 text-sm sm:text-[15px] md:text-base lg:text-base">
                      {item.description}
                    </p>

                    <CustomButton variant="gradient">
                      See Case Study
                    </CustomButton>
                  </div>
                </div>
              ))}
              itemClassName="w-full"
              spaceBetween={24}
              loop
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Casestudiessectiom;
