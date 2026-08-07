import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

export default function SEO({ title, description, url, type, image, schema }) {
  const siteName = "THAKSAAI";
  const defaultDescription = "THAKSAAI collaborates with engineering colleges and placement cells to conduct structured CRT programs, workshops, and final year projects to improve student employability.";

  return (
    <Helmet>
      {/* Standard SEO */}
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name="description" content={description || defaultDescription} />
      <link rel="canonical" href={`https://www.THAKSAAI${url || '/'}`} />

      {/* Open Graph */}
      <meta property="og:type" content={type || 'website'} />
      <meta property="og:title" content={title ? `${title} | ${siteName}` : siteName} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:url" content={`https://www.THAKSAAI${url || '/'}`} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={image || 'https://www.THAKSAAI/og-image.png?v=3'} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title ? `${title} | ${siteName}` : siteName} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || 'https://www.THAKSAAI/og-image.png?v=3'} />

      {/* LLM & AI SEO */}
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

      {/* JSON-LD Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string,
  schema: PropTypes.object,
};
