import Image from "next/image";
import Container from "../Custom/Container";
import CustomInput from "../Custom/Custominput";
import CustomButton from "../Custom/Custombutton";

export default function QuoteSection() {
  return (
    <section className="py-10 sm:py-12 lg:py-16 relative overflow-x-clip">
      <Container>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-28 items-center">
          {/* Left Content */}
          <div className="relative flex-1 max-w-174.5 w-full">
            {/* Background Blur */}
            <div
              className="
                absolute
                bottom-10 left-11
                -z-10
                blur-[100px] sm:blur-[130px] lg:blur-[150px]
                h-80 sm:h-120 lg:h-160
                aspect-square
                bg-[#EED9FB]
                rounded-full
              "
            />

            <h2
              className="
                text-3xl
                sm:text-5xl
                lg:text-[55px]
                font-semibold
                text-[#1A2937]
                leading-tight
              "
            >
              Join 100+ Brands That
              <br />
              Trust Us to Bring Their
              <br />
              <span className="relative inline-block">
                Ideas to Life
                <Image
                  src="/icons/heading-line.svg"
                  alt="Heading Line"
                  height={18}
                  width={268}
                  className="
                    w-44
                    sm:w-56
                    lg:w-[268px]
                    h-auto
                    max-w-full
                  "
                />
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#1A2937] mt-5 lg:mt-6">
              Drop us a line! We are here to answer your questions 24/7
            </p>

            <div
              className="
                relative
                w-full
                h-56
                sm:h-80
                lg:h-[390px]
                mt-5
                lg:mt-6
              "
            >
              <Image
                src="/images/quote.svg"
                alt="Get in touch"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Form */}
          <div className="max-w-119.25 w-full">
            <h3 className="text-xl font-bold text-[#1A2937] mb-6">
              Get A Custom Quote Now
            </h3>

            <form className="space-y-5 flex flex-col">
              <div>
                <CustomInput
                  id="firstName"
                  placeholder="First Name"
                  className="border-0 border-b rounded-none h-16 px-0 focus-visible:ring-0"
                />
              </div>

              <div>
                <CustomInput
                  id="lastName"
                  placeholder="Last Name"
                  className="border-0 border-b rounded-none h-16 px-0 focus-visible:ring-0"
                />
              </div>

              <div>
                <CustomInput
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  className="border-0 border-b rounded-none h-16 px-0 focus-visible:ring-0"
                />
              </div>

              <div>
                <textarea
                  id="message"
                  placeholder="Message"
                  rows={7}
                  className="
                    w-full
                    border-0
                    border-b
                    border-gray-200
                    px-0
                    py-2
                    text-sm
                    outline-none
                    resize-none
                  "
                />
              </div>

              <CustomButton variant="gradient" className="w-full h-12">
                Submit
              </CustomButton>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
