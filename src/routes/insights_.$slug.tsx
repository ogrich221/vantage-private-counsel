import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArticlePage } from "@/components/insight-pages";
import { articles, siteMeta } from "@/lib/site-content";
export const Route = createFileRoute("/insights_/$slug")({
  loader: ({ params }) => { const item = articles.find(item => item.slug === params.slug); if (!item) throw notFound(); return item; },
  head: ({ loaderData }) => siteMeta(loaderData?.title ?? "Unavailable", loaderData?.intro ?? "This content is unavailable."),
  component: Detail,
});
function Detail() { const { slug } = Route.useParams(); return <ArticlePage slug={slug} />; }
