import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function TextSlides() {
  const slide1Ref = useRef();
  const slide2Ref = useRef();
  const slide3Ref = useRef();
  let isAnimating = false;
  let prevSlideID = null;
  let currentSlideID = 0;

  useEffect(() => {
    const slides = [slide2Ref.current, slide3Ref.current];
    gsap.to(slides, {
      display: "none",
    });
    gotoSlide(0, 0);
  });

  function gotoNextSlide() {
    var slideToGo = currentSlideID + 1;
    if (slideToGo >= 3) {
      slideToGo = 0;
    }
    gotoSlide(slideToGo, 0);
  }

  const gotoSlide = (slideID = 0, _time: any) => {
    if (!isAnimating) {
      isAnimating = true;
      const slides = [slide1Ref.current, slide2Ref.current, slide3Ref.current];
      prevSlideID = currentSlideID;
      currentSlideID = slideID;
      var $prevSlide = slides[prevSlideID];
      var $currentSlide = slides[currentSlideID];
      var time = 1;
      if (_time !== null) {
        time = _time;
      }
      gsap.to($prevSlide, {
          duration: time,
          display: "none",
        });
        gsap.fromTo(
          $currentSlide,
          {
            duration: time,
            display: "none",
          },
          {
            duration: time,
            display: "inline-block",
          }
        );
      gsap.delayedCall(time, function () {
        isAnimating = false;
      });
      gsap.delayedCall(4, play);
    }
  };

  function play() {
    gotoNextSlide();
    gsap.delayedCall(4, play);
  }

  return (
    <>
      <span ref={slide1Ref}>Create</span>
      <span ref={slide2Ref}>Buy</span>
      <span ref={slide3Ref}>Sell</span>
    </>
  );
}
