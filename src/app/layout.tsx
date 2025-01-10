import type { Metadata } from "next";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import FooterImage from "@/components/footer/FooterImage";
import FooterContainer from "@/components/footer/FooterContainer";
import NavbarItems from "@/components/navbar/NavbarItems";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ecommerce site :)",
  description: "This site is amazing *.*",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarItems />
        <main>{children}</main>
        <Footer>
          <FooterImage>
            <a
              href="https://kobrius11.github.io"
              target="_blank"
              className="flex items-center"
            >
              <Image
                src={"next.svg"}
                alt="footer image logo"
                width={100}
                height={1}
                className="pr-5 dark:invert"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                THIS FOOTER
              </span>
            </a>
          </FooterImage>

          <FooterContainer>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul>
                <li>
                  <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      aria-hidden
                      src="/file.svg"
                      alt="File icon"
                      width={16}
                      height={16}
                    />
                    Learn
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      aria-hidden
                      src="/window.svg"
                      alt="Window icon"
                      width={16}
                      height={16}
                    />
                    Examples
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      aria-hidden
                      src="/globe.svg"
                      alt="Globe icon"
                      width={16}
                      height={16}
                    />
                    Go to nextjs.org →
                  </a>
                </li>
              </ul>
            </div>
            <div></div>
          </FooterContainer>
        </Footer>
      </body>
    </html>
  );
}
