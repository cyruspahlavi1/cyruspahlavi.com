import { notFound } from 'next/navigation';
import { newsArticles, getArticleBySlug } from '@/lib/news-data';
import { ArticleContent } from '@/components/article-content';

export function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
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
