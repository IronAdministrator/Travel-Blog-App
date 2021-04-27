import React from 'react';
import '../App.css';
import marked from 'marked'; // need to install marked

const Blog = ({article}) => {
    console.log(article)

    const {title, blogEntry, image, location, date} = article.fields;
    const blogDescription = marked(blogEntry)  // to format text into html format

    return(
        <div className='container'>
            <div className='blog-container'>
            <h1>{title}</h1>
            <h3>Location: {location}</h3>
            <h4>{date}</h4>
            <img src={image[0].fields.file.url}/>
            {/*<img src={image[1].fields.file.url}/>*/}

            <section dangerouslySetInnerHTML={{ __html: blogDescription }} />
            </div>
        </div>
    );
}

export default Blog;