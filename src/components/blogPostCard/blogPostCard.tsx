import React from 'react';
import Link from 'next/link';
import styles from './blogPostCard.module.css';
import Image from 'next/image';

interface BlogPostCardProps {
  image: string;
  genre: string;
  title: string;
  author: string;
  date: string;
  snippet: string;
  link: string; // New prop for the link to the blog post
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  image,
  title,
  author,
  date,
  snippet,
  link,
}) => {
  return (
    <Link legacyBehavior href={link} passHref>
      <a className={styles.cardLink}> 
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <Image src={image} alt={title} className={styles.image} width="150" height="300" />
          </div>
          <div className={styles.details}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.snippet}>{snippet}</p>
            <div className={styles.authorInfo}>
              <span>by {author}</span>
              <span> {date}</span>
            </div>
            
          </div>
        </div>
      </a>
    </Link>
  );
};

export default BlogPostCard;
