import { PageProps } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { PageContext } from 'gatsby-plugin-react-i18next/dist/types';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage: React.FC<PageProps> = ({ pageContext }) => {
  const { t } = useTranslation(['404', 'metadata']);
  return (
    <Layout>
      <SEO
        title={t('metadata:title--404')}
        lang={(pageContext as PageContext).language}
      />
      <h1>{t('404:title')}</h1>
      <p>{t('404:content')}</p>
    </Layout>
  );
};

export default NotFoundPage;
