import React from 'react';
import Blog from './Blog';
import '../App.css';


const Asia = ({asiaBlogs}) => {
    return(
        <div className='container'>
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
        </div>
    )
}

export default Asia;
