import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Signal Watch | Bookchaowalit", description: "A sample endpoint status monitor." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
