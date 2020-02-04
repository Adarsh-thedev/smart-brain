import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return(
        <div>
            <p className = 'f3'>
                {`This magic brain will recognize celebrity from your given picture link...`}
            </p>
            <div className = 'center'>
                <div className = 'pa4 br4 shadow-5 center form'>
                    <input type = 'search' 
                        className = 'bg-lightest-blue hover-bg-black hover-white pa2 f4 w-70 center br3' 
                        onChange = {onInputChange}
                    />
                    <button 
                        className = 'w-30 tc grow pointer br3 f4 ml2 link ph3 pb2 dib white btn'
                        onClick = {onButtonSubmit}
                    >
                        Detect
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;