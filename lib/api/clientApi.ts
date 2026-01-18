import {
  NoteTag,
  Note,
  CreateNoteParams,
  SearchProps,
  FetchNotesResponse,
} from "@/types/note";
import { nextApi } from "./api";
import { User } from "@/types/user";

// export const api = axios.create({
//   baseURL: "https://notehub-public.goit.study/api",
//   headers: {
//     Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
//   },
// });

interface AuthPayload {
  email: string;
  password: string;
}

interface UpdateMe {
  email: string;
  username: string;
}

export async function fetchNotes(
  params: SearchProps,
): Promise<FetchNotesResponse> {
  const res = await nextApi.get<FetchNotesResponse>("/notes", { params });
  return res.data;
}

export async function createNote(note: CreateNoteParams): Promise<Note> {
  const res = await nextApi.post<Note>("/notes", note);
  return res.data;
}

export async function deleteNote(id: string): Promise<Note> {
  const res = await nextApi.delete<Note>(`/notes/${id}`);
  return res.data;
}

export async function fetchNoteById(id: string): Promise<Note> {
  const res = await nextApi.get<Note>(`/notes/${id}`);
  return res.data;
}

export async function register(userData: AuthPayload) {
  const { data } = await nextApi.post<User>("auth/register", userData);
  return data;
}
export async function login(userData: AuthPayload) {
  const { data } = await nextApi.post<User>("auth/login", userData);
  return data;
}

export async function logout() {
  const { data } = await nextApi.post("auth/logout");
  return data;
}
export async function checkSession() {
  const { data } = await nextApi.get("auth/session");
  return data;
}
export async function getMe() {
  const { data } = await nextApi.get("users/me");
  return data;
}
export async function updateMe(userData: UpdateMe) {
  const { data } = await nextApi.patch("users/me", userData);
  return data;
}
