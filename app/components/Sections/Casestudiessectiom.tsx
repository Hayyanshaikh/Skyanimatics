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
    <section className="py-16">
      <Container className="relative">
        <div className="flex gap-10">
          {/* Side Heading */}
          <div className="relative [writing-mode:vertical-rl] [text-orientation:mixed] py-5 border-y">
            <div className="py-10 border-y text-[55px] font-semibold text-center whitespace-nowrap text-[#1A2937]">
              <span className="absolute h-full top-0 left-1/2 -translate-x-1/2 border-y w-5 -z-10"></span>
              Explore Our Case Studies
            </div>
          </div>

          {/* Content */}
          <div className="min-w-0 flex-1">
            <CustomHeading
              className="mb-10"
              reverse
              align="left"
              line1="video production process."
              line2="High-impact creative, with a proven"
            />

            <CustomSlider
              items={caseStudies.map((item) => (
                <div key={item.title} className="rounded-2xl transition w-full">
                  {/* Image */}
                  <div className="relative w-full h-143.5">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover rounded-[12px]"
                    />

                    <PlayButton color="#01A3EF" align="left" size={154} />
                  </div>

                  {/* Content */}
                  <div className="pb-4 pt-17.5">
                    <h3 className="font-bold text-[35px] text-[#1A2937] mb-3.75">
                      {item.title}
                    </h3>

                    <p className="text-[#1A2937] opacity-70 mb-5.5 max-w-179">
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
