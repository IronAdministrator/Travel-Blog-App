import React from 'react';
import '../App.css';
import EuropeBlogs from './EuropeBlogs';


const Europe = ({europeBlogs}) => {
    
    return(
        <>
        <h1>Europe</h1>
        <div>
            {europeBlogs.map((europe, index) => {
           return ( 
            <EuropeBlogs key={index} article={europe} />
           ); 
        })
    }
        </div>
        </>
    )
}

export default Europe;
