import VirtualEvents from "./VirtualEvents";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CarousselleExpo() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
  return (
    <div className="mx-auto w-full">
      <Slider {...settings}>
        <VirtualEvents />
        <VirtualEvents />
        <VirtualEvents />
        <VirtualEvents />
      </Slider>
    </div>
  );
}

export default CarousselleExpo;
