import { siteConfig } from "@/data/site";

export function LawFirmJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LegalService",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/logo.png`,
        description: siteConfig.description,
        telephone: `+${siteConfig.whatsapp}`,
        email: siteConfig.email,
        address: {
          "@type": "PostalAddress",
          addressCountry: "BR",
        },
        sameAs: [siteConfig.instagram],
        areaServed: {
          "@type": "Country",
          name: "Brazil",
        },
        knowsAbout: ["Direito Trabalhista", "Direito Previdenciário", "INSS", "CLT"],
        priceRange: "$$",
      },
      {
        "@type": "Attorney",
        "@id": `${siteConfig.url}/#attorney`,
        name: "Danyelle Freitas",
        url: siteConfig.url,
        image: `${siteConfig.url}/foto-advogada.jpg`,
        description: siteConfig.description,
        telephone: `+${siteConfig.whatsapp}`,
        email: siteConfig.email,
        worksFor: { "@id": `${siteConfig.url}/#organization` },
        knowsAbout: ["Direito Trabalhista", "Direito Previdenciário"],
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "OAB",
          recognizedBy: { "@type": "Organization", name: "Ordem dos Advogados do Brasil" },
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        publisher: { "@id": `${siteConfig.url}/#organization` },
        potentialAction: {
          "@type": "SearchAction",
          target: { "@type": "EntryPoint", urlTemplate: `${siteConfig.url}/conteudo?q={search_term_string}` },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  slug,
  publishedAt,
  author = "Dra. Danyelle Freitas",
}: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  author?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    author: {
      "@type": "Person",
      name: author,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    datePublished: publishedAt,
    dateModified: publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/conteudo/${slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
