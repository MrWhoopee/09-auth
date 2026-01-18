import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile | NoteHub",
  description: "View and manage your personal information on NoteHub.",
  openGraph: {
    title: "Profile | NoteHub",
    description: "View and manage your personal information on NoteHub.",
    url: "https://08-zustand-delta-six.vercel.app/profile",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "NoteHub",
      },
    ],
  },
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
