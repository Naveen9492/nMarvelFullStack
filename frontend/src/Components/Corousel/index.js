import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css";

const Carousel = (props) => {
  const { bgImagesList } = props;

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          right: "10px", // position
          zIndex: 1,
        }}
        onClick={onClick}
      />
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          left: "10px",
          zIndex: 1,
        }}
        onClick={onClick}
      />
    );
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings} className="carousel-content">
      {bgImagesList.map((eachBg) => (
        <div key={eachBg.id} className="slide-content">
          <img
            src={eachBg.imageUrl}
            className="carousel-image"
            alt={eachBg.name}
          />
          <p className="carousel-movie-name">{eachBg.name}</p>
        </div>
      ))}
    </Slider>
  );
};
export default Carousel;
