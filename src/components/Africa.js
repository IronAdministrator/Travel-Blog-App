import React from 'react';
import Blog from './Blog';
import '../App.css';


const Africa = ({africaBlogs}) => {
    return(
        <div className='container'>
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
        </div>
    )
}

export default Africa;
