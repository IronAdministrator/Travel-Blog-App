import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';  
import {Carousel} from 'react-bootstrap';
import '../App.css';
import marked from 'marked'; // need to install marked

const Blog = ({article}) => {
    console.log(article)

    const {title, blogEntry, image, location, date} = article.fields;
    const blogDescription = marked(blogEntry)  // to format text into html format

    return (
        <div className='container'>
            {/* <Card  style={{ width: '50rem' }}>
                <CardBody>
                    <CardTitle tag='h1'>
                        {title}
                    </CardTitle>
                    <CardSubtitle tag='h4'>
                        Location: {location}
                    </CardSubtitle>
                    <CardSubtitle>
                        {date}
                    </CardSubtitle>
                </CardBody>
                <img  src={image[0].fields.file.url} />
                <CardBody>
                    <CardText>
                        <section dangerouslySetInnerHTML={{ __html: blogDescription }}  />
                    </CardText>
                </CardBody>
            </Card> */}


            <div className='card'>
                <div className='blog-entries'>
                    <h1 className='title'>{title}</h1>
                    <div className='location-date-time'>
                        <div><b>Location:</b> {location} </div>
                        <div><b>Posted at:</b> {date}</div>
                    </div>
                    <div className='blog-image'>
                    
                        <Carousel>
                            <Carousel.Item>
                                <img src={image[0].fields.file.url}/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={image[1].fields.file.url}/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={image[2].fields.file.url}/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={image[3].fields.file.url}/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={image[4].fields.file.url}/>
                            </Carousel.Item>
                        </Carousel>
                        
                    </div>
                    <div className='description'>
                        <section dangerouslySetInnerHTML={{ __html: blogDescription }} />
                    </div>
                </div>
            </div> 
        
        </div>
    );
}

export default Blog;