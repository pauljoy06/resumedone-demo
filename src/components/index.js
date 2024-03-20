import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import Sidebar from './sidebar';

function Icon(props) {
    let width, height;

    if (props.size) {
        width = height = props.size;
    } else if (props.width || props.height) {
        if (props.width) {
            width = props.width;
        }

        if (props.height) {
            height = props.height;
        }
    } else {
        width = height = 12;
    }

    return <div className='icon'>
        <div onClick={props.onClick}
            className={`icon-image ${props.className || ''}`}
            style={{
                width: width ? width + 'px' : undefined,
                height: height ? height + 'px' : undefined,
                backgroundImage: `url(${props.image})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: `${width}px ${height}px`,
                ...props.style,
            }}
        >
        </div>
    </div>
}

const Input = (props) => {
    let inputElement;

    let className = 'input';
    if (props.className) {
        className += ' ' + props.className;
    }

    inputElement = <div className={className}>
        <input {...props}
            className={`input-element input-display-text ${props.error && 'error'}`}
            name={props.name}
            value={props.value}
        />

        {props.postfixIconPath && <Icon path={props.postfixIconPath}
            onClick={props.onPostfixClick}
            className='postfix'
            size={12}
        />}
    </div>

    return <div className={className}>
        {props.label && <label className='label'>
            {props.label}
            {props.required && <span className='required'> *</span>}
        </label>}
        {inputElement}
    </div>
}

export {
    Icon,
    Sidebar,
    Input,
}
