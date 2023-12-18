import React, { useState } from 'react';
import './Button.scss'


interface ButtonProps {
    text: string,
    type: string,
    onCLick?: (id?: number) => void,
    id?: number
}
const Button = ({ type, text, onCLick, id }: ButtonProps) => {
    const onCLickHandler = () => {
        onCLick?.(id)
    }
    const [hover, setHover] = useState<boolean>(false)
    const mouseOverHandler = () => {
        setHover(true)
    }
    const mouseLeaveHandler = () => {
        setHover(false)
    }
    return (
        <div>
            <button
                className={(hover ? 'default-button-hovered ' : 'default-button ') + type}
                onClick={onCLickHandler}
                onMouseEnter={mouseOverHandler}
                onMouseLeave={mouseLeaveHandler}>
                {text}
            </button>
        </div>
    );
};

export default Button;