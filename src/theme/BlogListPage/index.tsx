import React from 'react';
import Layout from '@theme/Layout';
import BlogListPaginator from '@theme/BlogListPaginator';
import type {Props} from '@theme/BlogListPage';
import BlogCard from '@site/src/components/BlogCard';
import styles from '@site/src/components/BlogCard/styles.module.css';

export default function BlogListPage(props: Props): React.JSX.Element {
  const {metadata, items} = props;

  return (
    <Layout title={metadata.blogTitle} description={metadata.blogDescription}>
      <main>
        <div className={styles.cardGrid}>
          {items.map(({content: BlogPostContent}) => {
            const {metadata: postMetadata, frontMatter, assets} = BlogPostContent;
            const image = assets?.image ?? frontMatter.image;

            return (
              <BlogCard
                key={postMetadata.permalink}
                title={postMetadata.title}
                description={postMetadata.description}
                permalink={postMetadata.permalink}
                formattedDate={postMetadata.formattedDate}
                authors={postMetadata.authors}
                image={image}
              />
            );
          })}
        </div>
        <BlogListPaginator metadata={metadata} />
      </main>
    </Layout>
  );
}
