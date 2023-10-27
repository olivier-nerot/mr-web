import React from 'react';
import ReactMarkdown from 'react-markdown';

function Content({content}) {
  return (
    <section className="section-padding bord-thin-top">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="text">
            <ReactMarkdown>{ content }</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Content