import React from 'react';
import '../App.css';
import Blog from './Blog'


const Europe = ({europeBlogs}) => {
    console.log(europeBlogs)
    
    return(
        <>
        <h1>Europe</h1>
        <div>
            {
                europeBlogs.filter(blog =>
                     blog.fields.continent === 'Europe').map((blog, index) => {
                        return ( 
                         <Blog key={index} article={blog} /> 
                        ); 
                     })
            }
        </div>
        </>
    )
}

export default Europe;
