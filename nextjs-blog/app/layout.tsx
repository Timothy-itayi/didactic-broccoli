
import type { Metadata } from "next";
import { ThemeProvider } from './components/theme-provider'
import Navbar from './components/Navbar'
import "./globals.css";


export const metadata: Metadata = {
  title: "Timothy's Blog",
  description: "a blog to showcase my learnings and anything else tech related ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="" >
        
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar/>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
