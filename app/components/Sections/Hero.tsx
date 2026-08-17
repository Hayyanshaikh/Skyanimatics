import Image from "next/image";
import CustomButton from "../Custom/Custombutton";
import Container from "../Custom/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 sm:pt-18 lg:pt-23.75">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-bg.png"
          alt="Skyanimatics hero background"
          fill
          priority
          className="object-cover object-bottom"
        />
      </div>

      <Container>
        <div className="relative z-10 flex flex-col items-center mt-11.5">
          {/* Rating Badge */}
          <div className="inline-flex max-w-full items-center justify-center gap-2 rounded-full bg-white/60 px-4 py-2 sm:px-6 sm:py-2.5 backdrop-blur-sm mb-5 sm:mb-6">
            <div className="flex shrink-0 gap-0.5 sm:gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Image
                  key={i}
                  src="/icons/star.svg"
                  alt="Star"
                  width={16}
                  height={16}
                  className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                />
              ))}
            </div>

            <span className="text-xs sm:text-sm text-[#1A2937]/70 whitespace-nowrap">
              4.9 stars out of 100+ reviews
            </span>
          </div>

          {/* Heading */}
          <h1 className="mx-auto text-3xl text-center leading-tight font-light text-[#1A2937] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px]">
            Bring Your Ideas to Life With
          </h1>

          <h2 className="text-gradient mx-auto text-center mt-1 text-3xl leading-tight font-semibold sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px]">
            2D Animations, Explainer Videos
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-186.25 text-center px-2 text-sm leading-6 text-gray-500 sm:text-base sm:leading-7 md:mt-5">
            At Skyanimatics, we transform complex concepts into clear, engaging
            animations that inspire action. Our explainer videos don’t just tell
            stories, they make brands unforgettable.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex w-full flex-row items-center justify-center gap-3 sm:mt-7 sm:w-auto sm:gap-4">
            <CustomButton variant="gradient">Start Your Project</CustomButton>

            <CustomButton variant="outline">Request A Quote</CustomButton>
          </div>

          {/* Hero Image */}
          <div className="relative w-full mx-auto mt-10 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/hero-image.png"
              alt="Skyanimatics hero"
              className="w-full h-auto block"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
