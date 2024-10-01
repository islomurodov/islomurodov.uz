import { serverQueryContent } from "#content/server";
import RSS from "rss";
import { appDescription } from "~/constants";

export default defineEventHandler(async (event) => {
  if (!import.meta.dev && !import.meta.prerender) return;

  const feed = new RSS({
    title: "Islom Murodov",
    description: appDescription,
    copyright: `© 2021-${new Date().getFullYear()} Islom Murodov. All rights reserved.`,
    site_url: "https://islomurodov.uz",
    feed_url: "https://islomurodov.uz/rss.xml",
  });

  const docs = await serverQueryContent(event)
    .sort({ date: -1 })
    .where({ _partial: false })
    .find();
  const blogPosts = docs.filter((doc) => doc?._path?.includes("/blog"));

  for (const doc of blogPosts) {
    feed.item({
      title: doc.title ?? "-",
      url: `https://islomurodov.uz${doc._path}`,
      date: new Date(doc.date),
      description: doc.description,
    });
  }

  const feedString = feed.xml({ indent: true });
  event.res.setHeader("content-type", "text/xml");
  event.res.end(feedString);
});
