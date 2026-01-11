import React from 'react';
import './Skeleton.css';

const Skeleton = ({ type = 'text', width, height }) => {
    const style = {
        width,
        height,
    };
    return <div className={`skeleton ${type}`} style={style}></div>;
};

export default Skeleton;
