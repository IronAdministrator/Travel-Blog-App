import React from 'react'
import Blog from './Blog'

const Blogs = ({blogs}) => {
    return (
        <div>
            {blogs.map((blog, index) => <Blog key={index} article={blog} />)}
        </div>
    );
}

export default Blogs;