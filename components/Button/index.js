import React from "react";
import styles from './style.module.scss';
import cn from "classnames";

const Button = ({ variants='outline', size='small', children, ...props}) => {
    return (
        <button className={cn(styles.button, {
            [styles.outline]: variants === 'outline',
            [styles.small]: size === 'small'
        })}
                {...props}
        >
            {children}
        </button>
    );
};

export default Button;
