import React from 'react';
import '../Style/ContentBody.css';

const ContentBody = (props) => {

    const showMovies = () => {
        const thumbnail = props.children.map((element, index)=>{
            return(
                <div key={index} className="contentbody-grid-element">
                    {element}
                </div>
            )
        })

        return thumbnail
    }

    return(
        <div className="contentbody">
            {props.header && !props.loading ? <h1>{props.header}</h1> : null}
            <div className="contentbody-grid-content">
                { showMovies() }
            </div>
        </div>
    )
}

export default ContentBody