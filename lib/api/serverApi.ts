import { FetchNotesResponse, Note, SearchProps } from "@/types/note";
import { User } from "@/types/user";
import { AxiosResponse } from "axios";
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

export async function getMe(): Promise<User> {
  const cookieStore = await cookies();
  const { data } = await nextApi.get("users/me", {
    headers: { Cookie: cookieStore.toString() },
  });
  return data;
}
export async function checkSession(): Promise<AxiosResponse<{ message: string }>> {
  const cookieStore = await cookies();
  return await nextApi.get<{ message: string }>("auth/session", {
    headers: { Cookie: cookieStore.toString() },
  });
}
