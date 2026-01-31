import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "FarmDirect | Hyperlocal Marketplace",
  description: "Buy fresh produce directly from local farmers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        <div className="pt-2">{children}</div>
      </body>
    </html>
  );
}
