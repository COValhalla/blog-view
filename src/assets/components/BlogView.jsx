import React from 'react';
import { useParams } from 'react-router-dom';

function BlogView() {
  const { id } = useParams();
  const [blog, setBlog] = React.useState();

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/api/blogs/${id}`);
      const data = await response.json();
      setBlog(data);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        {blog ? (
          <div className="col-12 text-center">
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
            <p>Author: {blog.user.username}</p>
            <p>Date: {blog.date}</p>
            <p>Comments: {blog.comments}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default BlogView;
