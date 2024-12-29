import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Code Skill HUb",
  description: "O CodeSkillHub é uma plataforma colaborativa de recomendação de cursos, projetada para conectar usuários com os melhores conteúdos educacionais disponíveis, de acordo com suas áreas de interesse, temas preferidos e tecnologias relevantes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
      >
          {children}
      </ThemeProvider>
        </body>
    </html>
  );
}