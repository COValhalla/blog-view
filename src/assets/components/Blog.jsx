import React from 'react';
import CardComponent from './Card';

function Blog() {
  // Fetch blogs from API
  const [blogs, setBlogs] = React.useState([]);
  React.useEffect(() => {
    fetch('http://localhost:3000/api/blogs')
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  // Render blogs

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <h1>All Blog Posts</h1>
        </div>

        {blogs.blog_list?.map((blog) => (
          <div className="col-12 col-md-6 col-lg-4">
            <CardComponent
              title={blog.title}
              content={blog.content}
              author={blog.author}
              date={blog.date}
              comments={blog.comments}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
