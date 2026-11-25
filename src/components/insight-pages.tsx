import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Page } from "./site-shell";
import { articles, insightCategories } from "@/lib/site-content";
import { Button } from "./ui/button";

export function InsightsPage() {
  const [search, setSearch] = useState(""); const [category, setCategory] = useState("All categories");
  const results = articles.filter(article => (category === "All categories" || article.category === category) && `${article.title} ${article.intro} ${article.author}`.toLowerCase().includes(search.toLowerCase()));
  return <Page title="Insights & Perspectives" intro="A closer look at the legal questions shaping business."><div className="flex flex-wrap gap-6"><label>Search insights<input type="search" value={search} onChange={event => setSearch(event.target.value)} /></label><label>Category<select aria-label="Category" value={category} onChange={event => setCategory(event.target.value)}><option>All categories</option>{insightCategories.map(c => <option key={c}>{c}</option>)}</select></label></div><p className="mt-6 text-xs text-slate-400">Executive legal publications and industry analysis prepared by our legal advisory team.</p><div className="mt-8 grid gap-8 md:grid-cols-2">{results.map(article => <article key={article.slug} className="border-b border-border pb-6"><p className="text-sm">{article.category} · {new Date(`${article.date}T12:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" })}</p><h2 className="mt-3 text-2xl">{article.title}</h2><p className="my-4">{article.intro}</p><p className="mb-4 text-xs text-slate-400">By {article.author} · Published Analysis</p><Button asChild variant="outline"><Link to="/insights/$slug" params={{ slug: article.slug }}>Read Article</Link></Button></article>)}</div>{results.length === 0 && <p role="status" className="mt-8">No articles match your search.</p>}</Page>;
}
export function ArticlePage({ slug }: { slug: string }) {
  const article = articles.find(item => item.slug === slug); if (!article) return null;
  return <Page title={article.title} intro={article.intro}><p>{article.category} · {article.date} · By {article.author}</p><p className="mt-4 text-xs text-slate-400">General commentary and analysis. Not individualized legal advice.</p><div className="mt-8 max-w-3xl grid gap-6">{article.paragraphs.map(p => <p key={p}>{p}</p>)}</div><h2 className="mt-12 text-2xl">Related insights</h2><div className="mt-6 grid gap-4">{articles.filter(item => item.slug !== slug).slice(0, 3).map(item => <Link key={item.slug} to="/insights/$slug" params={{ slug: item.slug }}>{item.title}</Link>)}</div></Page>;
}