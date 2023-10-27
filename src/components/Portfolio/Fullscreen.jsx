'use client';
import React, { useEffect } from 'react';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Parallax, Pagination, Mousewheel } from 'swiper';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';
//= Static Data
import projects from '@/data/Projects/list.json';

const data = [
  {
    "id": 0,
    "link": "/about",
    "background": "/assets/imgs/projects/bgmr.jpg",
    "caption": {
      "subTitle": "Artiste Digital",
      "title": "Marion Roche",
    }
  },
  ...projects
]

const swiperOptions = {
  modules: [Navigation, Autoplay, Parallax, Pagination, Mousewheel],
  speed: 1500,
  autoplay: {
    delay: 5000,
  },
  mousewheel: true,
  parallax: true,
  loop: true,
  onSwiper: function (swiper) {
    for (var i = 0; i < swiper.slides.length; i++) {
      swiper.slides[i].querySelector('.bg-img').setAttribute('data-swiper-parallax', 0.75 * swiper.width);
    }
  },
  onResize: function (swiper) {
    swiper.update();
  },
  pagination: {
    el: '.full-showcase .parallax-slider .swiper-pagination',
    clickable: true,
    renderBullet: function (_, className) {
      return '<span class="' + className + '">' + '<svg class="fp-arc-loader" width="16" height="16" viewBox="0 0 16 16">' +
        '<circle class="path" cx="8" cy="8" r="5.5" fill="none" transform="rotate(-90 8 8)" stroke="#FFF"' +
        'stroke-opacity="1" stroke-width="1px"></circle>' +
        '<circle cx="8" cy="8" r="3" fill="#FFF"></circle>' +
        '</svg></span>';
    },

  },

  navigation: {
    nextEl: '.full-showcase .parallax-slider .swiper-button-next',
    prevEl: '.full-showcase .parallax-slider .swiper-button-prev'
  }
}

function Fullscreen() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <header className="full-showcase">
      <div className="swiper-container parallax-slider">
        <Swiper {...swiperOptions}>
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-img valign" data-background={item.background} data-overlay-dark="3">
                <div className={`container ${item.videoSource ? 'ontop' : ''}`}>
                  <div className="row">
                    <div className="col-lg-11 offset-lg-1">
                      <div className="caption">
                        <h6 className="sub-title mb-30" data-swiper-parallax="-1000">{item.caption.year} <br /> {item.caption.subTitle}</h6>
                        <h1>
                          <a href={item.link || `/project/${item.id}`} className="animsition-link">
                            <span data-swiper-parallax="-2000">{item.caption.title}</span>
                            <span data-swiper-parallax="-2000">{item.caption.title2}</span>
                          </a>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
                {
                  item.videoSource &&
                  <div className="video-container">
                    <video autoPlay loop muted>
                      <source src={item.videoSource} type="video/mp4" />
                    </video>
                  </div>
                }
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-controls">
          <div className="swiper-button-next swiper-nav-ctrl cursor-pointer">
            <div>
              <span>Suivant</span>
            </div>
            <div><i className="fas fa-chevron-right"></i></div>
          </div>
          <div className="swiper-button-prev swiper-nav-ctrl cursor-pointer">
            <div><i className="fas fa-chevron-left"></i></div>
            <div>
              <span>Précédent</span>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </header>
  )
}

export default Fullscreen;