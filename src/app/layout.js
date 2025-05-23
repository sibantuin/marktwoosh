// app/layout.jsx
import { Inter } from "next/font/google";
import "./globals.css";

// Konfigurasi font Inter
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // CSS variable name
  weight: "400", // Regular weight (default)
});

export const metadata = {
  title: "Marktwoosh",
  description: "Ready, Set, Woosh!",
  icons: {
    icon: [
      {
        url: '/favicon_marktwoosh.svg',
        type: 'image/svg+xml',
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}