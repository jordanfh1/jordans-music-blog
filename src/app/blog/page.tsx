import React from 'react';
import BlogPostCard from '../../components/blogPostCard/blogPostCard';
import styles from './page.module.css';

const HomePage = () => {
  return (
    <div className={styles.page}>
    <div>
      <div className={styles.projcardContainer}>
      <BlogPostCard
        image="https://upload.wikimedia.org/wikipedia/en/3/3a/The_Sound_of_Sonny.jpg"
        genre="Jazz"
        title="Exploring  Jazz"
        author="Jordan Houghton"
        date="October 31, 2024"
        snippet="5 Records You Need to Hear."
        link="/exploringcooljazz"
      />

</div>
<div className={styles.projcardContainer}>
<BlogPostCard
        image="https://upload.wikimedia.org/wikipedia/en/3/3a/The_Sound_of_Sonny.jpg"
        genre="Jazz"
        title="Exploring Cool Jazz"
        author="Jordan Houghton"
        date="October 31, 2024"
        snippet="5 Records You Need to Hear."
        link="/exploringcooljazz"
      />
      </div>

      <div className={styles.projcardContainer}>

<BlogPostCard
        image="https://upload.wikimedia.org/wikipedia/en/3/3a/The_Sound_of_Sonny.jpg"
        genre="Jazz"
        title="Exploring Cool Jazz"
        author="Jordan Houghton"
        date="October 31, 2024"
        snippet="5 Records You Need to Hear."
        link="/exploringcooljazz"
      />

</div>

    </div>
    </div>
  );
};

export default HomePage;
