//= Global Styles
import "@/styles/globals.css";

export const metadata = {
  title: 'Marion Roche',
  description: 'Marion Roche - Digital Artist',
  keywords: ['Marion Roche', 'digital', 'artist', 'lyon'],
  icons: {
    icon: "/assets/imgs/favicon.ico",
    shortcut: "/assets/imgs/favicon.ico"
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {children}
    </html>
  )
}
