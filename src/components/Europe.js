import React from 'react';
import Blog from './Blog';
import '../App.css';


const Europe = ({europeBlogs}) => {
    console.log(europeBlogs)
    
    return(
        <div className='container'>
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
        </div>
    )
}

export default Europe;
