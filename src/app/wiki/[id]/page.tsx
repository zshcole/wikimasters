import { notFound } from "next/navigation";
import WikiArticleViewer from "@/components/wiki-article-viewer";
import { authorizeUserToEditArticle } from "@/db/authz";
import { getArticleById } from "@/lib/data/articles";
import { stackServerApp } from "@/stack/server";

interface ViewArticlePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ViewArticlePage({
  params,
}: ViewArticlePageProps) {
  await stackServerApp.getUser({ or: "redirect" });
  const { id } = await params;

  const user = await stackServerApp.getUser({ or: "redirect" });
  let canEdit = false;

  if (user) {
    try {
      canEdit = await authorizeUserToEditArticle(user.id, +id);
    } catch {
      canEdit = false;
    }
  }

  const article = await getArticleById(+id);
  if (!article) {
    notFound();
  }

  return <WikiArticleViewer article={article} canEdit={canEdit} />;
}
