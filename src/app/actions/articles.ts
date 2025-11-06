"use server";

import { eq } from "drizzle-orm";
import { authorizeUserToEditArticle } from "@/db/authz";
import db from "@/db/index";
import { articles } from "@/db/schema";
import { stackServerApp } from "@/stack/server";

export type CreateArticleInput = {
  title: string;
  content: string;
  authorId: string;
  imageUrl?: string;
};

export type UpdateArticleInput = {
  title?: string;
  content?: string;
  imageUrl?: string;
};

export async function createArticle(data: CreateArticleInput) {
  const user = await stackServerApp.getUser();
  if (!user) {
    throw new Error("❌ Unauthorized");
  }

  const response = await db
    .insert(articles)
    .values({
      title: data.title,
      content: data.content,
      authorId: data.authorId,
      published: true,
      slug: `${Date.now()}`,
    })
    .returning({ id: articles.id });
  const articleId = response[0]?.id;
  return { success: true, message: "Article create logged", id: articleId };
}

export async function updateArticle(id: string, data: UpdateArticleInput) {
  const user = await stackServerApp.getUser();
  if (!user) {
    throw new Error("❌ Unauthorized");
  }

  if (!(await authorizeUserToEditArticle(user.id, +id))) {
    throw new Error("❌ Forbidden");
  }

  try {
    await db
      .update(articles)
      .set({
        title: data.title,
        content: data.content,
        imageUrl: data.imageUrl ?? undefined
      })
      .where(eq(articles.id, +id));
  } catch (e) {
    console.error("insertion error", e);
    // send this to observability platform (grafana, loki, promethues)
  }
  return { success: true, message: `Article ${id} update logged (stub)` };
}

export async function deleteArticle(id: string) {
  const user = await stackServerApp.getUser();
  if (!user) {
    throw new Error("❌ Unauthorized");
  }

  if (!(await authorizeUserToEditArticle(user.id, +id))) {
    throw new Error("❌ Forbidden");
  }
  await db.delete(articles).where(eq(articles.id, +id));
  return { success: true, message: `Article ${id} delete logged (stub)` };
}
