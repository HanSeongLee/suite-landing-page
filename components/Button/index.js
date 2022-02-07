import React from "react";
import styles from './style.module.scss';
import cn from "classnames";

const Button = ({ variants='fill', size='normal', children, ...props}) => {
    return (
        <button className={cn(styles.button, {
            [styles.outline]: variants === 'outline',
            [styles.fill]: variants === 'fill',
            [styles.small]: size === 'small',
            [styles.normal]: size === 'normal'
        })}
                {...props}
        >
            {children}
        </button>
    );
};

export default Button;
