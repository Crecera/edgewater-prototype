import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings',
  access: { read: () => true },
  fields: [
    {
      name: 'navigation',
      type: 'group',
      fields: [
        {
          name: 'links',
          type: 'array',
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'url', type: 'text', required: true },
            { name: 'enabled', type: 'checkbox', defaultValue: true },
          ],
        },
        { name: 'phone', type: 'text', label: 'Header Phone' },
        { name: 'bookingUrl', type: 'text', label: 'Booking Engine URL' },
      ],
    },
    {
      name: 'footer',
      type: 'group',
      fields: [
        { name: 'tagline', type: 'textarea' },
        {
          name: 'address',
          type: 'group',
          fields: [
            { name: 'street', type: 'text' },
            { name: 'city', type: 'text' },
            { name: 'state', type: 'text' },
            { name: 'zip', type: 'text' },
          ],
        },
        { name: 'phone', type: 'text' },
        { name: 'email', type: 'text' },
      ],
    },
    {
      name: 'nobleHouseProperties',
      type: 'array',
      label: 'Noble House Portfolio',
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'url', type: 'text', required: true },
      ],
    },
    {
      name: 'integrations',
      type: 'group',
      fields: [
        { name: 'gtmId', type: 'text', label: 'GTM Container ID' },
        { name: 'typekitId', type: 'text', label: 'Adobe Typekit Kit ID' },
      ],
    },
  ],
}
