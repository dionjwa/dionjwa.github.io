import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

interface BlogCardProps {
  title: string;
  description: string;
  permalink: string;
  formattedDate: string;
  authors: {name?: string}[];
  image?: string;
}

export default function BlogCard({
  title,
  description,
  permalink,
  formattedDate,
  authors,
  image,
}: BlogCardProps): React.JSX.Element {
  const authorName = authors?.[0]?.name;

  return (
    <Link to={permalink} className={styles.card}>
      {image ? (
        <img src={image} alt={title} className={styles.cardImage} loading="lazy" />
      ) : (
        <div className={styles.cardImagePlaceholder} />
      )}
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{title}</h3>
        {description && (
          <p className={styles.cardDescription}>{description}</p>
        )}
        <div className={styles.cardMeta}>
          {formattedDate}
          {authorName && ` · ${authorName}`}
        </div>
      </div>
    </Link>
  );
}
