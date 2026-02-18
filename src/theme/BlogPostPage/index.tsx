import React from 'react';
import Layout from '@theme/Layout';
import BlogPostPaginator from '@theme/BlogPostPaginator';
import type {Props} from '@theme/BlogPostPage';

export default function BlogPostPage(props: Props): React.JSX.Element {
  const BlogPostContent = props.content;
  const {metadata, frontMatter} = BlogPostContent;
  const {nextItem, prevItem} = metadata;

  return (
    <Layout
      title={metadata.title}
      description={metadata.description}>
      <main
        style={{
          maxWidth: '720px',
          margin: '0 auto',
          padding: '2rem 1rem',
        }}>
        <article>
          <header>
            <h1>{metadata.title}</h1>
            <div style={{color: 'var(--ifm-color-emphasis-600)', marginBottom: '1.5rem'}}>
              {metadata.formattedDate}
              {metadata.authors?.[0]?.name && ` · ${metadata.authors[0].name}`}
            </div>
          </header>
          <div className="markdown">
            <BlogPostContent />
          </div>
        </article>
        {(nextItem || prevItem) && (
          <BlogPostPaginator nextItem={nextItem} prevItem={prevItem} />
        )}
      </main>
    </Layout>
  );
}
