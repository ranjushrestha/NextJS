
import "./globals.css";
import Navigation from "@/components/Navigation";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
     
    >
      
      <body className="min-h-full flex flex-col">
         <Navigation />
        {children}</body>
    </html>
  );
}
