import { Navbar } from "@/components/Navbar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-3xl mx-auto p-4 mt-8">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
