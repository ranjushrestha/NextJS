
import Navigation from "@/components/Navigation";
import "./globals.css";


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
        <Navigation/>
        {children}</body>
    </html>
  );
}
