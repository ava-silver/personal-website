import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
type ButtonStyle = 'btn--primary' | 'btn--outline';
type ButtonSize = 'btn--medium' | 'btn--large';

export const Button = (
  children: string,//JSX.Element,
  type: 'button' | 'submit' | 'reset',
  onClick: () => void,
  buttonStyle: string = 'btn--primary',
  buttonSize: ButtonSize = 'btn--medium'
) => {
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
