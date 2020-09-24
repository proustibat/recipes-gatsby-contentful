import { PageProps } from 'gatsby';
import { Link, useTranslation } from 'gatsby-plugin-react-i18next';
import { PageContext } from 'gatsby-plugin-react-i18next/dist/types';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const SecondPage: React.FC<PageProps> = ({ pageContext }) => {
  const { t } = useTranslation(['translations', 'metadata', 'page2']);
  return (
    <Layout>
      <SEO
        title={t('metadata:title--page-2')}
        lang={(pageContext as PageContext).language}
      />
      <h1>{t('page2:title')}</h1>
      <p>{t('page2:description')}</p>
      <Link to="/">{t('translations:backHome')}</Link>
    </Layout>
  );
};

export default SecondPage;
