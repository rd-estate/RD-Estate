import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  url, 
  image, 
  type = 'website', 
  schema,
  noindex = false
}) => {
  const siteTitle = "RD-Estate & Developers | Premium Plots in Pune";
  const defaultDesc = "Buy verified NA residential plots in Loni Kalbhor, Hadapsar, and Uruli Kanchan. 100% clear title, RERA compliant land with 40ft roads and water supply.";
  const siteUrl = "https://rd-estate.in"; // Replace with your actual domain later
  const defaultImage = `${siteUrl}/assets/images/rd-logo.png`; 

  const finalTitle = title ? `${title} | RD-Estate` : siteTitle;
  const finalDesc = description || defaultDesc;
  const finalUrl = url ? `${siteUrl}${url}` : siteUrl;
  const finalImage = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : defaultImage;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDesc} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={finalUrl} />
      
      {/* Robots: Hide 404s or Admin pages if needed */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Facebook / Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDesc} />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:image" content={finalImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDesc} />
      <meta name="twitter:image" content={finalImage} />

      {/* Structured Data (JSON-LD) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;