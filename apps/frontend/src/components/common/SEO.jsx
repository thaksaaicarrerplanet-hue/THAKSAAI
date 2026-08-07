import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, keywords, url, image }) => {
  const siteName = "THAKSAAI";
  const defaultDescription = "THAKSAAI collaborates with engineering colleges and placement cells to conduct structured CRT programs, workshops, and final year projects to improve student employability.";
  const defaultImage = "https://www.thaksaai.in/og-image.png?v=5.0.0-THAKSAAI";

  return (
    <Helmet>
      <title>{title ? `${title} | ${siteName}` : `${siteName} - Practical Engineering Training`}</title>
      <meta name="description" content={description || defaultDescription} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Canonical URL */}
      <link rel="canonical" href={`https://www.thaksaai.in${url || '/'}`} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || siteName} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:url" content={`https://www.thaksaai.in${url || '/'}`} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={image || defaultImage} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || siteName} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
    </Helmet>
  );
};

export default SEO;
