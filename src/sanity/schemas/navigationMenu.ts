import { defineField, defineType } from "sanity";

export const navigationMenu = defineType({
  name: "navigationMenu",
  title: "Navigation Menu",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Menu Title",
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
      name: "items",
      title: "Menu Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", type: "string", title: "Label" }),
            defineField({ name: "href", type: "string", title: "URL" }),
            defineField({
              name: "children",
              type: "array",
              title: "Sub-items",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({ name: "label", type: "string", title: "Label" }),
                    defineField({ name: "href", type: "string", title: "URL" }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
  ],
});
