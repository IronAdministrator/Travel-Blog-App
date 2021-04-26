import React from 'react'

const Blog = ({article}) => {
    console.log(article)

    const {title, blogEntry, image, description} = article.fields

    return(
        <div>
            <h2>{title}</h2>
            <h5>{blogEntry}</h5>
            { /*  image && <img src={image.fields.file.url}/> */ }
            <section>{description}</section>
        </div>
    );
}

export default Blog;