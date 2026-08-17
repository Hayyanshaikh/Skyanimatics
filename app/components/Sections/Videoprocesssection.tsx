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
    <section className="py-16 bg-white">
      <Container>
        <CustomHeading
          line1="High-impact creative, with a proven"
          line2="video production process."
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
          {items.map((item, i) => (
            <div
              key={i}
              className="relative rounded-[10px] overflow-hidden h-105.75"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-3 left-2.5 right-2.5 backdrop-blur-lg rounded-[9px] bg-black/60 text-white px-3 py-2.5 flex items-center justify-between gap-2">
                <div>
                  <p className="text-sm font-medium">{item.title}</p>
                  <p
                    title={item.description}
                    className="text-xs text-white text-ellipsis line-clamp-1"
                  >
                    {item.description}
                  </p>
                </div>
                <div className="w-8 h-8 border shrink-0 bg-linear-to-b from-[#01A3EF] to-[#0F55C9] rounded-full flex items-center justify-center">
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
