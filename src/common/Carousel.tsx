interface CarouselProps {
  slides: Slide[];
}

interface Slide { 
  src: string;
  text: string;
  name: string;
  country: string;
}

function Carousel({slides}: CarouselProps) {
  return (
    <div>
      {slides.map((slide, index) => (
        <div key={index}>
          {slide.name}
        </div>
      ))}<div>

      </div>
    </div>
  )
}

export default Carousel;
