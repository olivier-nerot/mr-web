"use client";
import React from 'react';

function Menu() {
  function closeMenu() {
    document.querySelector('.hamenu').classList.remove("open");
  }

  function handleMouseEnter(event) {
    Object.values(event.currentTarget.parentElement.children).forEach(el => el.style.opacity = "0.5");
    event.currentTarget.style.opacity = "1";
  }

  function handleMouseLeave(event) {
    Object.values(event.currentTarget.parentElement.children).forEach(el => el.style.opacity = "1");
  }

  function handleOpenDMenu(event) {
    document.querySelector(".main-menu").classList.add("gosub");
    event.currentTarget.parentElement.parentElement.querySelector(".sub-menu").classList.add("sub-open");
  }

  function handleCloseDMenu() {
    document.querySelector(".main-menu").classList.remove("gosub");
    document.querySelector(".main-menu .sub-menu").classList.remove("sub-open");
  }

  return (
    <div className="hamenu valign">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="menu-links">
              <ul className="main-menu rest">
                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <div className="o-hidden">
                    <a href="/" className="link animsition-link" onClick={closeMenu}><span className="nm">01.</span>Accueil</a>
                  </div>
                </li>
                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <div className="o-hidden">
                    <a href="/about" className="link animsition-link" onClick={closeMenu}><span className="nm">02.</span>Marion Roche</a>
                  </div>
                </li>
                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <div className="o-hidden">
                    <span className="link dmenu" onClick={handleOpenDMenu}><span className="nm">03.</span>Oeuvres </span>
                  </div>
                  <div className="sub-menu">
                    <ul className="rest">
                      <li>
                        <div className="o-hidden">
                          <span className="sub-link back" onClick={handleCloseDMenu}><i className="pe-7s-angle-left"></i> Go Back</span>
                        </div>
                      </li>
                    </ul>
                    <div className="row">
                      <div className="col-md-6">
                        <ul className="rest">
                          <li>
                            <div className="o-hidden">
                              <a href="/project1" className="sub-link animsition-link" onClick={closeMenu}>projet 1</a>
                            </div>
                          </li>
                          <li>
                            <div className="o-hidden">
                              <a href="/project2" className="sub-link animsition-link" onClick={closeMenu}>projet 2</a>
                            </div>
                          </li>
                          <li>
                            <div className="o-hidden">
                              <a href="/project3" className="sub-link animsition-link" onClick={closeMenu}>projet 3</a>
                            </div>
                          </li>
                          <li>
                            <div className="o-hidden">
                              <a href="/project4" className="sub-link animsition-link" onClick={closeMenu}>projet 4</a>
                            </div>
                          </li>
                          <li>
                            <div className="o-hidden">
                              <a href="/project5" className="sub-link animsition-link" onClick={closeMenu}>projet 5</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul className="rest">
                          <li>
                            <div className="o-hidden">
                              <a href="/interactive-inline" className="sub-link animsition-link" onClick={closeMenu}>Interactive Inline</a>
                            </div>
                          </li>
                          <li>
                            <div className="o-hidden">
                              <a href="/interactive-vertical" className="sub-link animsition-link" onClick={closeMenu}>Interactive Vertical</a>
                            </div>
                          </li>
                          <li>
                            <div className="o-hidden">
                              <a href="/portfolio-fixed-text" className="sub-link animsition-link" onClick={closeMenu}>Creative Portfolio</a>
                            </div>
                          </li>
                          <li>
                            <div className="o-hidden">
                              <a href="/portfolio-grid" className="sub-link animsition-link" onClick={closeMenu}>Portfolio Grid</a>
                            </div>
                          </li>
                          <li>
                            <div className="o-hidden">
                              <a href="/portfolio-grid-classic" className="sub-link animsition-link" onClick={closeMenu}>Portfolio Classic</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <div className="o-hidden">
                    <a href="/blog" className="link animsition-link" onClick={closeMenu}><span className="nm">04.</span>Actualité</a>
                  </div>
                </li>
                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <div className="o-hidden">
                    <a href="/contact" className="link animsition-link" onClick={closeMenu}><span className="nm">05.</span>Contact</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 valign">
            <div className="cont-info">
              <div className="item mb-50">
                <h6 className="text-u fw-600 mb-20">e-mail</h6>
                <p className="fw-400 fz-18">contact@marionroche.com</p>
              </div>
              <div className="bottom">
                <h6 className="text-u fw-600 mb-20">Sur les réseaux</h6>
                <ul className="rest social-text d-flex fz-13">
                  <li className="mr-20">
                    <a href="/#0" className="hover-this"><span className="hover-anim">Facebook</span></a>
                  </li>
                  <li className="mr-20">
                    <a href="https://linkedin.com/marion.roche" className="hover-this"><span className="hover-anim">LinkedIn</span></a>
                  </li>
                  <li>
                    <a href="https://instagram.com/marionroche_kerta" className="hover-this"><span className="hover-anim">Instagram</span></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu