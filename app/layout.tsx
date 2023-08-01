import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecommerce app",
  description: "Secundo ecommerce test app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
