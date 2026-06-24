import { Helmet } from 'react-helmet-async';

export default function SEO({
  title,
  description,
  type = 'website',
  url = 'https://kulzum-fitness.netlify.app',
  image = 'https://kulzum-fitness.netlify.app/women.svg',
  schemaData = null
}) {
  const siteTitle = title ? `${title} | KULZUM M. Fitness` : 'KULZUM M. - Personal Fitness Trainer';
  const siteDescription = description || 'Expert personal training, nutrition strategies, and tailored workout routines to help you achieve your perfect health growth.';

  return (
    <Helmet>
      {/* Standard SEO tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={siteDescription} />
      {image && <meta property="twitter:image" content={image} />}

      {/* Canonical Link */}
      <link rel="canonical" href={url} />

      {/* JSON-LD Structured Data */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
}
