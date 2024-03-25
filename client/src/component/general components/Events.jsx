import Button from "client/src/component/general components/Button.jsx";
import { Link } from "react-router-dom";
import img from "client/src/assets/images/visite1.jpg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Events(props) {
  return (
    <div className= {props.class} >
      <div className="flex  pb-6 ">
        <div className="pr-10 pt-14">
          <h3 className="pl-5 text-5xl font-semibold">15</h3>
          <p className="text-2xl">Sept.2024</p>
        </div>
        <div className="max-w-ms">
          <img src={img} alt="" />
        </div>
      </div>
      <p className="pb-2 text-2xl">Exposition Virtuelle : Peace Goma</p>
      <p className="pb-6">Par : Israel Nzila</p>
      <div className="w-4/5 flex  pl-16">
        <Link to="/visite">
      <Button name="PARTICIPER" class="bg-green-500 text-white text-sm font-semibold p-2.5 px-4 rounded-3xl mr-8 hover:bg-inherit hover:text-green-500 hover:border-green-500 hover:border-2 ease duration-500"/>
      </Link>
      <Button name="SPONSORISER" class=" bg-inherit text-sm text-green-500 font-semibold border-2 border-green-500  p-2.5 px-4 rounded-3xl hover:text-white hover:bg-green-500 hover:border-0 ease duration-500"/>
      </div>
    </div>
  );
}

// function EventsCaroussel() {
//   let settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 6
//   };
//   return ( 
//     <div className=" w-full">
//     <Slider {...settings}>
//      <Events/>
//     </Slider>
//   </div>
//   );
// }

// export default EventsCaroussel ;
