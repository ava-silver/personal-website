import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
type ButtonStyle = 'btn--primary' | 'btn--outline';
type ButtonSize = 'btn--medium' | 'btn--large';

export const Button = ({
  children,
  type,
  onClick = () => {},
  buttonStyle = 'btn--primary',
  buttonSize = 'btn--medium'
} : {
  children: string,
  type: 'button' | 'submit' | 'reset',
  onClick?: () => void,
  buttonStyle?: ButtonStyle,
  buttonSize?: ButtonSize
}) => {
    return (
        <Link to='/about-me' className='btn-mobile'>
            <button className={`btn ${buttonStyle} ${buttonSize}`}
            onClick={onClick}
            type={type}>
                {children}
            </button>
        </Link>
    );
};
