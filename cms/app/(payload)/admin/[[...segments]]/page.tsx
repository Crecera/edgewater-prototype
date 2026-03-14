import type { AdminViewProps } from 'payload'
import { DefaultTemplate } from '@payloadcms/next/templates'
import { importMap } from './importMap.js'
import configPromise from '@payload-config'

export { generatePageMetadata as generateMetadata } from '@payloadcms/next/views'

type Args = { params: Promise<{ segments: string[] }>; searchParams: Promise<Record<string, string>> }

export default async function Page(args: Args) {
  return DefaultTemplate({ config: configPromise, importMap, ...args })
}
