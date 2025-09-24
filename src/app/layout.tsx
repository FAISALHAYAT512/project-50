import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Pakistan Tourism",
  description: "Explore the beauty of Pakistan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="bg-green-800 text-white p-4">
          <nav className="flex justify-center gap-6 text-lg">
            <Link href="/">Home</Link>
            <Link href="/destinations">Destinations</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        <main className="min-h-screen">{children}</main>
        <footer className="bg-gray-900 text-white text-center p-4">
          🌍 Pakistan Tourism © {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  );
}
