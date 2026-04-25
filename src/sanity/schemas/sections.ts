import { defineField, defineType } from "sanity";

export const navSection = defineType({
  name: "navSection",
  title: "Navigation",
  type: "object",
  fields: [
    defineField({ name: "logoLight", type: "image", title: "Logo Light", options: { hotspot: true } }),
    defineField({ name: "logoDark", type: "image", title: "Logo Dark", options: { hotspot: true } }),
    defineField({
      name: "subBrands",
      type: "array",
      title: "Sub-Brands",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name", type: "string", title: "Name" }),
            defineField({ name: "href", type: "string", title: "URL" }),
            defineField({ name: "color", type: "string", title: "Brand Color (hex)" }),
          ],
        },
      ],
    }),
    defineField({
      name: "links",
      type: "array",
      title: "Navigation Links",
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
});

export const hero = defineType({
  name: "hero",
  title: "Hero",
  type: "object",
  fields: [
    defineField({ name: "kicker", type: "string", title: "Kicker (small text above heading)" }),
    defineField({ name: "heading", type: "string", title: "Heading" }),
    defineField({ name: "subheading", type: "text", title: "Subheading" }),
    defineField({ name: "image", type: "image", title: "Background Image", options: { hotspot: true } }),
    defineField({ name: "ctaText", type: "string", title: "Primary CTA Text" }),
    defineField({ name: "ctaLink", type: "string", title: "Primary CTA Link" }),
    defineField({ name: "secondaryCtaText", type: "string", title: "Secondary CTA Text" }),
    defineField({ name: "secondaryCtaLink", type: "string", title: "Secondary CTA Link" }),
    defineField({
      name: "stats",
      type: "array",
      title: "Stats Grid",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "value", type: "string", title: "Value (e.g. 500+)" }),
            defineField({ name: "label", type: "string", title: "Label" }),
          ],
        },
      ],
    }),
  ],
});

export const clientBar = defineType({
  name: "clientBar",
  title: "Client Bar",
  type: "object",
  fields: [
    defineField({ name: "heading", type: "string", title: "Heading" }),
    defineField({
      name: "clients",
      type: "array",
      title: "Clients",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name", type: "string", title: "Client Name" }),
            defineField({ name: "logo", type: "image", title: "Client Logo", options: { hotspot: true } }),
          ],
        },
      ],
    }),
  ],
});

export const editorial = defineType({
  name: "editorial",
  title: "Editorial",
  type: "object",
  fields: [
    defineField({ name: "heading", type: "string", title: "Heading" }),
    defineField({
      name: "items",
      type: "array",
      title: "Editorial Items (3-column grid)",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "image", type: "image", title: "Photo", options: { hotspot: true } }),
            defineField({ name: "quote", type: "text", title: "Quote / Phrase" }),
            defineField({ name: "attribution", type: "string", title: "Attribution" }),
          ],
        },
      ],
    }),
  ],
});

export const sectors = defineType({
  name: "sectors",
  title: "Sectors",
  type: "object",
  fields: [
    defineField({ name: "heading", type: "string", title: "Heading" }),
    defineField({ name: "subheading", type: "text", title: "Subheading" }),
    defineField({
      name: "featured",
      type: "object",
      title: "Featured Sector",
      fields: [
        defineField({ name: "name", type: "string", title: "Sector Name" }),
        defineField({ name: "description", type: "text", title: "Description" }),
        defineField({ name: "icon", type: "string", title: "Icon Name" }),
        defineField({ name: "color", type: "string", title: "Accent Color (hex)" }),
        defineField({ name: "image", type: "image", title: "Image", options: { hotspot: true } }),
        defineField({ name: "href", type: "string", title: "Link" }),
      ],
    }),
    defineField({
      name: "items",
      type: "array",
      title: "Other Sectors (4-column grid)",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name", type: "string", title: "Sector Name" }),
            defineField({ name: "description", type: "text", title: "Short Description" }),
            defineField({ name: "icon", type: "string", title: "Icon Name" }),
            defineField({ name: "color", type: "string", title: "Accent Color (hex)" }),
            defineField({ name: "href", type: "string", title: "Link" }),
          ],
        },
      ],
    }),
  ],
});

