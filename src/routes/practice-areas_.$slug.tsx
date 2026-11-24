import { createFileRoute, notFound } from "@tanstack/react-router";
import { PracticeDetail } from "@/components/content-pages";
import { practices, siteMeta } from "@/lib/site-content";
export const Route = createFileRoute("/practice-areas_/$slug")({
  loader: ({ params }) => { const item = practices.find(item => item.slug === params.slug); if (!item) throw notFound(); return item; },
  head: ({ loaderData }) => siteMeta(loaderData?.name ?? "Unavailable", loaderData?.intro ?? "This content is unavailable."),
  component: Detail,
});
function Detail() { const { slug } = Route.useParams(); return <PracticeDetail slug={slug} />; }
