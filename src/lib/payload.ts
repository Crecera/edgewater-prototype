/**
 * Payload CMS API client for Astro build-time data fetching.
 * Fetches from Payload REST API and returns typed data.
 */

const PAYLOAD_URL = import.meta.env.PAYLOAD_URL || 'http://localhost:3002';

async function fetchAPI(endpoint: string) {
  const res = await fetch(`${PAYLOAD_URL}/api${endpoint}`);
  if (!res.ok) throw new Error(`Payload API error: ${res.status} ${endpoint}`);
  return res.json();
}

// --- Pages ---

export async function getPage(slug: string) {
  const data = await fetchAPI(`/pages?where[slug][equals]=${slug}&depth=2&limit=1`);
  return data.docs?.[0] || null;
}

export async function getAllPages() {
  const data = await fetchAPI('/pages?depth=1&limit=100');
  return data.docs || [];
}

// --- Rooms ---

export async function getRooms(options?: { featured?: boolean }) {
  let query = '/rooms?depth=1&limit=50&sort=sortOrder';
  if (options?.featured) query += '&where[featured][equals]=true';
  const data = await fetchAPI(query);
  return data.docs || [];
}

export async function getRoom(slug: string) {
  const data = await fetchAPI(`/rooms?where[slug][equals]=${slug}&depth=2&limit=1`);
  return data.docs?.[0] || null;
}

// --- Dining Venues ---

export async function getDiningVenues(options?: { featured?: boolean }) {
  let query = '/dining-venues?depth=1&limit=50&sort=sortOrder';
  if (options?.featured) query += '&where[featured][equals]=true';
  const data = await fetchAPI(query);
  return data.docs || [];
}

export async function getDiningVenue(slug: string) {
  const data = await fetchAPI(`/dining-venues?where[slug][equals]=${slug}&depth=2&limit=1`);
  return data.docs?.[0] || null;
}

// --- Site Settings ---

export async function getSiteSettings() {
  return fetchAPI('/globals/site-settings?depth=1');
}

// --- Media helper ---

export function getImageUrl(media: any): string {
  if (!media) return '';
  if (typeof media === 'string') return media;
  if (media.externalUrl) return media.externalUrl;
  if (media.url) return `${PAYLOAD_URL}${media.url}`;
  return '';
}
