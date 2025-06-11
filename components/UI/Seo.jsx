import Head from 'next/head'

const Seo = ({ title, description, canonical, ogUrl }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    {canonical && <link rel="canonical" href={canonical} />}
    {ogUrl && <meta property="og:url" content={ogUrl} />}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={process.env.NEXT_PUBLIC_SITE_NAME}></meta>
    <meta property="og:locale" content="en_US"></meta>
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"></meta>
    <meta property="og:image" content={`${process.env.NEXT_PUBLIC_SITE_URL}/images/p1.png`} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:type" content="image/png" />
  </Head>
)

export default Seo
