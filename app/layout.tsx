import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import Script from 'next/script' //linea agregada

export const metadata: Metadata = {
  title: "ZOHAN - Importación de Insumos",
  description: "Especialistas en importación de insumos para exportación. La única empresa argentina liderada por alguien que recorre fábricas en China.",
icons: {
    icon: '/Favicon-zohan.png', // o favicon.ico
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
       {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-TJ407RM58J"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-TJ407RM58J');
        `}
      </Script>
      
      <body>{children}</body>
      <body>{children}</body>
    </html>
  )
}
