import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { newsArticles, getArticleBySlug } from '@/lib/news-data';
import { ArticleContent } from '@/components/article-content';

export function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: 'Article Not Found' };
  }

  return {
    title: `${article.titleEn} | Cyrus Pahlavi`,
    description: article.excerptEn,
    openGraph: {
      title: article.titleEn,
      description: article.excerptEn,
      type: 'article',
      publishedTime: article.date,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return <ArticleContent article={article} />;
}
