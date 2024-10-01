import { serverQueryContent } from "#content/server";
import RSS from "rss";

export default defineEventHandler(async (event) => {
  const feed = new RSS({
    title: "Islom Murodov",
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
      date: doc.date,
      description: doc.description,
    });
  }

  const feedString = feed.xml({ indent: true });
  event.res.setHeader("content-type", "text/xml");
  event.res.end(feedString);
});
