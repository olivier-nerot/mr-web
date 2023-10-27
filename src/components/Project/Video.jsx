import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function Video({url}) {
  return (
    <section className="section-padding bord-thin-top">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
          <iframe
            title="vimeo-player"
            src={url}
            width="800" height="400"
            frameborder="0"
            allowfullscreen>
          </iframe>
          </div>
        </div>
      </div>
    </section>
  )
}