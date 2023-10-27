import Script from "next/script";
import { getSinglePost } from "/src/app/utils.js"
//= Scripts
import generateStylesheetObject from '@/common/generateStylesheetsObject';
//= Common Components
import LoadingScreen from "@/components/Common/Loader";
import Cursor from "@/components/Common/Cursor";
import ProgressScroll from "@/components/Common/ProgressScroll";
//= Page Components
import Navbar from "@/components/Common/Navbar";
import Menu from "@/components/Common/Menu";
import Header from "@/components/Project/Header";

import Works from "@/components/Project/Works";
import Content from "@/components/Project/Content";
import Video from "@/components/Project/Video";
import NextProject from "@/components/Project/NextProject";
import Footer1 from "@/components/Common/Footer1";

import projects from '@/data/Projects/list.json';

export const metadata = {
  title: 'projet',
  icons: {
    icon: "/assets/imgs/favicon.ico",
    shortcut: "/assets/imgs/favicon.ico",
    other: generateStylesheetObject([
      'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap',
      '/assets/fonts/mona-sans/style.css',
      '/assets/css/plugins.css',
      '/assets/css/style.css'
    ])
  }
}

export function generateStaticParams() {
  return projects.map((p) => {return {id:p.id.toString()}})
}

export default function ProjectOnePage({params}) {
  const id = parseInt(params.id)
  const nextid = (id < projects.length) ? id+1 : 1

  const post = getSinglePost(id, 'src/data/Projects')

  return (
    <body className="main-bg">
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />

      <div id="smooth-wrapper">
        <Navbar />
        <Menu />
        <div id="smooth-content">
          <main className="main-bg">
            <div className="main-box main-bg ontop">
              <Header 
                name = {post.frontmatter.title}
                desc = {post.frontmatter.subtitle}
                category = {post.frontmatter.category}
                date = {post.frontmatter.year}
                partner = {post.frontmatter.partner}
                award = {post.frontmatter.award}
              />
              <Content content = {post.content} />
              {post.frontmatter.video ?<Video url = {post.frontmatter.video} /> : '' }
              {post.frontmatter.video2 ? <Video url = {post.frontmatter.video2} /> : '' }
              <Works images={post.frontmatter.images} />
            </div>
            <NextProject url={`/project/${nextid}`}/>
          </main>
          <Footer1 />
        </div>
      </div>


      <Script src="/assets/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/isotope.pkgd.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/plugins.js" strategy="beforeInteractive" />
      <Script src="/assets/js/gsap.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/ScrollSmoother.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/ScrollTrigger.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/smoother-script.js" strategy="lazyOnload" />
      <Script src="/assets/js/scripts.js" strategy="lazyOnload" />
    </body>
  )
}
