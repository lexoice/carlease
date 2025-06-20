export default {
    titleTemplate: `%s | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
    defaultTitle: process.env.NEXT_PUBLIC_SITE_NAME,
    description: 'Lease a car in Philadelphia with our flexible leasing options',
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: process.env.NEXT_PUBLIC_SITE_URL,
      site_name: process.env.NEXT_PUBLIC_SITE_NAME,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/p1.webp`,
          width: 1200,
          height: 630,
          alt: 'Philadelphia Car Lease - Your trusted car leasing partner',
        },
      ],
    },
  }