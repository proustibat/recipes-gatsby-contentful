import { graphql, PageProps } from 'gatsby';
import { Link, useTranslation } from 'gatsby-plugin-react-i18next';
import { PageContext } from 'gatsby-plugin-react-i18next/dist/types';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

type DataProps = {
  site: {
    buildTime: string;
  };
  pageContext: PageContext;
};

const UsingTypescript: React.FC<PageProps<DataProps>> = ({
  data: {
    site: { buildTime },
  },
  pageContext,
}) => {
  const { t } = useTranslation(['translations', 'metadata', 'usingtypescript']);
  return (
    <Layout>
      <SEO
        title={t('metadata:title--using-typescript')}
        lang={(pageContext as PageContext).language}
      />
      <h1>{t('usingtypescript:title')}</h1>
      <p
        dangerouslySetInnerHTML={(() => ({
          __html: t('usingtypescript:description'),
        }))()}
      />
      <p>{buildTime}</p>
      <Link to="/">{t('translations:backHome')}</Link>
    </Layout>
  );
};

export default UsingTypescript;

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`;
