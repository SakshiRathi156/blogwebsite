// import React from 'react';

// const BlogCard = ({ blog }) => {
//   return (
//     <div className="blogcontainer">
//         <div className="mainpart">
//       <img src={blog.image} className="blogimg" alt={blog.title} />
//         <h5 className="blogtitle">{blog.title}</h5>
//         {/* <p className="card-text">{blog.description}</p> */}
//         <button className='readmore'>Read more</button>
//       </div>
//     </div>
//   );
// };

// export default BlogCard;

import React from 'react';
import {Link} from 'react-router-dom';

const BlogCard = ({ blog }) => {
  return (
    <div className="blogcontainer">
      <div className="mainpart">
        <img src={blog.image} className="blogimg" alt={blog.title} />
        <h5 className="blog-title">{blog.title}</h5>
        {/* <p className="card-text">{blog.description}</p> */}
        {/* <button className="readmore">Read more</button> */}
        <Link to={`/blog/${blog._id}`}>
        <button className="readmore">Read More→</button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
