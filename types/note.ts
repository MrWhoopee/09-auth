export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  tag: NoteTag;
}

export interface CreateNoteParams {
  title: string;
  content: string;
  tag: NoteTag;
}

export type NoteTag = "Work" | "Personal" | "Meeting" | "Shopping" | "Todo";

export interface SearchProps {
  search?: string;
  tag?: NoteTag;
  page?: number;
  perPage?: number;
  sortBy?: "created" | "updated";
}

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}
