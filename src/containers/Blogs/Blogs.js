import React, { Component } from 'react';
import { mediumAxios } from '../../axios';
import { mediumKey } from '../../key';
import parse from 'html-react-parser';
import BlogsStyles from './Blogs.module.css';
import Spinner from '../../components/UI/Spinner/Spinner';

class Blogs extends Component {
  state = {
    blogs: []
  }

  componentDidMount() {
    this.getBlogs();
    console.log(this.state.blogs);
  }

  blockDragNDrop = event => {
    event.preventDefault();
  }

  async getBlogs() {
    try {
      const data = await mediumAxios.get(`codenameuriel/medium/${mediumKey}`);

      this.setState({
        blogs: data.data
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

  parseDate() {
    let dates = this.state.blogs.map(blog => {
      let dateArr = blog.pubDate.split(' ');
      return `${dateArr[2]} ${dateArr[1]}, ${dateArr[3]}`
    })

    return dates;
  }

  renderBlogs() {
    let dates = this.parseDate();
    let images = this.parseImages();
    let blogs = <Spinner />;

    if (this.state.blogs.length > 0) {
      blogs = (
        this.state.blogs.map((blog, index) => {
          return (
            <div key={blog.isoDate} className={BlogsStyles.Blog}>
              <h3>{blog.title}</h3>
              <a href={blog.guid} target="_blank" rel="noopener noreferrer" onMouseDown={this.blockDragNDrop}>{parse(images[index])}</a>
              <p><strong>Published: {dates[index]}</strong></p>
            </div>
          );
        })
      );
    }

    return blogs;
  }

  render() {
    this.parseImages();
    return (
      <div>
        <h2>Blogs</h2>
        <div className={BlogsStyles.Blogs}>
          {this.renderBlogs()}
        </div>
      </div>
    );
  }
}

export default Blogs;
