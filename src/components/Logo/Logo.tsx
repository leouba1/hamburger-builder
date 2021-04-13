import classes from './Logo.module.css';
import React from 'react'
import burgerLogo from '../../assets/images/burger-logo.png';

type Props = {
    height: string;
}

const Logo = ({height}: Props) => {
    return (
        <div className={classes.Logo} style={{height: height}}>
            <img src={burgerLogo} alt="burger-logo"/>
        </div>
    )
}

export default Logo;
