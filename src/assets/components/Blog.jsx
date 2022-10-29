import React from 'react';
import CardComponent from './Card';

function Blog() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h1>All Blog Posts</h1>
        </div>
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    </div>
  );
}

export default Blog;
