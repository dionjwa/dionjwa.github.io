import React from 'react';
import Layout from '@theme/Layout';
import BlogPostPaginator from '@theme/BlogPostPaginator';
import MDXContent from '@theme/MDXContent';
import {BlogPostProvider, useBlogPost} from '@docusaurus/plugin-content-blog/client';
import type {Props} from '@theme/BlogPostPage';

function BlogPostPageContent({content: BlogPostContent}: Props): React.JSX.Element {
  const {metadata} = useBlogPost();
  const {nextItem, prevItem} = metadata;

  const dateStr = metadata.date
    ? new Date(metadata.date as unknown as string).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC',
      })
    : undefined;

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
              {dateStr}
              {metadata.authors?.[0]?.name && ` · ${metadata.authors[0].name}`}
            </div>
          </header>
          <div className="markdown">
            <MDXContent>
              <BlogPostContent />
            </MDXContent>
          </div>
        </article>
        {(nextItem || prevItem) && (
          <BlogPostPaginator nextItem={nextItem} prevItem={prevItem} />
        )}
      </main>
    </Layout>
  );
}

export default function BlogPostPage(props: Props): React.JSX.Element {
  return (
    <BlogPostProvider content={props.content} isBlogPostPage>
      <BlogPostPageContent {...props} />
    </BlogPostProvider>
  );
}
