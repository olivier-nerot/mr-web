import Script from "next/script";
import { getAllPosts } from "/src/app/utils.js"
//= Scripts
import generateStylesheetObject from '@/common/generateStylesheetsObject';
//= Common Components
import LoadingScreen from "@/components/Common/Loader";
import Cursor from "@/components/Common/Cursor";
import ProgressScroll from "@/components/Common/ProgressScroll";
//= Page Components
import Navbar from "@/components/Common/Navbar";
import Menu from "@/components/Common/Menu";
import Fullscreen from "@/components/Portfolio/Fullscreen";

export const metadata = {
  title: 'Marion Roche',
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

export default function PortfolioFullscreenPage() {
  const projects = getAllPosts("src/data/Projects");

  return (
    <body className="main-bg">
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />

      <Navbar />
      <Menu projects={projects}/>
      <Fullscreen projects={[
        {
        "id": "0",
        "link": "/about",
        "background": "/assets/imgs/projects/bgmr.jpg",
        "description": "Artiste Numérique",
        "title": "Marion Roche",
        },
        ...projects,
      ]}/>

      <Script src="/assets/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/plugins.js" strategy="beforeInteractive" />
      <Script src="/assets/js/gsap.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/scripts.js" strategy="lazyOnload" />
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-9MJBH9Z12G"></script>
      <script async data-id="101434842" src="//static.getclicky.com/js"></script>
    </body>
  )
}
