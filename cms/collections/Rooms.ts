import type { CollectionConfig } from 'payload'

export const Rooms: CollectionConfig = {
  slug: 'rooms',
  labels: { singular: 'Room', plural: 'Rooms' },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category', 'featured', 'sortOrder'],
    group: 'Content',
  },
  access: { read: () => true },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true, index: true },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Over-Water', value: 'over-water' },
        { label: 'City View', value: 'city-view' },
        { label: 'Specialty', value: 'specialty' },
        { label: 'Accessible', value: 'accessible' },
      ],
    },
    { name: 'squareFeet', type: 'number', label: 'Square Feet' },
    { name: 'sleeps', type: 'number', label: 'Max Occupancy' },
    { name: 'shortDescription', type: 'textarea', label: 'Card Description' },
    { name: 'fullDescription', type: 'richText', label: 'Full Room Description' },
    { name: 'heroImage', type: 'upload', relationTo: 'media', label: 'Hero Image' },
    {
      name: 'galleryImages',
      type: 'array',
      label: 'Gallery',
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media', required: true },
      ],
    },
    {
      name: 'amenities',
      type: 'array',
      label: 'Amenities',
      fields: [
        { name: 'name', type: 'text', required: true },
      ],
    },
    { name: 'tourUrl', type: 'text', label: '360° Tour URL' },
    { name: 'featured', type: 'checkbox', defaultValue: false, label: 'Show on Homepage', admin: { position: 'sidebar' } },
    { name: 'sortOrder', type: 'number', defaultValue: 0, admin: { position: 'sidebar' } },
  ],
  defaultSort: 'sortOrder',
  timestamps: true,
}
