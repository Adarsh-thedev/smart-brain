import React from 'react';
import './CelebRecognition.css'

const CelebRecognition = ({celebName, imageUrl}) => {
    return(
        <React.Fragment>
            <div className="mw5 center bg-transparent shadow-5 br3 pa3 pa4-ns mv3 ba b--black-10">
                <div className="tc">
                    <img alt = 'celeb' src={imageUrl} className="br-100 h5 wd6 dib pa2"/>
                    <h2 className="f3 fw4 black mt0">{celebName.toUpperCase()}</h2>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CelebRecognition;