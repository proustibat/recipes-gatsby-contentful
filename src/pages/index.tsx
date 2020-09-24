import { graphql, PageProps } from 'gatsby';
import { Link, useTranslation } from 'gatsby-plugin-react-i18next';
import { PageContext } from 'gatsby-plugin-react-i18next/dist/types';
import React from 'react';
import Image from '../components/image';
import Layout from '../components/layout';
import SEO from '../components/seo';

type ContentfulPost = {
  id: string;
  contentful_id: string;
  title: string;
  slug: string;
};

type DataProps = {
  allContentfulPost?: {
    nodes?: ContentfulPost[];
  };
};

const IndexPage: React.FC<PageProps<DataProps>> = ({ data, pageContext }) => {
  const { t } = useTranslation(['home', 'metadata', 'translations']);

  return (
    <Layout>
      <SEO
        title={t('metadata:title--home')}
        lang={(pageContext as PageContext).language}
      />
      <div style={{ maxWidth: `200px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <div>
        <h1>{t('home:static-pages')}</h1>
        <Link to="/page-2/">{t('translations:goToPage')} "Page 2"</Link> <br />
        <Link to="/using-typescript/">
          {t('translations:goToPage')} "Using TypeScript"
        </Link>
      </div>
      <div>
        <h1>{t('home:posts')}</h1>
        <ul>
          {data?.allContentfulPost?.nodes?.map(
            ({ id, contentful_id, title, slug }) => (
              <li key={`${id}-${contentful_id}`}>
                <Link to={`/${slug}`}>{title}</Link>
              </li>
            ),
          )}
        </ul>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ContentFulPosts($language: String) {
    allContentfulPost(
      filter: { node_locale: { eq: $language } }
      sort: { order: ASC, fields: updatedAt }
    ) {
      nodes {
        id
        contentful_id
        title
        slug
      }
    }
  }
`;

export default IndexPage;
