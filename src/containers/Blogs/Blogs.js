import React, { Component } from 'react';
import { mediumAxios } from '../../axios';
import { mediumKey } from '../../key';
import parse from 'html-react-parser';
import { blockDragNDrop } from '../../shared/utils';
import BlogsStyles from './Blogs.module.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import BlogCard from '../../components/BlogCard/BlogCard';

class Blogs extends Component {
  state = {
    blogs: []
  }

  componentDidMount() {
    this.getBlogs();
  }

  async getBlogs() {
    try {
      const data = await mediumAxios.get(`codenameuriel/medium/${mediumKey}`);
      const filteredData = data.data.filter(blog => !(["content:encoded"] in blog));
      this.setState({
        blogs: filteredData
      });

    } catch (error) {
      console.log(error)
    }
  }

  parseImages() {
    let images = this.state.blogs.map(blog => {
      let figureElementArr;
      let imageElementArr;

      if (blog['content:encoded']) {
        figureElementArr = blog['content:encoded'].split('</figure>');
        imageElementArr = figureElementArr[0].split('<figure>');
      }
      
      if (blog['content']) {
        figureElementArr = blog['content'].split('</a>');
        imageElementArr = figureElementArr[0].split('-2">');
      }
    
      return imageElementArr[1];
    });

    return images;
  }

  parseDates() {
    let dates = this.state.blogs.map(blog => {
      let dateArr = blog.pubDate.split(' ');
      return `${dateArr[2]} ${dateArr[1]}, ${dateArr[3]}`
    })

    return dates;
  }

  renderBlogs() {
    let dates = this.parseDates();
    let images = this.parseImages();
    let blogs = <Spinner />;

    if (this.state.blogs.length > 0) {
      blogs = (
        this.state.blogs.map((blog, index) => {
          const snip = blog.contentSnippet.split('Continue')[0];
          const specialChars = snip.slice(snip.length - 1)
          const continueSnip = blog.contentSnippet.split(specialChars)[1];
          const formattedSnip = snip.slice(0, snip.length - 1) + '...';
          const blogData = {
            key: blog.isoDate,
            title: blog.title,
            link: blog.guid,
            image: parse(images[index]),
            published: dates[index],
            snippet: formattedSnip,
            continueSnip
          };

          return <BlogCard key={blog.isoDate} blogData={blogData} />;
        })
      );
    }

    return blogs;
  }

  renderBlogPageDetails = () => {
    return (
      <div className={BlogsStyles.PageDetails}>
        <p>Aside from programming, I write blogs on Medium to share my knowledge and discoveries. I also keep my portfolio up to date with my latest 10 blogs. To read earlier blogs, please check out my <span><a href="https://codenameuriel28.medium.com/ " target="_blank" rel="noopener noreferrer" onMouseDown={blockDragNDrop}>Medium</a></span>.</p>
      </div>
    );
  }

  render() {
    this.parseImages();
    return (
      <div className={BlogsStyles.Blogs}>
        <h2 className={BlogsStyles.Title}>Blogs</h2>
        {this.renderBlogPageDetails()}
        <div className={BlogsStyles.BlogsContainer}>
          {this.renderBlogs()}
        </div>
      </div>
    );
  }
}

export default Blogs;
