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
  </Head>
)

export default Seo
