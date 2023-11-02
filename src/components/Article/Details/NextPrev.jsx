import React from 'react';

function NextPrev() {
  return (
    <div className="next-prv-post flex mt-50">
      <div className="thumb-post">
        <a href="/article/1">
          <span className="fz-12 text-u ls1 mb-15"><i className="pe-7s-angle-left"></i>Article précédent</span>
          <h6 className="fw-600 fz-16">Titre précédent</h6>
        </a>
      </div>
      <div className="thumb-post ml-auto text-right">
        <a href="/article/1">
          <span className="fz-12 text-u ls1 mb-15">Article suivant <i className="pe-7s-angle-right"></i></span>
          <h6 className="fw-600 fz-16">Titre suivant</h6>
        </a>
      </div>
    </div>
  )
}

export default NextPrev