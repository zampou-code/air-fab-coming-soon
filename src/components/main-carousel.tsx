import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import Image from "next/image";

export function MainCarousel() {
  return (
    <Carousel plugins={[Fade({}), Autoplay({ delay: 5000 })]}>
      <CarouselContent>
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index}>
            <MainCarouselItem
              src={`/images/carousel-bg-2/intro-bg-${index + 1}.jpg`}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

type MainCarouselItemProps = {
  src: string;
};

function MainCarouselItem({ src }: MainCarouselItemProps) {
  return (
    <div className="h-screen w-full">
      <Image
        src={src}
        fill={true}
        alt="carousel-bg"
        className="w-full h-full object-cover block"
      />
    </div>
  );
}
