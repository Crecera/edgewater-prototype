import type { Metadata } from 'next'
import { RootLayout } from '@payloadcms/next/layouts'
import configPromise from '@payload-config'
import React from 'react'
import './custom.scss'

type Args = { children: React.ReactNode }

export const metadata: Metadata = {
  title: 'Edgewater CMS',
}

export default async function Layout({ children }: Args) {
  return <RootLayout config={configPromise}>{children}</RootLayout>
}
