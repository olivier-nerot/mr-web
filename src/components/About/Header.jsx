import React from 'react';

function Header() {
  return (
    <header className="about-header section-padding pb-0">
      <div className="container mt-100">
        <div className="row">
          <div className="col-lg-9 offset-lg-1">
            <div className="cont">
              <h6 className="sub-title mb-15">Artiste Digital + A/V + VR + AI</h6>
              <h1 className="text-u">MARION ROCHE</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="img mt-80" data-overlay-dark="4">
        <img src="/assets/imgs/works/full/bgmr.jpg" alt="" />
      </div>
    </header>
  )
}

export default Header