"use client";
import React, { useEffect } from 'react';

function Intro({content}) {
  const contents = content.split('<br>')

  useEffect(() => {
    gsap.to(".text-reval .text", {
      backgroundPositionX: "0%",
      stagger: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".text-reval",
        markers: false,
        scrub: 1,
        start: "top center",
        end: "bottom center"
      }
    });
  }, []);

  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <div className="text-reval">
              {contents.map(c => (
                <span className="text fz-30 mb-30" dangerouslySetInnerHTML={{ __html: c }}>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro