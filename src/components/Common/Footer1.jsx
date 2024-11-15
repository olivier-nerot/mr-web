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
                  <a href="mailto:marion_roche@ymail.com">marion_roche@ymail.com</a>
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
                    <a href="https://facebook.com/holy.movie" className="hover-anim">Facebook</a>
                  </li>
                  <li className="hover-this cursor-pointer">
                    <a href="https://www.linkedin.com/in/marion-roche-ba39281a0/" className="hover-anim">LinkedIn</a>
                  </li>
                  <li className="hover-this cursor-pointer">
                    <a href="https://instagram.com/marionroche_kerta" className="hover-anim">Instagram</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="column">
                <h6 className="sub-title mb-30">e-mail : </h6>
                <p>marion_roche@ymail.com</p>
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
                    <a href="/about" className="animsition-link">A propos</a>
                  </li>
                  <li>
                    <a href="/contact" className="animsition-link">Contact</a>
                  </li>
                  <li>
                    Site WEB distribué sur <a className="animsition-link" href='https://ipfs.tech'>IPFS</a>
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
