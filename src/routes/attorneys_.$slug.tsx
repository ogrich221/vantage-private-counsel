import { createFileRoute, notFound } from "@tanstack/react-router";
import { AttorneyDetail } from "@/components/content-pages";
import { attorneys, siteMeta } from "@/lib/site-content";
export const Route = createFileRoute("/attorneys_/$slug")({
  loader: ({ params }) => { const item = attorneys.find(item => item.slug === params.slug); if (!item) throw notFound(); return item; },
  head: ({ loaderData }) => siteMeta(loaderData?.name ?? "Unavailable", loaderData?.bio ?? "This content is unavailable."),
  component: Detail,
});
function Detail() { const { slug } = Route.useParams(); return <AttorneyDetail slug={slug} />; }
