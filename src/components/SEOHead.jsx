import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title = "Lex & Ledger - Connect with Expert Legal & CA Professionals",
  description = "Your trusted platform connecting clients with qualified lawyers and chartered accountants. Get expert legal consultation within 10 minutes for emergencies.",
  keywords = "legal services, chartered accountant, lawyer, emergency legal help, tax consultant, legal advice",
  url = "https://lexledger.netlify.app",
  image = "/logo192.png"
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Lex & Ledger" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Lex & Ledger" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Lex & Ledger",
          "description": description,
          "url": url,
          "logo": image,
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "availableLanguage": "English"
          },
          "sameAs": [
            url
          ],
          "service": [
            {
              "@type": "Service",
              "name": "Emergency Legal Service",
              "description": "Connect with a qualified lawyer within 10 minutes for urgent legal matters"
            },
            {
              "@type": "Service", 
              "name": "Legal Consultation",
              "description": "Professional legal advice from qualified lawyers"
            },
            {
              "@type": "Service",
              "name": "CA Services", 
              "description": "Chartered accountant services for tax and compliance matters"
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;

