import Image from "next/image";
import Container from "../Custom/Container";

const logos = [
  "/images/panasonic.png",
  "/images/dun-bradstreet.png",
  "/images/sap.png",
  "/images/organon.png",
  "/images/footlocker.png",
  "/images/nestle.png",
];

export default function TrustedBy() {
  return (
    <section className="py-16">
      <Container>
        <p className="text-center text-2xl text-[#1A2937] mb-12 font-medium">
          Trusted by 50M+ Users and 96% of Fortune 500s
        </p>
        <div className="flex flex-wrap items-center justify-between gap-10">
          {logos.map((logo, i) => (
            <Image
              key={i}
              src={logo}
              alt="brand logo"
              width={106}
              height={64}
              className="object-contain grayscale"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
