import { client } from "./sanity.client";

export async function getPages() {
  return client.fetch(`*[_type == "page"]{ _id, title, slug }`);
}

export async function getPageBySlug(slug: string) {
  return client.fetch(
    `*[_type == "page" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      seo,
      sections
    }`,
    { slug }
  );
}

export async function getSiteSettings() {
  return client.fetch(`*[_type == "siteSettings"][0]`);
}
