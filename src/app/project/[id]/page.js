import Script from "next/script";
import { getSinglePost, getAllPosts } from "/src/app/utils.js"
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
  const projects = getAllPosts("src/data/Projects")
  return projects.map((p) => {return {id:p.id.toString()}})
}

export default function ProjectOnePage({params}) {
  const projects = getAllPosts("src/data/Projects")

  let id = parseInt(params.id)
  let post;
  
  try {
    post = getSinglePost(id, 'src/data/Projects')
  } catch (error) {
    id=1;
    post = getSinglePost(id, 'src/data/Projects')
  }
  
  const nextid = id+1

  return (
    <body className="main-bg">
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />

      <div id="smooth-wrapper">
        <Navbar />
        <Menu projects={projects}/>
        <div id="smooth-content">
          <main className="main-bg">
            <div className="main-box main-bg ontop">
              <Header 
                title = {post.frontmatter.title}
                subtitle = {post.frontmatter.subtitle}
                desc = {post.frontmatter.description}
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
      <script async data-id="101434842" src="//static.getclicky.com/js"></script>
    </body>
  )
}
