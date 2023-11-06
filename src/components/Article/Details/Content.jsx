import React from 'react';
import ReactMarkdown from 'react-markdown';

function Content({content}) {
  return (
    <div className="item pb-60">
      <div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="text">
              <ReactMarkdown>{ content }</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content