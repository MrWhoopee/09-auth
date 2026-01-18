import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import NotesPreviewClient from "./NotePreview.client";
import { fetchNoteById } from "@/lib/api/serverApi";

interface NotesPreviewPageProps {
  params: Promise<{ id: string }>;
}

export default async function NotesPreviewPage({
  params,
}: NotesPreviewPageProps) {
  const { id } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesPreviewClient />
    </HydrationBoundary>
  );
}
