import { graphql, PageProps } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';

type DataProps = any;

const Post: React.FC<PageProps<DataProps>> = ({ data }) => (
  <Layout>
    <h1>{data.contentfulPost.title}</h1>
  </Layout>
);

export const query = graphql`
  query ContentFulPost($slug: String, $language: String) {
    contentfulPost(slug: { eq: $slug }, node_locale: { eq: $language }) {
      slug
      node_locale
      title
    }
  }
`;

export default Post;
