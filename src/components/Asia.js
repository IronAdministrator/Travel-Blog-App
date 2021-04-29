import React from 'react';
import Blog from './Blog';


const Asia = ({asiaBlogs}) => {
    return(
        <>
        <h1>Asia</h1>
        <div>
            {
                asiaBlogs.filter(blog =>
                     blog.fields.continent === 'Asia').map((blog, index) => {
                        return ( 
                         <Blog key={index} article={blog} /> 
                        ); 
                     })
            }
        </div>
        </>
    )
}

export default Asia;
