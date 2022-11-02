import React from 'react';
import { useParams } from 'react-router-dom';

function BlogView() {
  const { id } = useParams();
  const [blog, setBlog] = React.useState();
  const [errors, setErrors] = React.useState();

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://blog-api-covalhalla.herokuapp.com/api/blogs/${id}`,
      );
      const data = await response.json();
      if (response.ok) {
        setBlog(data);
      } else {
        setErrors(data);
      }
    };
    fetchData();
    console.log(blog);
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center p-3">
        {blog ? (
          <div className="col-xl-6 ">
            <h1>{blog.title}</h1>
            <div className="row">
              <p className="col">Posted by: {blog.user.username}</p>
              <p className="col">Date: {blog.Date}</p>
            </div>
            <p>{blog.content}</p>
          </div>
        ) : null}
        {errors ? <p className="text-center">{errors.error}</p> : null}
      </div>
    </div>
  );
}

export default BlogView;
