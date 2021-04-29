import React from 'react';
import Blog from './Blog';
import '../App.css';


const America = ({americaBlogs}) => {
    return(
        <div className='container'>
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
        </div>
    )
}

export default America;
