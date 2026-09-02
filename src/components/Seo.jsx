import { Helmet } from 'react-helmet-async'
import { company } from '../data/site'

// Sets unique per-page metadata: title, description, canonical, and Open Graph.
export default function Seo({ title, description, path = '/', image = '/images/logo-full.png' }) {
  const fullTitle = title || `${company.name} | Freight & Logistics in Tanzania`
  const url = `${company.websiteUrl}${path}`
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={company.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}
