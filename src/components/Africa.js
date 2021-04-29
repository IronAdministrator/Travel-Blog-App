import React from 'react';
import Blog from './Blog'


const Africa = ({africaBlogs}) => {
    return(
        <>
        <h1>Africa</h1>
        <div>
            {
                africaBlogs.filter(blog =>
                     blog.fields.continent === 'Africa').map((blog, index) => {
                        return ( 
                         <Blog key={index} article={blog} /> 
                        ); 
                     })
            }
        </div>
        </>
    )
}

export default Africa;
