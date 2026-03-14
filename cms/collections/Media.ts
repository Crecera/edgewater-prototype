import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: { singular: 'Media', plural: 'Media' },
  access: { read: () => true },
  upload: {
    mimeTypes: ['image/*', 'video/*'],
    staticDir: '../public/media',
  },
  fields: [
    { name: 'alt', type: 'text', required: true },
    { name: 'externalUrl', type: 'text', admin: { description: 'Optional: external CDN URL instead of uploaded file' } },
  ],
}
