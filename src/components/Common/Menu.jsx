"use client";
import React from 'react';

//= Static Data
import data from '@/data/Projects/list.json';

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
                    <span className="link dmenu" onClick={handleOpenDMenu}><span className="nm">03.</span>Projets </span>
                  </div>
                  <div className="sub-menu">
                    <ul className="rest">
                      <li>
                        <div className="o-hidden">
                          <span className="sub-link back" onClick={handleCloseDMenu}><i className="pe-7s-angle-left"></i> Retour</span>
                        </div>
                      </li>
                    </ul>
                    <div className="row">
                      <div className="col-md-6">
                        <ul className="rest">
                        {data.map(item => (
                          <li key={item.id}>
                            <div className="o-hidden">
                              <a href={`/project/${item.id}`} className="sub-link animsition-link" onClick={closeMenu}>{item.caption.title} {item.caption.title2}</a>
                            </div>
                          </li>
                        ))}
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