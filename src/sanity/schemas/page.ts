import { defineField, defineType } from "sanity";

export const page = defineType({
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        defineField({ name: "metaTitle", type: "string", title: "Meta Title" }),
        defineField({ name: "metaDescription", type: "text", title: "Meta Description" }),
        defineField({ name: "ogImage", type: "image", title: "OG Image" }),
      ],
    }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        { type: "navSection" },
        { type: "hero" },
        { type: "clientBar" },
        { type: "editorial" },
        { type: "sectors" },
        { type: "solutions" },
        { type: "cases" },
        { type: "pd" },
        { type: "store" },
        { type: "ctaFooter" },
        { type: "contactForm" },
      ],
    }),
  ],
});
