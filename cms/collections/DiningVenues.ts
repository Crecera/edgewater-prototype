import type { CollectionConfig } from 'payload'

export const DiningVenues: CollectionConfig = {
  slug: 'dining-venues',
  labels: { singular: 'Dining Venue', plural: 'Dining Venues' },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'type', 'featured', 'sortOrder'],
    group: 'Content',
  },
  access: { read: () => true },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true, index: true },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Restaurant', value: 'restaurant' },
        { label: 'Bar', value: 'bar' },
        { label: 'Coffee Shop', value: 'coffee-shop' },
        { label: 'In-Room Dining', value: 'in-room' },
      ],
    },
    { name: 'tagline', type: 'text', label: 'Short Subtitle' },
    { name: 'description', type: 'richText', label: 'Full Description' },
    { name: 'heroImage', type: 'upload', relationTo: 'media', label: 'Hero Image' },
    {
      name: 'hours',
      type: 'array',
      label: 'Operating Hours',
      fields: [
        { name: 'label', type: 'text', required: true, label: 'Period (e.g. Brunch, Dinner)' },
        { name: 'days', type: 'text', required: true, label: 'Days (e.g. Sat & Sun)' },
        { name: 'times', type: 'text', required: true, label: 'Times (e.g. 7:00am – 2:00pm)' },
      ],
    },
    { name: 'phone', type: 'text' },
    { name: 'email', type: 'text' },
    {
      name: 'menuSections',
      type: 'array',
      label: 'Menu Sections',
      fields: [
        { name: 'heading', type: 'text', required: true },
        {
          name: 'items',
          type: 'array',
          fields: [
            { name: 'name', type: 'text', required: true },
            { name: 'description', type: 'text' },
            { name: 'price', type: 'text' },
          ],
        },
      ],
    },
    {
      name: 'galleryImages',
      type: 'array',
      label: 'Gallery',
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media', required: true },
      ],
    },
    { name: 'featured', type: 'checkbox', defaultValue: false, admin: { position: 'sidebar' } },
    { name: 'sortOrder', type: 'number', defaultValue: 0, admin: { position: 'sidebar' } },
  ],
  defaultSort: 'sortOrder',
  timestamps: true,
}
