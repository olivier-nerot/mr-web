"use client";
import React, { useEffect } from 'react';
//= Scripts
import initIsotope from '@/common/initIsotope';

function Articles({articles}) {
  useEffect(() => {
    initIsotope();
  }, [])

  return (
    <section className="article-column section-padding pt-90">
      <div className="container">
        <div className="gallery">
          <div className="row">
            {articles.map(article => (
              <div className="items col-lg-4 col-md-6" key={article.id}>
                <div className="item">
                  <div className="img">
                    <img src={article.image} alt="" />
                    <span className="date"><strong>{article.day}</strong> {article.month} {article.year}</span>
                  </div>
                  <div className="cont">
                    <span className="sub-title mb-15 opacity-8">{article.category}</span>
                    <h4>{article.title}</h4>
                    <a href={article.link} className="animsition-link more mt-20">Lire</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Articles