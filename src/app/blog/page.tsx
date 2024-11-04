import React from 'react';
import BlogPostCard from '../../components/blogPostCard/blogPostCard';
import styles from './page.module.css';

const HomePage = () => {
  return (
    <div className={styles.page}>

      <h1>Blog feed</h1>

      <div className={styles.projcardContainer}>
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

    <div className={styles.projcardContainer}>
<BlogPostCard
        image="https://upload.wikimedia.org/wikipedia/en/3/3a/The_Sound_of_Sonny.jpg"
        genre="Jazz"
        title="Exploring Cool Jazz"
        author="Jordan Houghton"
        date="October 31, 2024"
        snippet="5 Records You Need to Hear"
        link="/exploringcooljazz"
      />
      </div>

      
    </div>
  );
};

export default HomePage;
