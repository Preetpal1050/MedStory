import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> And we are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="MedStory is the future. Let us exlore how it is?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="April 1, 2023" text="MedStory is the future. Let us exlore how it is?" />
        <Article imgUrl={blog03} date="April 1, 2023" text="MedStory is the future. Let us exlore how it is?" />
        <Article imgUrl={blog04} date="April 2, 2023" text="MedStory is the future. Let us exlore how it is?" />
        <Article imgUrl={blog05} date="April 2, 2023" text="MedStory is the future. Let us exlore how it is?" />
      </div>
    </div>
  </div>
);

export default Blog;
