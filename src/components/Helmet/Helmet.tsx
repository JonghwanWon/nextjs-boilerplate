import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { withoutQuerystring } from '~/helpers/utils/withoutQuerystring';

export type HelmetProps = {
  title?: string;
  description?: string;
  keywords?: string;
  titleWithTemplate?: boolean;
};

const Helmet: FC<HelmetProps> = ({
  title,
  description,
  keywords,
  titleWithTemplate = true,
}) => {
  const router = useRouter();

  const envSiteName = process.env.NEXT_PUBLIC_SEO_SITE_NAME;
  const envTitleTemplate = process.env.NEXT_PUBLIC_SEO_TITLE_TEMPLATE;
  const envSiteAuthor = process.env.NEXT_PUBLIC_SEO_AUTHOR;
  const envKeywords = process.env.NEXT_PUBLIC_SEO_KEYWORDS;
  const envDescription = process.env.NEXT_PUBLIC_SEO_DESCRIPTION;
  const envOgImage = process.env.NEXT_PUBLIC_SEO_OG_IMAGE;
  const envLargeImage = process.env.NEXT_PUBLIC_SEO_LARGE_IMAGE;

  const siteTitle = title || envSiteName;
  const titleContent = titleWithTemplate
    ? `${siteTitle} - ${envTitleTemplate}`
    : siteTitle;
  const descriptionContent = description || envDescription;
  const keywordsContent = keywords || envKeywords;

  return (
    <Head>
      <title>{titleContent}</title>
      <meta name="author" content={envSiteAuthor} />
      <meta name="title" content={titleContent} />
      <meta name="description" content={descriptionContent} />
      <meta name="keywords" content={keywordsContent} />
      <meta property="og:site_name" content={envSiteName} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:url" content={router.asPath} />
      <meta property="og:description" content={descriptionContent} />
      <meta property="og:image" content={`/images/${envOgImage}`} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={descriptionContent} />
      <meta name="twitter:card" content={`/images/${envLargeImage}`} />
      <link
        rel="canonical"
        href={`${router.basePath}${withoutQuerystring(router.asPath)}`}
      />
    </Head>
  );
};

export default Helmet;
