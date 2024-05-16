import { useState } from "react";
interface CarouselProps {
  slides: Slide[];
}

interface Slide {
  src: string;
  text: string;
  name: string;
  country: string;
}

function Carousel({ slides }: CarouselProps) {
  let [current, setCurrent] = useState(0);

  return (
    <div className="relative h-[400px] max-w-[400px] overflow-hidden rounded-2xl">
      <div className="flex transition duration-300 ease-out" style={{transform: `translateX(-${current * 100}%)`}}>
        {slides.map((slide, index) => (
          <div key={index}>
            {slide.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel;
