import type { Metadata } from "next";
import "../globals.css";
import { Manrope } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Studyroom",
  description:
    "Studyroom is your personal space to study whatever you want, however you want.",
};

const manrope = Manrope({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex flex-col h-screen items-center">
            <h1 className="text-3xl font-extrabold mb-4 italic mt-8">
              Hyper ⚡️tudy Force
            </h1>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
