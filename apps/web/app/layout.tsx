// @ts-ignore: allow importing global CSS when no type declarations are present
import "./globals.css";

export const metadata = {
  title: "GetLivedIn | Find a Home, Not Just a House",
  description:
    "Canadian home intelligence reports that reveal lifestyle, true costs, and offer strategy."
};

export default function RootLayout({
  children,
}: {
  children: any;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

