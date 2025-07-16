import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      y: 0,
      opacity: 1,
    });
    gsap.to(".link", {
      opacity: 1,
      y: 0,
      stagger: 0.25,
    });
  }, []);
  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h2 id="title" className="section-heading">
            Get the highlights.
          </h2>

          <div className="flex flex-wrap items-end gap-5">
            <a
              href="https://youtu.be/keYat4iSYAQ?si=kk3LVnts2Juh0wev"
              target="blank"
              className="link"
            >
              Watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </a>
            <a
              href="https://www.youtube.com/live/ZiP1l7jlIIA?si=UuJ_YneGENJ2CAWh"
              target="blank"
              className="link"
            >
              Watch the event
              <img src={rightImg} alt="watch" className="ml-2" />
            </a>
          </div>
        </div>

        {/* carousel */}

        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
