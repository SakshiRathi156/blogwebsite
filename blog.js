import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "./blogcard"; // Ensure the correct path to BlogCard

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getAllBlogs = async () => {
        try {
            const { data } = await axios.get('http://localhost:5000/api/v1/blog/all-blog');
            
            if (data?.success) {
                setBlogs(data?.blogs);
            } else {
                setError("No blogs found");
            }
        } catch (error) {
            setError(error.message || "An error occurred while fetching blogs");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllBlogs();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            {/* <h2 className="heading">Latest Blogs</h2> */}
            {blogs.length > 0 ? (
                <div className="blog-list">
                    {blogs.map((blog) => (
                        <BlogCard
                            key={blog._id}
                            blog={blog} // Pass the entire blog object
                        />
                    ))}
                </div>
            ) : (
                <p>No blogs available</p>
            )}
        </div>
    );
};

export default Blogs;