export const solutions = defineType({
  name: "solutions",
  title: "Solutions",
  type: "object",
  fields: [
    defineField({ name: "heading", type: "string", title: "Heading" }),
    defineField({ name: "subheading", type: "text", title: "Subheading" }),
    defineField({
      name: "items",
      type: "array",
      title: "Solution Cards (2-column grid)",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", type: "string", title: "Title" }),
            defineField({ name: "description", type: "text", title: "Description" }),
            defineField({ name: "icon", type: "string", title: "Icon Name" }),
            defineField({ name: "href", type: "string", title: "Link" }),
          ],
        },
      ],
    }),
  ],
});

export const cases = defineType({
  name: "cases",
  title: "Cases",
  type: "object",
  fields: [
    defineField({ name: "heading", type: "string", title: "Heading" }),
    defineField({ name: "subheading", type: "text", title: "Subheading" }),
    defineField({
      name: "items",
      type: "array",
      title: "Case Articles (3-column grid)",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", type: "string", title: "Title" }),
            defineField({ name: "excerpt", type: "text", title: "Excerpt" }),
            defineField({ name: "image", type: "image", title: "Image", options: { hotspot: true } }),
            defineField({ name: "sector", type: "string", title: "Sector Tag" }),
            defineField({
              name: "kpis",
              type: "array",
              title: "KPIs",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({ name: "value", type: "string", title: "Value" }),
                    defineField({ name: "label", type: "string", title: "Label" }),
                  ],
                },
              ],
            }),
            defineField({ name: "href", type: "string", title: "Link" }),
          ],
        },
      ],
    }),
  ],
});

export const pd = defineType({
  name: "pd",
  title: "P&D (R&D)",
  type: "object",
  fields: [
    defineField({ name: "heading", type: "string", title: "Heading" }),
    defineField({ name: "subheading", type: "text", title: "Subheading" }),
    defineField({
      name: "capabilities",
      type: "array",
      title: "Capabilities Grid",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", type: "string", title: "Title" }),
            defineField({ name: "description", type: "text", title: "Description" }),
            defineField({ name: "icon", type: "string", title: "Icon Name" }),
          ],
        },
      ],
    }),
  ],
});

export const store = defineType({
  name: "store",
  title: "Store",
  type: "object",
  fields: [
    defineField({ name: "heading", type: "string", title: "Heading" }),
    defineField({ name: "subheading", type: "text", title: "Subheading" }),
    defineField({
      name: "products",
      type: "array",
      title: "Product Grid",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name", type: "string", title: "Product Name" }),
            defineField({ name: "description", type: "text", title: "Description" }),
            defineField({ name: "image", type: "image", title: "Product Image", options: { hotspot: true } }),
            defineField({ name: "price", type: "string", title: "Price Display" }),
            defineField({ name: "href", type: "string", title: "Product Link" }),
          ],
        },
      ],
    }),
  ],
});

export const ctaFooter = defineType({
  name: "ctaFooter",
  title: "CTA / Footer",
  type: "object",
  fields: [
    defineField({ name: "heading", type: "string", title: "Heading" }),
    defineField({ name: "body", type: "text", title: "Body Text" }),
    defineField({ name: "buttonText", type: "string", title: "Button Text" }),
    defineField({ name: "buttonLink", type: "string", title: "Button Link" }),
    defineField({ name: "recipientEmail", type: "string", title: "Contact Form Email" }),
    defineField({
      name: "offices",
      type: "array",
      title: "Office Locations",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "city", type: "string", title: "City" }),
            defineField({ name: "address", type: "text", title: "Address" }),
            defineField({ name: "phone", type: "string", title: "Phone" }),
          ],
        },
      ],
    }),
  ],
});

export const contactForm = defineType({
  name: "contactForm",
  title: "Contact Form",
  type: "object",
  fields: [
    defineField({ name: "heading", type: "string", title: "Heading" }),
    defineField({ name: "description", type: "text", title: "Description" }),
    defineField({ name: "recipientEmail", type: "string", title: "Recipient Email" }),
  ],
});
