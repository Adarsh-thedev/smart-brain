import React from 'react';

const ImageLinkForm = () => {
    return(
        <div>
            <p className = 'f3'>
                {`This magic brain will detect faces in your picture, give it a try`}
            </p>
            <div>
                <input type = 'search' className = 'pa2 f4 w-70 center ' />
                <button className = 'w-30'>Detect</button>
            </div>
        </div>
    );
}

export default ImageLinkForm;