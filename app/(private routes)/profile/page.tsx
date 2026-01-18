"use client";

import Image from "next/image";
import css from "./ProfilePage.module.css";
import Link from "next/link";
import { useAuthStore } from "@/lib/store/authStore";

// export const metadata: Metadata = {
//   title: "Profile | NoteHub",
//   description: "View and manage your personal information on NoteHub.",
//   openGraph: {
//     title: "Profile | NoteHub",
//     description: "View and manage your personal information on NoteHub.",
//     url: `https://vercel.app/profile`,

//     images: [
//       {
//         url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
//         width: 1200,
//         height: 630,
//         alt: "NoteHub",
//       },
//     ],
//   },
// };

export default function Profile() {
  const { user } = useAuthStore();
  if (!user) {
    return null;
  }
  return (
    <main className={css.mainContent}>
      <div className={css.profileCard}>
        <div className={css.header}>
          <h1 className={css.formTitle}>Profile Page</h1>
          <Link href="/profile/edit" className={css.editProfileButton}>
            Edit Profile
          </Link>
        </div>
        <div className={css.avatarWrapper}>
          <Image
            src={user.avatar}
            alt="User Avatar"
            width={120}
            height={120}
            className={css.avatar}
          />
        </div>
        <div className={css.profileInfo}>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      </div>
    </main>
  );
}
