import styles from "./page.module.css";
import React from 'react';
import BlogPostCard from '../components/blogPostCard/blogPostCard';


export default function Home() {
  return (
    <div className={styles.page}>
<h1 className={styles.centerText}>Welcome to my Music Blog</h1>
<h2 className={styles.centerText}>Have a read of my most recent post:</h2>
      <div className={styles.card}>
      <BlogPostCard
        image="https://blog-api.landr.com/wp-content/uploads/2024/06/Best-Free-VST-Plugins-in-2024-featured.png"
        genre="Music Production"
        title="My Favourite Plugins"
        author="Jordan Houghton"
        date="November 03, 2024"
        snippet="10 Plugins You Need to Know About"
        link="/thebestplugins"
      />
      </div>
      
    </div>
  );
}
