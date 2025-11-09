import { WikiCard } from "@/components/ui/wiki-card";
import { getArticles } from "@/lib/data/articles";

export default async function WikiPage() {
  const articles = await getArticles();
  return (
    <main className="max-w-2xl mx-auto mt-10 flex flex-col gap-6">
      {articles.map(({ id, title, content, author, createdAt }) => (
        <WikiCard
          key={id}
          href={`wiki/${id}`}
          title={title}
          summary={content.substring(0, 200)}
          author={author ?? "Unknown"}
          date={createdAt}
        />
      ))}
    </main>
  );
}
