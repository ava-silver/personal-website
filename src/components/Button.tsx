import { FC } from 'react';
import './Button.css';
import { Link } from 'react-router-dom';


type ButtonStyle = 'btn--primary' | 'btn--outline';
type ButtonSize = 'btn--medium' | 'btn--large';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  buttonStyle?: ButtonStyle;
  buttonSize?: ButtonSize;
}

const Button: FC<ButtonProps> = ({
  children,
  type = 'button',
  onClick = () => {},
  buttonStyle = 'btn--primary',
  buttonSize = 'btn--medium',
}) => {
  return (
    <Link to='/about-me' className='btn-mobile'>
      <button
        className={`btn ${buttonStyle} ${buttonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
