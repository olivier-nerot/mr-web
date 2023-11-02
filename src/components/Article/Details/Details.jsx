import React from 'react';
//= Components
import Content from './Content';
import InfoArea from './InfoArea';
import AuthorArea from './AuthorArea';
import NextPrev from './NextPrev';
import CommentsForm from './CommentsForm';

function Details({article}) {
  return (
    <section className="article">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="main-post section-padding">
              <Content content={article.content}/>
              {/* <InfoArea />
              <AuthorArea /> */}
              <NextPrev />
            </div>
          </div>
        </div>
      </div>
      {/* <CommentsForm /> */}
    </section>
  )
}

export default Details