import React from 'react';
import Blog from './Blog';


const America = ({americaBlogs}) => {
    return(
        <>
        <h1>America</h1>
        <div>
            {
                americaBlogs.filter(blog =>
                     blog.fields.continent === 'America').map((blog, index) => {
                        return ( 
                         <Blog key={index} article={blog} /> 
                        ); 
                     })
            }
        </div>
        </>
    )
}

export default America;
