import { FetchNotesResponse, Note, SearchProps } from "@/types/note";

import { nextApi } from "./api";

export async function fetchNotes(
  params: SearchProps,
): Promise<FetchNotesResponse> {
  const res = await nextApi.get<FetchNotesResponse>("/notes", { params });
  return res.data;
}
export async function fetchNoteById(id: string): Promise<Note> {
  const res = await nextApi.get<Note>(`/notes/${id}`);
  return res.data;
}

export async function getMe() {
  const { data } = await nextApi.get("users/me");
  return data;
}
export async function checkSession() {
  const { data } = await nextApi.get("auth/session");
  return data;
}
