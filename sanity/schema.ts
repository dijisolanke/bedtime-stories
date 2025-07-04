const story = {
  name: "story",
  title: "Bedtime Story",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required().min(1).max(100),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule: any) => Rule.required().min(10).max(500),
    },
    {
      name: "image",
      title: "Cover Image",
      type: "image",
      description: "A visual cover image to help identify the story",
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "tags",
      title: "Tags",
      type: "string",
      description: 'Comma-separated tags (e.g., "Funny, Short, Relaxing")',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "audio",
      title: "Audio File",
      type: "file",
      options: {
        accept: "audio/*",
      },
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
      tags: "tags",
      media: "image",
    },
    prepare(selection: any) {
      const { title, subtitle, tags, media } = selection
      return {
        title,
        subtitle: `${subtitle} • Tags: ${tags}`,
        media,
      }
    },
  },
}

export default story
