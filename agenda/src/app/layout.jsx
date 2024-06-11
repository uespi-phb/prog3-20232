import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Agenda ",
  description: "Agenda de contados simples",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
