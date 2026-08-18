import Image from "next/image";
import Container from "../Custom/Container";
import CustomButton from "../Custom/Custombutton";

export default function ConsultationSection() {
  return (
    <section className="py-8 sm:py-10 md:py-16">
      <Container className="px-4 sm:px-6">
        <div
          className="
            relative flex flex-col items-center justify-between
            overflow-hidden rounded-3xl rounded-b-none bg-[#CCEDFC]

            px-5 py-6

            sm:px-8 sm:py-8

            md:flex-row
            md:pl-12.5 md:pr-10
            md:py-5

            lg:pl-18 lg:pr-15
            lg:py-5
            lg:px-16.5
          "
        >
          {/* Content */}
          <div className="relative z-10 w-full text-center md:w-auto md:text-left">
            <h2
              className="
                text-3xl font-semibold leading-[1.15] text-[#1A2937]
                sm:text-4xl
                md:text-[48px]
                lg:text-[55px]
              "
            >
              Free Consultation
              <br />
              From Our Experts
            </h2>

            <p className="mt-3 text-sm text-[#1A2937] sm:text-base">
              Register and start using our cloud solutions today
            </p>

            <CustomButton
              variant="gradient"
              className="mt-5 h-11 w-auto px-5 sm:mt-6 sm:h-12 sm:px-6"
            >
              Schedule A Call
            </CustomButton>
          </div>

          {/* Illustration */}
          <div
            className="
              relative mt-6 h-45 w-57.5

              sm:mt-8
              sm:h-55 sm:w-77

              md:mt-0
              md:h-65 md:w-82.5

              lg:h-90.5 lg:w-116
            "
          >
            <Image
              src="/images/consultation-illustration.svg"
              alt="Free consultation"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
