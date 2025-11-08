import { eq } from "drizzle-orm";
import { usersSync } from "drizzle-orm/neon";
import db from "@/db/index";
import { articles } from "@/db/schema";

/**
 * Fetches all articles from the database, including author name and creation date.
 * @returns Promise resolving to an array of article objects with author name.
 */
export async function getArticles() {
  const response = await db
    .select({
      id: articles.id,
      title: articles.title,
      content: articles.content,
      author: usersSync.name,
      createdAt: articles.createdAt,
    })
    .from(articles)
    .leftJoin(usersSync, eq(articles.authorId, usersSync.id));
  return response;
}

/**
 * Fetches a single article by its ID, including author name and image URL.
 * @param id - The ID of the article to fetch.
 * @returns Promise resolving to the article object or null if not found.
 */
export async function getArticleById(id: number) {
  const response = await db
    .select({
      id: articles.id,
      title: articles.title,
      content: articles.content,
      author: usersSync.name,
      imageUrl: articles.imageUrl,
      createdAt: articles.createdAt,
    })
    .from(articles)
    .where(eq(articles.id, id))
    .leftJoin(usersSync, eq(articles.authorId, usersSync.id));
  return response[0] ? response[0] : null;
}
