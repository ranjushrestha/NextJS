import Navigation from "@/components/Navigation"
import "../globals.css";

export default function RootLayout({children} :Readonly <{children : React.ReactNode}>) {
  return (
    <html>
      <body>
       <h1>About page Header</h1>
        {children}
      </body>
    </html>
  )
}