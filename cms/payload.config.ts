import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

import { Pages } from './collections/Pages'
import { Rooms } from './collections/Rooms'
import { DiningVenues } from './collections/DiningVenues'
import { Media } from './collections/Media'
import { Users } from './collections/Users'
import { SiteSettings } from './globals/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  serverURL: process.env.PAYLOAD_URL || 'http://localhost:3000',
  secret: process.env.PAYLOAD_SECRET || 'edgewater-dev-secret-change-in-production',
  admin: {
    meta: {
      titleSuffix: '— Edgewater CMS',
    },
  },
  editor: lexicalEditor(),
  collections: [Pages, Rooms, DiningVenues, Media, Users],
  globals: [SiteSettings],
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || `file:${path.resolve(dirname, 'data/payload.db')}`,
    },
  }),
  cors: [
    'http://localhost:4321',
    'https://edgewater-prototype.david4683.workers.dev',
  ],
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
