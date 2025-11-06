import type { Metadata } from 'next';
import '@fontsource-variable/inter';
import '@fontsource-variable/familjen-grotesk';
import './globals.css';
import Navbar from './components/Navbar';
import AnimatedFooter from './components/AnimatedFooter';

// Fonts are wired via CSS variables set in :root in globals.css

export const metadata: Metadata = {
  title: 'Joakim Strandlund | UX/UI Designer | Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Space+Mono:wght@400;700&family=Kalam:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />

        {children}

        <AnimatedFooter />
      </body>
    </html>
  );
}
