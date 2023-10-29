"use client";
import React, { useEffect } from 'react';
import loadBackgroudImages from '@/common/loadBackgroudImages';

function Header(props) {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <header className="header-project1">
      <div className="container mt-100">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="full-width mb-30">
              <h1 className="fz-60">{props.title}</h1>
              <h1 className="fz-60">{props.subtitle}</h1>
              <p>{props.desc}</p>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="info">
              <div className="row">
                <div className="col-md-6">
                  <div className="item mb-30">
                    <span className="opacity-8 mb-5">Categorie :</span>
                    <h6>{props.category}</h6>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item mb-30">
                    <span className="opacity-8 mb-5">Partenaires :</span>
                    <h6>{props.partner}</h6>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item mb-30">
                    <span className="opacity-8 mb-5">Période :</span>
                    <h6>{props.date}</h6>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item">
                    <span className="opacity-8 mb-5">Prix :</span>
                    <h6>{props.award}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header