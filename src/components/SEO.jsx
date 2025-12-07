import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  canonical,
  keywords = "property management Christchurch, property manager NZ, rental management"
}) => {
  const siteTitle = "Property Partner";
  const fullTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} | Christchurch Property Management`;
  const url = canonical || "https://propertypartner.co.nz";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteTitle} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;
