import React from 'react';
import Layout from '@theme/Layout';
import BlogListPaginator from '@theme/BlogListPaginator';
import type {Props} from '@theme/BlogListPage';
import BlogCard from '@site/src/components/BlogCard';
import styles from '@site/src/components/BlogCard/styles.module.css';

export default function BlogListPage(props: Props): React.JSX.Element {
  const {metadata, items} = props;

  // Filter out unlisted posts
  const listedItems = items.filter(({content: BlogPostContent}) => {
    return !BlogPostContent.frontMatter.unlisted;
  });

  return (
    <Layout title={metadata.blogTitle} description={metadata.blogDescription}>
      <main>
        <div className={styles.cardGrid}>
          {listedItems.map(({content: BlogPostContent}) => {
            const {metadata: postMetadata, frontMatter, assets} = BlogPostContent;
            const image = assets?.image ?? frontMatter.image;
            const formattedDate = postMetadata.date
              ? new Date(postMetadata.date as unknown as string).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  timeZone: 'UTC',
                })
              : '';

            return (
              <BlogCard
                key={postMetadata.permalink}
                title={postMetadata.title}
                description={postMetadata.description}
                permalink={postMetadata.permalink}
                formattedDate={formattedDate}
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
