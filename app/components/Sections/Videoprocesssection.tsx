import Image from "next/image";
import { Play } from "lucide-react";
import Container from "../Custom/Container";
import CustomHeading from "../Custom/CustomHeading";
import CustomButton from "../Custom/Custombutton";

const items = [
  {
    image: "/images/process-1.png",
    title: "3D Modeling",
    description: "Realistic designs with stunning detail",
  },
  {
    image: "/images/process-2.png",
    title: "Animated presentations",
    description: "Engaging slides with dynamic visuals",
  },
  {
    image: "/images/process-3.png",
    title: "Footage-based videos",
    description: "Real shots blended with graphics",
  },
  {
    image: "/images/process-4.png",
    title: "Whiteboard animation",
    description: "Simple sketches that explain clearly",
  },
  {
    image: "/images/process-1.png",
    title: "3D Modeling",
    description: "Realistic designs with stunning detail",
  },
  {
    image: "/images/process-2.png",
    title: "Animated presentations",
    description: "Engaging slides with dynamic visuals",
  },
  {
    image: "/images/process-3.png",
    title: "Footage-based videos",
    description: "Real shots blended with graphics",
  },
  {
    image: "/images/process-4.png",
    title: "Whiteboard animation",
    description: "Simple sketches that explain clearly",
  },
];

export default function VideoProcessSection() {
  return (
    <section className="py-16">
      <Container>
        <CustomHeading
          reverse
          lineBar
          lineBarClassName="right-0 top-[80%]"
          line2="High-impact creative, with a proven"
          line1="video production process."
        />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="relative h-80 overflow-hidden rounded-[10px] sm:h-96 lg:h-105.75"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />

              <div className="absolute right-2.5 bottom-3 left-2.5 flex items-center justify-between gap-2 rounded-[9px] bg-black/60 px-3 py-2.5 text-white backdrop-blur-lg">
                <div>
                  <p className="text-sm font-medium">{item.title}</p>

                  <p
                    title={item.description}
                    className="line-clamp-1 text-xs text-white"
                  >
                    {item.description}
                  </p>
                </div>

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-linear-to-b from-[#01A3EF] to-[#0F55C9]">
                  <Play fill="white" stroke="white" size={12} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <CustomButton variant="gradient">Get A Free Quote</CustomButton>
        </div>
      </Container>
    </section>
  );
}
