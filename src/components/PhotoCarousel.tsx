import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const carouselImages = [
  {
    url: "consultorio3.jpeg",
    alt: "Recepção moderna da clínica"
  },
  {
    url: "consultorio2.png",
    alt: "Atendimento personalizado"
  }
  // {
  //   url: "dr-maite-2.png",
  //   alt: "Tecnologia de ponta"
  // },
  // {
  //   url: "dr-maite-3.png",
  //   alt: "Pacientes satisfeitos"
  // }
];

export function PhotoCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    adaptiveHeight: true
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Slider {...settings}>
            {carouselImages.map((image, index) => (
              <div key={index} className="outline-none">
                <div className="px-2">
                  <Image
                    width={1000}
                    height={1000}
                    src={`/images/${image.url}`}
                    alt={image.alt}
                    className="w-full h-[400px] md:h-[600px] object-contain rounded-lg"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
