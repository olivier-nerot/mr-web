"use client";
import React, { useEffect } from 'react';

function Footer1({ subBg }) {
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    () => window.removeEventListener('resize', handleResize);
  }, []);

  function handleResize() {
    if (window.innerWidth > 991) {
      gsap.set('.footer-container', { yPercent: -50 })
      const uncover = gsap.timeline({ paused: true })
      uncover.to('.footer-container', { yPercent: 0, ease: 'none' });

      ScrollTrigger.create({
        trigger: 'main',
        start: 'bottom bottom',
        end: '+=50%',
        animation: uncover,
        scrub: true,
      });
    }
  }

  return (
    <footer className={`${subBg ? 'sub-bg' : ''}`}>
      <div className="footer-container">
        <div className="container pb-80 pt-80 ontop">
          <div className="row">
            <div className="col-lg-6">
              <div className="eml">
                <h6 className="sub-title opacity-8">e-mail :</h6>
                <h2 className="fz-60">
                  <a href="#0">contact@marionroche.com</a>
                </h2>
              </div>
            </div>
          </div>
          <div className="row mt-80">
            {/* <div className="col-lg-3">
              <div className="logo">
                <img src="/assets/imgs/logo-light.png" alt="" />
              </div>
            </div> */}
            <div className="col-lg-9">
              <div className="column">
                <h6 className="sub-title mb-30">Social Media</h6>
                <ul className="rest">
                  <li className="hover-this cursor-pointer">
                    <a href="#0" className="hover-anim">Facebook</a>
                  </li>
                  <li className="hover-this cursor-pointer">
                    <a href="#0" className="hover-anim">twitter</a>
                  </li>
                  <li className="hover-this cursor-pointer">
                    <a href="#0" className="hover-anim">LinkedIn</a>
                  </li>
                  <li className="hover-this cursor-pointer">
                    <a href="#0" className="hover-anim">Instagram</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="column">
                <h6 className="sub-title mb-30">Adresse : </h6>
                <p>16 rue Saint Alexandre 69005 LYON</p>
                <h5 className="mt-15 underline">
                  <a href="#0">+33 6</a>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="container bord pt-30 pb-30 bord-thin-top">
          <div className="row">
            <div className="col-lg-6">
              <div className="links">
                <ul className="rest">
                  <li>
                    <a href="/about" className="animsition-link">About me</a>
                  </li>
                  <li>
                    <a href="/contact" className="animsition-link">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="copyright d-flex">
                <div className="ml-auto">
                  <p className="fz-13">© 2023 Marion Roche <span className="underline"></span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer1