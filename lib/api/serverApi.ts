import { FetchNotesResponse, Note, SearchProps } from "@/types/note";
import { cookies } from "next/headers";

import { nextApi } from "./api";

export async function fetchNotes(
  params: SearchProps,
): Promise<FetchNotesResponse> {
  const cookieStore = await cookies();
  const res = await nextApi.get<FetchNotesResponse>("/notes", {
    params,
    headers: { Cookie: cookieStore.toString() },
  });
  return res.data;
}
export async function fetchNoteById(id: string): Promise<Note> {
  const cookieStore = await cookies();
  const res = await nextApi.get<Note>(`/notes/${id}`, {
    headers: { Cookie: cookieStore.toString() },
  });
  return res.data;
}

export async function getMe() {
  const cookieStore = await cookies();
  const { data } = await nextApi.get("users/me", {
    headers: { Cookie: cookieStore.toString() },
  });
  return data;
}
export async function checkSession() {
  const cookieStore = await cookies();
  const { data } = await nextApi.get("auth/session", {
    headers: { Cookie: cookieStore.toString() },
  });
  return data.success;
}
