import { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import { sliderSettings } from "./common";
import sliderContent from "./Slider.json";
import "./Update.css";
import { memo } from "react";

const Update = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper(".swiper-container", {
      ...sliderSettings,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  const handleButtonClick = (direction) => {
    if (swiperRef.current) {
      if (direction === "prev") {
        swiperRef.current.slidePrev();
      } else if (direction === "next") {
        swiperRef.current.slideNext();
      }
    }
  };

  return (
    <div className="container p-4">
      <div className="swiper-container text-center">
        <div className="swiper-wrapper text-success">
          {sliderContent.map((slide, index) => (
            <div className="swiper-slide" key={index}>
              <h4 className="text-success">{slide.name}</h4>
              <div className="white-gradient"></div>

              <img
                src={slide.image}
                alt={slide.name}
                style={{ width: "86%", borderRadius: "1rem" }}
              />

              <p className="mt-1 text-light ">{slide.detail}</p>
            </div>
          ))}
        </div>

        <div className="swiper-button-container container">
          <button
            className="swiper-button m-2 "
            onClick={() => handleButtonClick("prev")}
            style={{
              background: "green",
              color: "white",
              borderRadius: "2px",
              border: "none",
            }}
          >
            Prev
          </button>
          <button
            className="swiper-button"
            onClick={() => handleButtonClick("next")}
            style={{
              background: "green",
              color: "white",
              borderRadius: "2px",
              border: "none",
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(Update);
