import Image from "next/image";
import Container from "../Custom/Container";
import CustomHeading from "../Custom/CustomHeading";

const stats = [
  { value: "75%", label: "Brand Awareness", image: "/images/state-1.svg" },
  { value: "87%", label: "Improve Engagement", image: "/images/state-2.svg" },
  {
    value: "99%",
    label: "Boost Conversion Rate",
    image: "/images/state-3.svg",
  },
  {
    value: "100+",
    label: "Global Clients Served",
    image: "/images/state-4.svg",
  },
  { value: "12+", label: "Year's Experience", image: "/images/state-5.svg" },
  { value: "1k+", label: "Videos Created", image: "/images/state-6.svg" },
];

const images = [
  "/images/brand-3.png",
  "/images/google.svg",
  "/images/trustpilo.svg",
];

export default function StatsSection() {
  return (
    <section className="py-10 sm:py-14 lg:py-20">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="w-full lg:max-w-104">
            <CustomHeading
              line1="Skyanimatics at a glance"
              line2="Convertion"
              description="See real results, created by the creative production company consistently rated five-stars."
              align="left"
            />

            <div className="flex flex-wrap items-center gap-5 sm:gap-8 mt-5">
              {images.map((img, i) => (
                <div key={i} className="relative h-14 w-20 sm:h-18 sm:w-25">
                  <Image
                    src={img}
                    alt="badge"
                    fill
                    sizes="100px"
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-3 items-center py-5 px-4 sm:py-6 sm:px-6 lg:py-8 lg:px-9 bg-[#f5fbff] rounded-[30px] border border-[#01A3EF]">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`
        px-3 sm:px-5 lg:px-6
        py-5 lg:py-0
                  h-full
        ${i % 3 !== 2 ? "lg:border-r lg:border-gray-200" : ""}
        ${i < 3 ? "lg:border-b lg:border-gray-200 lg:pb-6" : ""}
        ${i >= 3 ? "lg:pt-6" : ""}
        
        border-gray-200
        ${i % 2 === 0 ? "border-r sm:border-r" : ""}
        ${i < 4 ? "border-b sm:border-b" : ""}
        lg:border-0
        ${i % 3 !== 2 ? "lg:border-r" : ""}
        ${i < 3 ? "lg:border-b" : ""}
      `}
              >
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-0.5">
                  <Image
                    src={stat.image}
                    alt={stat.label}
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                </div>

                <p className="text-[32px] sm:text-[42px] lg:text-[52px] font-semibold text-[#1A2937] leading-tight">
                  {stat.value}
                </p>

                <p className="text-sm sm:text-[15px] lg:text-[16px] text-[#1A2937] opacity-70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
