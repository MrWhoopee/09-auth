"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useDebounce } from "use-debounce";
import css from "./Notes.module.css";
import Pagination from "@/components/Pagination/Pagination";
import Error from "./error";
import Loader from "@/components/Loader/Loader";
import SearchBox from "@/components/SearchBox/SearchBox";
import NoteList from "@/components/NoteList/NoteList";
import { NoteTag } from "@/types/note";
import Link from "next/link";
import { fetchNotes } from "@/lib/api/clientApi";

const PER_PAGE = 10;

interface Props {
  tag?: NoteTag;
}

export default function NotesClient({ tag }: Props) {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearch] = useDebounce(searchQuery, 500);

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["notes", page, PER_PAGE, debouncedSearch],
    queryFn: () =>
      fetchNotes({ page, perPage: PER_PAGE, search: debouncedSearch, tag }),
    placeholderData: keepPreviousData,
  });

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setPage(1);
  };

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        <SearchBox value={searchQuery} onChange={handleSearchChange} />
        {data && data.totalPages > 1 && (
          <Pagination
            totalPages={data?.totalPages || 0}
            currentPage={page}
            onPageChange={setPage}
          />
        )}
        <Link href="/notes/action/create" className={css.button}>
          Create note +
        </Link>
      </header>
      {data && data.notes.length > 0 && <NoteList notes={data.notes} />}
      {!isLoading && !isError && data && data.notes.length === 0 && (
        <p className={css.empty}>No notes found</p>
      )}
      {isLoading && <Loader />}
      {isError && <Error error={error} />}
    </div>
  );
}
