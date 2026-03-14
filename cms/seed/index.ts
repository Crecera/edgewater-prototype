/**
 * Seed script — populates Payload CMS with all Edgewater Hotel content.
 * Run: cd cms && npm run seed
 */
import { getPayload } from 'payload'
import config from '../payload.config.js'

const CDN = 'https://admin.edgewaterhotel.com/content/uploads'

async function seed() {
  const payload = await getPayload({ config })
  console.log('Seeding Edgewater CMS...')

  // --- Site Settings ---
  await payload.updateGlobal({
    slug: 'site-settings',
    data: {
      navigation: {
        links: [
          { label: 'Stay', url: '/stay/', enabled: true },
          { label: 'Dine', url: '/dine/', enabled: true },
          { label: 'Explore', url: '#', enabled: false },
          { label: 'Gather', url: '#', enabled: false },
          { label: 'Offers', url: '#', enabled: false },
          { label: 'About', url: '#', enabled: false },
        ],
        phone: '206.792.5959',
        bookingUrl: 'https://www.edgewaterhotel.com/#/booking/step-1',
      },
      footer: {
        tagline: "Seattle's only over-water hotel. Where rock 'n' roll legacy meets Pacific Northwest beauty.",
        address: { street: '2411 Alaskan Way, Pier 67', city: 'Seattle', state: 'WA', zip: '98121' },
        phone: '1-206-728-7000',
        email: 'info@edgewaterhotel.com',
      },
      nobleHouseProperties: [
        { name: 'Argonaut Hotel', url: 'https://www.argonauthotel.com' },
        { name: 'Chatham Inn', url: 'https://www.chathaminn.com' },
        { name: 'Gateway Canyons', url: 'https://www.gatewaycanyons.com' },
        { name: 'Headlands Lodge', url: 'https://www.headlandslodge.com' },
        { name: 'Hotel Terra', url: 'https://www.hotelterrajacksonhole.com' },
        { name: 'Inn on Fifth', url: 'https://www.innonfifth.com' },
        { name: 'Jekyll Island Club', url: 'https://www.jekyllclub.com' },
        { name: 'LaPlaya Resort', url: 'https://www.laplayaresort.com' },
        { name: 'Little Palm Island', url: 'https://www.littlepalmisland.com' },
        { name: 'Mission Bay Resort', url: 'https://www.missionbayresort.com' },
        { name: 'Ocean Key Resort', url: 'https://www.oceankey.com' },
        { name: 'Napa Valley Wine Train', url: 'https://www.winetrain.com' },
      ],
      integrations: {
        gtmId: 'GTM-TSK3HFH',
        typekitId: 'hbk5hzc',
      },
    },
  })
  console.log('  done: Site Settings')

  // --- Homepage ---
  await payload.create({
    collection: 'pages',
    data: {
      title: 'The Edgewater Hotel | Luxury Waterfront Hotel in Downtown Seattle',
      slug: 'home',
      hero: {
        headline: "Seattle's Only Over-Water Hotel",
        description: "Where rock 'n' roll legacy and the unrivaled beauty of the Pacific Northwest meet, stands The Edgewater Hotel. This iconic downtown Seattle hotel, set above the waters of Puget Sound and immortalized in rock history by The Beatles, is your home base for memorable sights, scenic adventures and waterfront charm.",
        videoUrl: `${CDN}/2026/02/THE-EDGEWATER-FULL-VIDEO-19.4-MB.mp4`,
        transparentNav: true,
      },
      sections: [
        {
          type: 'featureSplit',
          label: 'Explore',
          heading: 'Experience Life at The Edge',
          body: 'The Emerald City has it all: world-class sports, famous landmarks and of course, a vibrant music and arts scene. With all that and much more just outside your doorstep, our waterfront hotel is perfectly located to keep you entertained and exploring.',
          imagePosition: 'left',
          backgroundStyle: 'cream',
          ctaText: 'Explore Things To Do',
          ctaUrl: '#',
        },
        {
          type: 'featureSplit',
          label: 'Dine',
          heading: 'Award-Winning Cuisine & Inspiring Views',
          body: 'Savor Pacific Northwest flavors with stunning waterfront views. From the award-winning Six Seven Restaurant to The Brim coffee shop, every dining experience is designed to fuel your Emerald City adventures.',
          imagePosition: 'right',
          backgroundStyle: 'white',
          ctaText: 'Dine With Us',
          ctaUrl: '/dine/',
        },
        {
          type: 'featureSplit',
          label: 'Offers & Packages',
          heading: 'Elevate Your Stay',
          body: 'Make the most of your time in the Pacific Northwest with special offers and exclusive packages designed to elevate your stay at our boutique waterfront hotel in Seattle.',
          imagePosition: 'left',
          backgroundStyle: 'sand',
          ctaText: 'View All Offers',
          ctaUrl: '#',
        },
        {
          type: 'featureSplit',
          label: 'Gather',
          heading: 'Meet Your Ideal Event Planning Partner',
          body: 'With panoramic views of Puget Sound as your backdrop, The Edgewater blends exceptional ambiance, personalized service and memorable cuisine to create weddings, meetings and events that feel truly one-of-a-kind.',
          imagePosition: 'right',
          backgroundStyle: 'white',
          ctaText: 'Start Planning',
          ctaUrl: '#',
        },
        {
          type: 'ctaBanner',
          label: 'Limited Time',
          heading: 'Seattle In Bloom',
          body: 'Celebrate spring in the Emerald City. Book our "Seattle in Bloom" offer by March 26 to enjoy up to 25% off our best available rates, plus a $50 credit to The Brim.',
          backgroundStyle: 'dark',
          ctaText: 'Book Now',
          ctaUrl: '#',
        },
      ],
      seo: {
        metaDescription: "The Edgewater is Seattle's only over-water hotel, and an iconic downtown luxury Seattle hotel immortalized in rock history by The Beatles.",
      },
    },
  })
  console.log('  done: Homepage')

  // --- Stay Overview ---
  await payload.create({
    collection: 'pages',
    data: {
      title: 'Downtown Seattle Hotel Suites | The Edgewater Hotel',
      slug: 'stay',
      hero: {
        headline: 'Elevated Accommodations in Seattle',
        description: 'Unwind and recharge in spacious rooms overlooking the bustling cityscape, or the waters of Puget Sound. Each guestroom features countless amenities, like a gas fireplace for those chilly Seattle nights, so you can focus on the fun and leave the rest to us.',
        transparentNav: true,
      },
      sections: [],
      seo: {
        metaDescription: 'Unwind and recharge in spacious, luxury Seattle accommodations with views of the cityscape or of the Puget Sound.',
      },
    },
  })
  console.log('  done: Stay page')

  // --- Dine Overview ---
  await payload.create({
    collection: 'pages',
    data: {
      title: 'Dining at the Edgewater Hotel | Waterfront Dining in Seattle',
      slug: 'dine',
      hero: {
        headline: 'Over-Water Dining in Seattle',
        description: 'Savor Pacific Northwest flavors with stunning waterfront views at The Edgewater Hotel. Located on Elliott Bay, our iconic waterfront hotel offers brunch and dinner featuring fresh, locally sourced ingredients.',
        transparentNav: true,
      },
      sections: [],
      seo: {
        metaDescription: 'Savor Pacific Northwest flavors with stunning waterfront views at The Edgewater Hotel.',
      },
    },
  })
  console.log('  done: Dine page')

  // --- Rooms ---
  await payload.create({
    collection: 'rooms',
    data: {
      name: 'Beatles Suite',
      slug: 'beatles-suite',
      category: 'specialty',
      squareFeet: 750,
      sleeps: 2,
      shortDescription: 'Relive a legendary moment in history and stay in the suite made famous by the iconic image of The Beatles fishing out of the window.',
      amenities: [
        { name: 'Gas fireplace' },
        { name: '50" Television & streaming entertainment' },
        { name: 'Keurig coffee machine' },
        { name: 'Refrigerator & Honor Bar' },
        { name: 'Laptop-compatible in-room safe' },
        { name: 'Down feather comforter' },
        { name: 'In-room Wi-Fi' },
        { name: 'Glass surround shower with waterfall & handheld heads' },
        { name: 'Panoramic views of Elliott Bay' },
        { name: 'State-of-the-art stereo with Beatles CD collection' },
        { name: 'Living room, dining area and library' },
      ],
      tourUrl: 'https://visitingmedia.com/tt8/?ttid=the-edgewater-hotel-icms/',
      featured: true,
      sortOrder: 1,
    },
  })
  console.log('  done: Beatles Suite')

  await payload.create({
    collection: 'rooms',
    data: {
      name: 'Pearl Jam Suite',
      slug: 'pearl-jam-suite',
      category: 'specialty',
      squareFeet: 750,
      sleeps: 2,
      shortDescription: "We partnered with Pearl Jam's Eddie Vedder and their fan club to design the ultimate Seattle band-inspired suite, perfect for music lovers.",
      featured: true,
      sortOrder: 2,
    },
  })
  console.log('  done: Pearl Jam Suite')

  await payload.create({
    collection: 'rooms',
    data: {
      name: 'Over-Water King with Balcony',
      slug: 'over-water-king-with-balcony',
      category: 'over-water',
      squareFeet: 350,
      sleeps: 2,
      shortDescription: 'Take in majestic views of the Olympic Mountains from a spacious balcony with Adirondack chairs, then unwind with a plush king bed and cozy fireplace.',
      featured: true,
      sortOrder: 3,
    },
  })
  console.log('  done: Over-Water King with Balcony')

  // --- Dining Venues ---
  await payload.create({
    collection: 'dining-venues',
    data: {
      name: 'Six Seven Restaurant',
      slug: 'six-seven-restaurant',
      type: 'restaurant',
      tagline: 'Signature Restaurant',
      phone: '206.269.4575',
      email: 'dining@edgewaterhotel.com',
      hours: [
        { label: 'Brunch', days: 'Sat & Sun', times: '7:00am - 2:00pm' },
        { label: 'Dinner', days: 'Sun - Thurs', times: '5:30pm - 9:00pm' },
        { label: 'Dinner', days: 'Fri & Sat', times: '5:30pm - 9:30pm' },
        { label: 'Lounge', days: 'Mon - Fri', times: '3:00pm - 11:00pm' },
        { label: 'Lounge', days: 'Sat & Sun', times: '11:00am - 11:00pm' },
      ],
      menuSections: [
        {
          heading: 'Light Fare',
          items: [
            { name: 'Yogurt Parfait', description: 'house-made granola, berries', price: '$16' },
            { name: 'Bagel & Cream Cheese', description: 'plain or everything', price: '$11' },
            { name: 'Warm Steel Cut Oats', description: 'brown sugar, berries, sliced almonds', price: '$16' },
          ],
        },
        {
          heading: 'Eggs & Such',
          items: [
            { name: 'Lodge Breakfast', description: 'two eggs, breakfast meat, toast', price: '$24' },
            { name: 'Breakfast Burrito', description: 'scrambled eggs, chorizo, chipotle aioli, pico de gallo', price: '$24' },
            { name: 'Steak & Eggs', description: 'two eggs, grilled sirloin steak, toast, chimichurri', price: '$39' },
          ],
        },
        {
          heading: 'Handhelds',
          items: [
            { name: 'Six Seven Burger', description: 'grass-fed beef, aged cheddar, chili remoulade, tomato jam', price: '$29' },
            { name: 'Korean Chicken Sandwich', description: 'gochujang spiced chicken, mayo, gherkins, cucumber slaw', price: '$26' },
            { name: 'Fish & Chips', description: 'beer-battered cod, tartar sauce', price: '$32' },
          ],
        },
        {
          heading: 'Soup & Salad',
          items: [
            { name: 'Six Seven Clam Chowder', description: 'bacon, celery, potatoes', price: '$15' },
            { name: 'PNW Cobb', description: 'shrimp, crab, salmon, mixed greens, egg, avocado, bacon', price: '$32' },
            { name: 'Caesar', description: 'romaine, parmesan reggiano, croutons', price: '$17' },
          ],
        },
      ],
      featured: true,
      sortOrder: 1,
    },
  })
  console.log('  done: Six Seven Restaurant')

  await payload.create({
    collection: 'dining-venues',
    data: {
      name: 'The Brim Coffee Shop',
      slug: 'the-brim-coffee-shop',
      type: 'coffee-shop',
      tagline: 'Coffee & Gifts',
      featured: true,
      sortOrder: 2,
    },
  })

  await payload.create({
    collection: 'dining-venues',
    data: {
      name: 'Lobby Bar',
      slug: 'lobby-bar',
      type: 'bar',
      tagline: 'Seasonal Pop-Up',
      featured: true,
      sortOrder: 3,
    },
  })

  await payload.create({
    collection: 'dining-venues',
    data: {
      name: 'In-Room Dining',
      slug: 'in-room',
      type: 'in-room',
      tagline: 'Room Service',
      featured: true,
      sortOrder: 4,
    },
  })
  console.log('  done: All dining venues')

  console.log('\nSeed complete! All Edgewater content loaded.')
  process.exit(0)
}

seed().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})
