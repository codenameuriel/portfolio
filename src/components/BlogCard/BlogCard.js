import React from 'react';
import BlogCardStyles from './BlogCard.module.css';
import { blockDragNDrop } from '../../shared/utils';

const BlogCard = props => {
  const { key, title, link, image, published, snippet, continueSnip } = props.blogData;

  return (
    <div className={BlogCardStyles.BlogCard} key={key}>
      <div className={BlogCardStyles.Blog}>
        <h1>{title}</h1>
        <a href={link} target="_blank" rel="noopener noreferrer" onMouseDown={blockDragNDrop}>{image}</a>
        <p>Published: {published}</p>
      </div>
      <div className={BlogCardStyles.Snippet}>
        <h3>Description</h3>
        <p>{snippet}<span><a href={link}>{continueSnip}</a></span></p>
      </div>
    </div>
  );
};

export default BlogCard;
