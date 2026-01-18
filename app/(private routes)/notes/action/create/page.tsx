import { Metadata } from "next";
import css from "./page.module.css";
import NoteForm from "@/components/NoteForm/NoteForm";

export const metadata: Metadata = {
  title: "Create Note | NoteHub",
  description: "Create a new note to organize your thoughts and tasks.",
  openGraph: {
    title: "Create Note | NoteHub",
    description: "Create a new note to organize your thoughts and tasks.",
    url: "https://08-zustand-delta-six.vercel.app/notes/action/create",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "NoteHub Open Graph image",
      },
    ],
  },
};

export default function CreateNote() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm />
      </div>
    </main>
  );
}
