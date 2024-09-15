// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const BlogContent = () => {
//   const { id } = useParams();
//   const [blog, setBlog] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     console.log('Blog ID:', id); // Log the ID to ensure it's correct
//     const fetchBlog = async () => {
//       if (!id) {
//         setError('Invalid blog ID');
//         return;
//       }

//       try {
//         const response = await axios.get(`http://localhost:5000/api/v1/blog/single-blog/${id}`);

//         setBlog(response.data.blog);
//       } catch (error) {
//         console.error('Error fetching blog details:', error);
//         setError('Error fetching blog details');
//       }
//     };

//     fetchBlog();
//   }, [id]);

//   if (error) return <p>{error}</p>;
//   if (!blog) return <p>Loading...</p>;

//   return (
//     <div>
//         <div className='blogcontent'>
//       <h1>{blog.title}</h1>
//       <p>{blog.content}</p>
//       </div>
//     </div>
//   );
// };

// export default BlogContent;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BlogContent = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Blog ID:', id); // Log the ID to ensure it's correct
    const fetchBlog = async () => {
      if (!id) {
        setError('Invalid blog ID');
        return;
      }

      try {
        const response = await axios.get(`http://localhost:5000/api/v1/blog/single-blog/${id}`);
        setBlog(response.data.blog);
      } catch (error) {
        console.error('Error fetching blog details:', error);
        setError('Error fetching blog details');
      }
    };

    fetchBlog();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!blog) return <p>Loading...</p>;

  return (
    <div>
      <div className='blogcontent'>
        <h1 className='title'>{blog.title}</h1>
        <div className='blogcontent1'>
        {blog.content.map((section, index) => (
          <div key={index}>
            <p className='blogheading'>{section.heading}</p>
            <p className='blog-paragraph'>{section.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default BlogContent;
