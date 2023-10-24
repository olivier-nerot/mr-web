import Script from "next/script";
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
import BottomContent from "@/components/Project/BottomContent";
import NextProject from "@/components/Project/NextProject";
import Footer1 from "@/components/Common/Footer1";

import projects from '@/data/Projects/list.json';

export const metadata = {
  title: 'Project',
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

// const images = [
//   {
//     "id": 1,
//     "image": "/assets/imgs/works/projects/0/2.jpg"
//   },
//   {
//     "id": 2,
//     "image": "/assets/imgs/works/projects/0/3.jpg"
//   },
//   {
//     "id": 3,
//     "image": "/assets/imgs/works/projects/0/4.jpg"
//   },
//   {
//     "id": 4,
//     "image": "/assets/imgs/works/projects/0/5.jpg"
//   },
//   {
//     "id": 5,
//     "image": "/assets/imgs/works/projects/0/6.jpg"
//   },
//   {
//     "id": 6,
//     "image": "/assets/imgs/works/projects/0/7.jpg"
//   }
// ]

export default function ProjectOnePage({searchParams}) {
  const id = parseInt(searchParams.number)-1
  const nextid = (id < projects.length) ? id+1 : 1

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
                name = {projects[id].caption.title}
                desc = {projects[id].caption.subtitle}
                category = "Installation VR"
                date = {projects[id].caption.year}
                partner = ''
                award = ''
              />
              <BottomContent 
                content = {JSON.stringify(projects)}
              />
              <Works images={projects[id].images} />
            </div>
            <NextProject url={`/project?number=${nextid}`}/>
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
