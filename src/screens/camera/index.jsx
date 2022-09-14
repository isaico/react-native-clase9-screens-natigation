import React, { useState } from 'react';
import { ImageSelector } from '../../components';

const Camera = () => {
    const [image, setImage] = useState('');

    const onHandleImageSelect = (imageUrl) => {
        setImage(imageUrl);
    };
    return <>
        <ImageSelector onImage={onHandleImageSelect} />
    </>
    
};

export default Camera;
