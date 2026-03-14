import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: { singular: 'Page', plural: 'Pages' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    group: 'Content',
  },
  access: { read: () => true },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true, index: true },
    {
      name: 'hero',
      type: 'group',
      fields: [
        { name: 'headline', type: 'text', label: 'H1 Headline' },
        { name: 'description', type: 'textarea', label: 'Hero Description' },
        { name: 'image', type: 'upload', relationTo: 'media', label: 'Hero Image / Poster' },
        { name: 'videoUrl', type: 'text', label: 'Hero Video URL (MP4)', admin: { description: 'Optional background video' } },
        { name: 'transparentNav', type: 'checkbox', defaultValue: true, label: 'Transparent Nav Over Hero' },
      ],
    },
    {
      name: 'sections',
      type: 'array',
      label: 'Content Sections',
      fields: [
        {
          name: 'type',
          type: 'select',
          required: true,
          options: [
            { label: 'Feature Split (Image + Text)', value: 'featureSplit' },
            { label: 'Card Grid', value: 'cardGrid' },
            { label: 'CTA Banner', value: 'ctaBanner' },
            { label: 'Season Grid', value: 'seasonGrid' },
            { label: 'Room Carousel', value: 'roomCarousel' },
            { label: 'Flip.to UGC', value: 'flipto' },
          ],
        },
        { name: 'label', type: 'text', label: 'Eyebrow Label' },
        { name: 'heading', type: 'text', label: 'Section Heading (H2)' },
        { name: 'body', type: 'textarea', label: 'Section Body Text' },
        { name: 'image', type: 'upload', relationTo: 'media' },
        { name: 'imageAlt', type: 'text', label: 'Image Alt Text' },
        {
          name: 'imagePosition',
          type: 'select',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Right', value: 'right' },
          ],
          defaultValue: 'left',
          admin: { condition: (_, siblingData) => siblingData?.type === 'featureSplit' },
        },
        {
          name: 'backgroundStyle',
          type: 'select',
          options: [
            { label: 'White', value: 'white' },
            { label: 'Cream', value: 'cream' },
            { label: 'Sand', value: 'sand' },
            { label: 'Dark', value: 'dark' },
          ],
          defaultValue: 'white',
        },
        { name: 'ctaText', type: 'text', label: 'Button Text' },
        { name: 'ctaUrl', type: 'text', label: 'Button URL' },
      ],
    },
    {
      name: 'seo',
      type: 'group',
      label: 'SEO',
      admin: { position: 'sidebar' },
      fields: [
        { name: 'metaTitle', type: 'text', label: 'Meta Title Override' },
        { name: 'metaDescription', type: 'textarea', label: 'Meta Description' },
        { name: 'ogImage', type: 'upload', relationTo: 'media', label: 'OG Image' },
      ],
    },
  ],
  timestamps: true,
}
