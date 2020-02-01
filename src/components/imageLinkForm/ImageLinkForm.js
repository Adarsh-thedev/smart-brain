import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
    return(
        <div>
            <p className = 'f3'>
                {`This magic brain will detect faces in your picture, give it a try`}
            </p>
            <div className = 'center'>
                <div className = 'pa4 br4 shadow-5 center form'>
                    <input type = 'search' className = 'bg-washed-yellow hover-bg-black hover-white pa2 f4 w-70 center br3' />
                    <button className = 'w-30 grow pointer br3 f4 ml2 link ph3 pb2 dib white bg-light-purple'>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;